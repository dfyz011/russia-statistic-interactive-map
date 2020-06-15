const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const puppeteer = require('puppeteer');
const convert = require('xml-js');
const util = require('util');
const db = require('../../models');
const { parseIndicators } = require('./indicators');

const {
  Indicator, Indicators_categories, Region_statistic, Region, Category,
} = db;
const { Op } = db.Sequelize;


const getPostBodyForIndicator = async (indicator) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(`https://fedstat.ru/indicator/${indicator.id}`, { waitUntil: 'domcontentloaded' });
  const postBody = await page.evaluate((id) => {
    const removeSpaces = (str) => {
      return str.replace(/\s/g, '');
    };
    const filtersArray = [];
    const rawGrid = Array.prototype.slice.call(document.querySelectorAll('script')).find((script) => script.innerText.includes('new FGrid')).innerText;
    if (!rawGrid) {
      return filtersArray;
    }
    const rawGridObjects = rawGrid.slice(rawGrid.indexOf('new FGrid(') + 10);
    const titles = Array.from(rawGridObjects.match(/title: '(.+?)',/));
    filtersArray.push({ title: titles[1] });
    filtersArray.push({ lineObjectIds: '0' });
    const leftColumnsString = rawGridObjects.match(/left_columns: \[\s*(.+)\s*]/);
    if (leftColumnsString) {
      removeSpaces(leftColumnsString[1]).split(',').forEach((column) => {
        filtersArray.push({ lineObjectIds: column });
      });
    }
    const topColumns = rawGridObjects.match(/top_columns: \[\s*(.+)\s*]/);
    if (topColumns) {
      removeSpaces(topColumns[1]).split(',').forEach((column) => {
        filtersArray.push({ columnObjectIds: column });
      });
    }

    // const filters = Array.from(rawGridObjects.matchAll(/filter:{(.+?)\',/g));

    let nesting = 0;
    let prefix = '';
    let suffix = '';
    const arrayOfLines = rawGrid.match(/[^\r\n]+/g);
    const filterPostition = arrayOfLines.findIndex((line) => line.includes('filters'));
    const filtersById = {};
    for (let i = filterPostition + 1; i < arrayOfLines.length; i++) {
      if (arrayOfLines[i].includes('{')) {
        nesting += 1;
      }
      if (arrayOfLines[i].includes('}')) {
        nesting -= 1;
      }
      if (arrayOfLines[i].match(/\d+: {/g)) {
        if (nesting <= 2) {
          [prefix] = removeSpaces(arrayOfLines[i]).split(':');
          filtersById[prefix] = [];
        }
        if (nesting > 2) {
          [suffix] = removeSpaces(arrayOfLines[i]).split(':');
          filtersById[prefix].push({ selectedFilterIds: `${prefix}_${suffix}` });
          // postBody.push({ selectedFilterIds: `${prefix}_${suffix}` });
        }
      }
    }
    filtersArray.push({ id });
    // Дробление списка фильтров на части тк у некоторых
    // индикаторов их больше 1500, что потом выливается в огромный sdmx
    const longestArrayKey = { name: '', size: 0 };
    for (const prefixKey of Object.keys(filtersById)) {
      try {
        if (filtersById[prefixKey].length > longestArrayKey.size) {
          longestArrayKey.name = prefixKey;
          longestArrayKey.size = filtersById[prefixKey].length;
        }
      } catch (er) {
        return prefixKey;
      }
    }
    const postBody = [];
    const { [longestArrayKey.name]: longestFilter, ...rest } = filtersById;
    const restFilters = Object.values(rest).flat();
    const step = 30;
    for (let i = 0; i < longestArrayKey.size - step; i += step) {
      postBody.push([...filtersArray, ...restFilters, ...longestFilter.slice(i, i + step)]);
    }
    postBody.push([...filtersArray, ...restFilters, ...longestFilter.slice(Math.floor(longestArrayKey.size / step) * step)]);
    return postBody;
  }, indicator.id);

  await browser.close();
  return postBody;
};

const getSDMXStatisticFile = async (postBody) => {
  try {
    const link = 'https://fedstat.ru/indicator/data.do?format=sdmx';
    const postBodyQuery = postBody.reduce((accumulator, currentValue, index) => index === 0 ? `${accumulator}${qs.stringify(currentValue)}` : `${accumulator}&${qs.stringify(currentValue)}`, '');

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: postBodyQuery,
      url: link,
    };
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getStatisticByIndicator = async (indicator) => {
  console.log(`http://fedstat.ru/indicator/${indicator.id}`);
  const [newIndicator, newIndicatorCreated] = await Indicator.findOrCreate({
    where: {
      title: indicator.title,
    },
    defaults: {
      title: indicator.title,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
  const [mainCategory, mainCategoryCreated] = await Category.findOrCreate({
    where: {
      title: 'ЕМИСС',
    },
    defaults: {
      title: 'ЕМИСС',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
  for (const category of indicator.categories) {
    const [newCategory, newCategoryCreated] = await Category.findOrCreate({
      where: {
        title: category,
      },
      defaults: {
        title: category,
        category_id: mainCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    const [newIndicatorCategory, newIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
      where: {
        indicator_id: newIndicator.id,
        category_id: newCategory.id
      },
      defaults: {
        indicator_id: newIndicator.id,
        category_id: newCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }

  const allStatistic = [];
  const postBody = await getPostBodyForIndicator(indicator);
  for (const part of postBody) {
    console.log('part');
    const sdmx = await getSDMXStatisticFile(part);
    console.log('sdmx');
    const json = convert.xml2json(sdmx, { compact: false, spaces: 4 });
    console.log('json');
    const statistics = JSON.parse(json).elements[0].elements.find((element) => element.name === 'DataSet');
    // fs.writeFile('Output2.txt', JSON.stringify(statistics), (err) => {
    //   if (err) throw err;
    // });
    console.log('statistics');
    const statisticArray = [];
    const newRegions = [];
    for (const statistic of statistics.elements) {
      const data = statistic.elements;
      const seriesKeys = data.find((element) => element.name === 'generic:SeriesKey').elements;
      const attributes = data.find((element) => element.name === 'generic:Attributes').elements;
      const observations = data.find((element) => element.name === 'generic:Obs').elements;

      // console.log('seriesKeys', seriesKeys);
      const { concept: keyConcept, value: keyValue } = seriesKeys[0].attributes;
      if (keyConcept === 's_OKVED' || keyConcept === 'АП') break;
      if (`${keyValue}`.length !== 2) continue;

      const extendedOKATO = `${keyValue}${'0'.repeat(`${keyValue}`.length >= 11 ? 0 : 11 - `${keyValue}`.length)}`;
      const region = await Region.findOne({
        where: {
          [Op.or]: [
            {
              reg_alias_okato: {
                [Op.or]: [keyValue, extendedOKATO]
              }
            },
            {
              reg_kladr_id: keyValue
            },
          ]
        }
      });
      if (!region) {
        // if (regionKladrId === '442014') {
        //   console.log(placeOfSearch.name, tabType.name, mode, year);
        // }
        newRegions.push(keyValue);
        continue;
        // process.exit(0);
      }

      const measurementUnit = attributes.find((element) => element.attributes.concept === 'EI').attributes.value;

      // console.log('measurementUnit', measurementUnit);

      const period = attributes.find((element) => element.attributes.concept === 'PERIOD').attributes.value;

      // console.log('period', period);

      const year = observations.find((element) => element.name === 'generic:Time').elements[0].text;

      // console.log('times', times);

      const { value } = observations.find((element) => element.name === 'generic:ObsValue').attributes;

      // console.log('values', values);

      if (value !== undefined && value !== null) {
        const [newStatistic, newStatisticCreated] = await Region_statistic.findOrCreate({
          where: {
            year: `${parseInt(year)}`,
            indicator_id: newIndicator.id,
            region_id: region.reg_ID,
          },
          defaults: {
            year: `${parseInt(year)}`,
            indicator_id: newIndicator.id,
            value,
            measurement_unit: measurementUnit,
            region_id: region.reg_ID,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        if (!newStatisticCreated && newStatistic.value !== value) {
          console.log('dublicate-count', newStatisticCreated, newStatistic.value,);
          console.log(newStatistic.region_id, newStatistic.indicator_id, newStatistic.value, newStatistic.year);
          console.log(region.reg_ID, newIndicator.id, value, `${parseInt(year)}`);
          const dublicateOfStatistic = await Region_statistic.create({
            year: `${parseInt(year)}`,
            indicator_id: newIndicator.id,
            value,
            measurement_unit: measurementUnit,
            region_id: region.reg_ID,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      }


      // console.log(seriesKeys);
      // console.log(attributes);
      // console.log(obs);
      statisticArray.push({
        keyConcept, keyValue, year, period, value, measurementUnit,
      });
    }
    allStatistic.push(statisticArray);
  }

  // console.log(allStatistic);
  // console.log(util.inspect(statistic, false, null, true));
  console.log(`http://fedstat.ru/indicator/${indicator.id}`);
  return allStatistic;
};


const getAllStatistic = async () => {
  const indicators = await parseIndicators();
  const errors = [];
  for (const [index, indicator] of indicators.entries()) {
    try {
      console.log(indicator.title);
      console.log(index);
      // https://fedstat.ru/indicator/40472
      // 52,21,55,103,116,128,137,167,168,210
      if (index < 369) {
        continue;
      }
      const statistic = await getStatisticByIndicator(indicator);
    // console.log(statistic);
    } catch (err) {
      console.log(err, index, indicator.title);
      errors.push({ err, index, title: indicator.title });
    }
  }
  fs.writeFile('Errors.json', JSON.stringify(errors), (err) => {
    if (err) throw err;
  });
  // const [parentGroup, parentGroupCreated] = await Indicator_group.findOrCreate(
  //   {
  //     where: {
  //       name: placeOfSearch.name,
  //     },
  //     defaults: {
  //       title: placeOfSearch.title,
  //       name: placeOfSearch.name,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     }
  //   }
  // );
};

getAllStatistic();

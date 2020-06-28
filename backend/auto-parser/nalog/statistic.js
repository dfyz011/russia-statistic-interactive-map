const fs = require('fs');
const { getStatistic } = require('./getStatistic');
const db = require('../../models');


const {
  Indicator, Category, Indicators_categories, Region_statistic, Region
} = db;
const { Op } = db.Sequelize;

const regionColumnNames = [
  'УФНС России по субъектам Российской Федерации',
  'Наименование региона Российской Федерации',
  'Субъекты РФ',
  'Субъекты Российской Федерации',
  'Регион'
];

const datasetsInfo = [
  {
    name: '7707329152-masaddress',
    dataEncoding: 'utf8',
    structureEncoding: 'windows1251'
  },
  {
    name: '7707329152-poved',
    dataEncoding: 'windows1251',
    structureEncoding: 'windows1251'
  },
  {
    name: '7707329152-usn',
    dataEncoding: 'utf8',
    structureEncoding: 'utf8'
  },
  {
    name: '7707329152-post',
    dataEncoding: 'windows1251',
    structureEncoding: 'windows1251'
  },
  {
    name: '7707329152-zatea',
    dataEncoding: 'maccyrillic',
    structureEncoding: 'maccyrillic'
  },
  {
    name: '7707329152-zatean',
    dataEncoding: 'maccyrillic',
    structureEncoding: 'maccyrillic'
  },
  {
    name: '7707329152-assetorg',
    dataEncoding: 'utf8',
    structureEncoding: 'utf8'
  },
  {
    name: '7707329152-1nomn',
    dataEncoding: 'windows1251',
    structureEncoding: 'utf8'
  },
  {
    name: '7707329152-1nmpn',
    dataEncoding: 'utf8',
    structureEncoding: 'utf8'
  },
  // {
  //   name: '7707329152-usnr',
  //   dataEncoding: 'windows1251',
  //   structureEncoding: 'windows1251'
  // },
  // {
  //   name: '7707329152-envdr',
  //   dataEncoding: 'utf8',
  //   structureEncoding: 'utf8'
  // },
];

(async () => {
  const [category, categoryCreated] = await Category.findOrCreate(
    {
      where: {
        name: 'Налоги'
      },
      defaults: {
        title: 'Налоги',
        // category_id: parentCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
  );
  for (const info of datasetsInfo) {
    getStatistic(info)
      .then(async ({ result, measurement_unit }) => {
        // console.log('result', result);
        console.log('info', measurement_unit);
        const correctMeasurementUnit = ['тыс.рублей', 'thousand rubles'].includes(measurement_unit) ? '₽' : '';
        const valueMultiplier = ['тыс.рублей', 'thousand rubles'].includes(measurement_unit) ? 1000 : 1;
        const statisticKeys = Object.keys(result[0]);
        const regionColumnName = statisticKeys.find((key) => regionColumnNames.includes(key));

        if (regionColumnName !== 'Регион') {
          // console.log(regionColumnName);
          const numericKeys = statisticKeys.filter((key) => ![regionColumnName, 'Код региона'].includes(key));
          // console.log(numericKeys);

          for (const record of result) {
            const regionName = record[regionColumnName]
              .replace('г.', '')
              .replace(/\s+/g, ' ')
              .replace('г.', 'Город федерального значения')
              .replace('город ', 'Город федерального значения ')
              .replace('республика', 'Республика')
              .replace(' АО', ' автономный округ')
              .replace(' - ', ' — ')
              .replace('Ямало-Hенецкий', 'Ямало-Ненецкий')
              .replace('Марий-Эл', 'Марий Эл')
              .replace('РОССИЙСКАЯ ФЕДЕРАЦИЯ', 'Российская Федерация')
              .replace('Осетия-Алания', 'Осетия — Алания')
              .replace(/^\s/g, '')
              .replace(/\s$/g, '');
            const region = await Region.findOne({
              where: {
                [Op.or]: [
                  { reg_alias_the_constitutional_name: regionName },
                  { reg_alias_human_name: regionName }
                ]
              }
            });


            if (!region) {
              // if (regionKladrId === '442014') {
              //   console.log(placeOfSearch.name, tabType.name, mode, year);
              // }
            // newRegions.push(regionColumnName);
              console.log('newRegion', regionName);
              // process.exit(0);
            } else {
              for (const numericKey of numericKeys) {
                // console.log(numericKey, ':', record[numericKey]);

                const formattedNumericKey = numericKey
                  .replace(/\s+/g, ' ')
                  .replace(/182.*/g, ' ')
                  .replace(/\\n|\\r/g, '');
                const [indicator, indicatorCreated] = await Indicator.findOrCreate({
                  where: {
                    title: `${formattedNumericKey}`,
                  },
                  defaults: {
                    title: `${formattedNumericKey}`,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  }
                });
                const [indicatorCategory, newIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
                  where: {
                    indicator_id: indicator.id,
                    category_id: category.id
                  },
                  defaults: {
                    indicator_id: indicator.id,
                    category_id: category.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  }
                });
                if ((record[numericKey] !== undefined) && (record[numericKey] !== null)) {
                  const [statistic, statisticCreated] = await Region_statistic.findOrCreate({
                    where: {
                      year: '2020',
                      indicator_id: indicator.id,
                      region_id: region.reg_ID,
                    },
                    defaults: {
                      year: '2020',
                      indicator_id: indicator.id,
                      value: `${Number(record[numericKey].replace(/\s+/g, '')) * valueMultiplier}`,
                      measurement_unit: correctMeasurementUnit,
                      region_id: region.reg_ID,
                      createdAt: new Date(),
                      updatedAt: new Date()
                    }
                  });
                  if (!statisticCreated && (`${statistic.value}` !== `${Number(record[numericKey].replace(/\s+/g, '')) * valueMultiplier}`)) {
                    console.log('dublicate-count', statisticCreated, statistic.region_id, statistic.value, record[numericKey]);
                    const dublicateOfStatistic = await Region_statistic.create({
                      year: '2020',
                      indicator_id: indicator.id,
                      value: `${Number(record[numericKey].replace(/\s+/g, '')) * valueMultiplier}`,
                      measurement_unit: correctMeasurementUnit,
                      region_id: region.reg_ID,
                      createdAt: new Date(),
                      updatedAt: new Date()
                    });
                  }
                }
              }
            }
          }
        }
      });
    // await writeStatistic(statistic);
  }
  // await getStatistic(datasetsInfo[6]);
})();

const puppeteer = require('puppeteer');
const iconv = require('iconv-lite');
const https = require('https');
const fs = require('fs');
const csv = require('csvtojson');

const url = 'http://www.nalog.ru/opendata/';

const getDatasetStructure = (
  name,
  structureEncoding,
  datasetStructureHref
) => new Promise((resolve, reject) => {
  https.get(datasetStructureHref, (res) => {
    res.pipe(iconv.decodeStream(structureEncoding))
      .collect(async (err, decodedBody) => {
        let datasetStructure = await csv({ delimiter: ';', ignoreEmpty: true, trim: true, })
          .fromString(decodedBody);
        if (Object.keys(datasetStructure[0]).includes('GA')) {
          // для 7707329152-assetorg
          datasetStructure = await csv({
            delimiter: ';',
            ignoreEmpty: true,
            trim: true,
            noheader: true,
            headers: [
              'The name of the set',
              'The relevance of the data',
              'Id',
              'Field name',
              'English name',
              'Description',
              'field Type',
              'unique',
              'obligatory',
              'length',
            ]
          })
            .fromString(decodedBody);
        }
        fs.writeFile(`${name}Structure.txt`, JSON.stringify(decodedBody), (err) => {
          if (err) throw err;
        });
        // console.log(decodedBody);
        resolve(datasetStructure);
      });
  }).on('error', (e) => {
    reject(`Got error: ${e.message}`);
  });
});

const getDataset = (
  name, dataEncoding, datasetHref
) => (
  new Promise((resolve, reject) => {
    https.get(datasetHref, (res) => {
      res.pipe(iconv.decodeStream(dataEncoding))
        .collect(async (err, decodedBody) => {
          const dataset = await csv({ delimiter: ';', ignoreEmpty: true, trim: true, })
            .fromString(decodedBody);
          fs.writeFile(`${name}Data.txt`, JSON.stringify(decodedBody), (err) => {
            if (err) throw err;
          });
          resolve(dataset);
        });
    }).on('error', (e) => {
      reject(`Got error: ${e.message}`);
    });
  })
);

const getStatistic = async ({ name, dataEncoding, structureEncoding }) => {
  console.log(name);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  const link = `${url}${name}`;
  await page.goto(link, { waitUntil: 'domcontentloaded' });


  const {
    datasetStructureHref,
    datasetHref
  } = await page.evaluate(() => {
    const datasetStructureHref = Array.prototype.slice.call(
      document.querySelectorAll('td')
    ).find(
      (el) => el.innerText === 'Описание структуры набора данных'
    ).nextElementSibling.firstElementChild.href;
    const datasetHref = Array.prototype.slice.call(
      document.querySelectorAll('td')
    ).find(
      (el) => el.innerText === 'Гиперссылка (URL) на набор'
    ).nextElementSibling.firstElementChild.href;
    return {
      datasetStructureHref, datasetHref
    };
  });

  await browser.close();
  // .replace(/[\n\r]/g, ' ')

  const structurePromise = getDatasetStructure(name, structureEncoding, datasetStructureHref);
  const datasetPromise = getDataset(name, dataEncoding, datasetHref);

  return Promise.all([
    structurePromise,
    datasetPromise,
  ]).then(resolvedValues => {
    // console.log('resolvedValues', resolvedValues);
    const datasetStructure = resolvedValues[0];
    const dataset = resolvedValues[1];
    let nameOfIdField = 'Id';
    if (!Object.prototype.hasOwnProperty.call(datasetStructure[0], nameOfIdField)) {
      nameOfIdField = Object.keys(datasetStructure[0]).find((key) => datasetStructure[0][key].match(/^G(\d*)|([A-Z])$/));
    }
    const dataFields = datasetStructure.reduce((r, field) => {
      r[field[nameOfIdField]] = field;
      return r;
    }, {});
    const datasetWithCorrectHeaders = dataset.map((row) => {
      return Object.keys(row).reduce((r, field) => {
        // для 7707329152-post
        if (field === 'GB' && !dataFields.GB) {
          return r;
        }
        if (field === 'AG') {
          r[dataFields.GA['Field name']] = row[field];
        } else {
          r[dataFields[field]['Field name']] = row[field];
        }
        return r;
      }, {});
    });
    // console.log('datasetWithCorrectHeaders', datasetWithCorrectHeaders);
    fs.writeFile(`${name}Result.txt`, JSON.stringify(datasetWithCorrectHeaders), (err) => {
      if (err) throw err;
    });
    return datasetWithCorrectHeaders;
  });
};


module.exports = {
  getStatistic,
};

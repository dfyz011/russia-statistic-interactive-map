const axios = require('axios');
const { parseIndicators } = require('./indicators');
const db = require('../../models');

const {
  Indicator, Category, Indicators_categories, Region_statistic, Region
} = db;
const { Op } = db.Sequelize;


async function getZakupkiStatistic(params) {
  try {
    const link = 'https://zakupki.gov.ru/epz/main/public/statistics/main.json';
    const response = await axios.get(link, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  const indicators = await parseIndicators();
  console.log(indicators);
  const newRegions = [];
  for (const placeOfSearch of indicators.placesOfSearch) {
    for (const tabType of indicators.tabTypes) {
      for (const mode of indicators.modes) {
        for (const year of indicators.years) {
          // const [parentCategory, parentCategoryCreated] = await Category.findOrCreate(
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
          const [category, categoryCreated] = await Category.findOrCreate(
            {
              where: {
                name: tabType.name,
                // category_id: parentCategory.id,
              },
              defaults: {
                title: `${tabType.title}`,
                name: tabType.name,
                // category_id: parentCategory.id,
                createdAt: new Date(),
                updatedAt: new Date()
              }
            }
          );
          const rawStatistic = await getZakupkiStatistic({
            placeOfSearch: placeOfSearch.name, tabType: tabType.name, mode, year
          });
          const searchResults = rawStatistic.searchResult;
          for (const regionKladrId of Object.keys(searchResults)) {
            console.log('regionKladrId', regionKladrId);
            const region = await Region.findOne({ where: { reg_kladr_id: regionKladrId } });

            if (!region) {
              // if (regionKladrId === '442014') {
              //   console.log(placeOfSearch.name, tabType.name, mode, year);
              // }
              newRegions.push(regionKladrId);
              // process.exit(0);
            } else {
              console.log('region', region.reg_ID);
              console.log('year', year);
              const { currentIndicator } = searchResults[regionKladrId];
              console.log('currentIndicator', currentIndicator);

              const [countIndicator, countIndicatorCreated] = await Indicator.findOrCreate({
                where: {
                  title: `${placeOfSearch.title} ${currentIndicator.countLabel}`,
                },
                defaults: {
                  title: `${placeOfSearch.title} ${currentIndicator.countLabel}`,
                  createdAt: new Date(),
                  updatedAt: new Date()
                }
              });
              const [newCountIndicatorCategory, newCountIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
                where: {
                  indicator_id: countIndicator.id,
                  category_id: category.id
                },
                defaults: {
                  indicator_id: countIndicator.id,
                  category_id: category.id,
                  createdAt: new Date(),
                  updatedAt: new Date()
                }
              });
              console.log('countIndicator', countIndicator.title);

              if ((currentIndicator.count !== undefined) && (currentIndicator.count !== null)) {
                const [statisticCount, statisticCountCreated] = await Region_statistic.findOrCreate({
                  where: {
                    year: `${parseInt(year)}`,
                    indicator_id: countIndicator.id,
                    region_id: region.reg_ID,
                  },
                  defaults: {
                    year: `${parseInt(year)}`,
                    indicator_id: countIndicator.id,
                    value: currentIndicator.count,
                    measurement_unit: '%',
                    region_id: region.reg_ID,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  }
                });
                if (!statisticCountCreated && (`${statisticCount.value}` !== `${currentIndicator.count}`)) {
                  console.log('dublicate-count', statisticCountCreated, statisticCount.value, currentIndicator.count);
                  const dublicateOfStatistic = await Region_statistic.create({
                    year: `${parseInt(year)}`,
                    indicator_id: countIndicator.id,
                    value: currentIndicator.count,
                    measurement_unit: '%',
                    region_id: region.reg_ID,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  });
                }
              }

              const [volumeIndicator, volumeIndicatorCreated] = await Indicator.findOrCreate(
                {
                  where: {
                    title: `${placeOfSearch.title} ${currentIndicator.volumeLabel}`,
                  },
                  defaults: {
                    title: `${placeOfSearch.title} ${currentIndicator.volumeLabel}`,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  }
                }
              );
              console.log('volumeIndicator', volumeIndicator.title);

              const [newVolumeIndicatorCategory, newVolumeIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
                where: {
                  indicator_id: volumeIndicator.id,
                  category_id: category.id
                },
                defaults: {
                  indicator_id: volumeIndicator.id,
                  category_id: category.id,
                  createdAt: new Date(),
                  updatedAt: new Date()
                }
              });
              if ((currentIndicator.volume !== undefined) && (currentIndicator.volume !== null)) {
                const [statisticVolume, statisticVolumeCreated] = await Region_statistic.findOrCreate({
                  where: {
                    year: `${parseInt(year)}`,
                    indicator_id: volumeIndicator.id,
                    region_id: region.reg_ID,
                  },
                  defaults: {
                    year: `${parseInt(year)}`,
                    indicator_id: volumeIndicator.id,
                    value: currentIndicator.volume,
                    measurement_unit: '₽',
                    region_id: region.reg_ID,
                    createdAt: new Date(),
                    updatedAt: new Date()
                  }
                });
                if (!statisticVolumeCreated && (`${statisticVolume.value}` !== `${currentIndicator.volume}`)) {
                  console.log('dublicate-value', statisticVolumeCreated, statisticVolume.value, currentIndicator.volume);
                  const dublicateOfStatistic = await Region_statistic.create({
                    year: `${parseInt(year)}`,
                    indicator_id: volumeIndicator.id,
                    value: currentIndicator.volume,
                    measurement_unit: '₽',
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
    }
  }
  const uniqueТewRegions = [...new Set(newRegions)];
  console.log('Регионы которые нужно добавить', uniqueТewRegions);
})();
// getZakupkiStatistic({});

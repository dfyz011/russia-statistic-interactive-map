const { parseBudget } = require('./indicators');
const db = require('../../models');

const {
  Indicator, Category, Indicators_categories, Region_statistic, Region
} = db;
const { Op } = db.Sequelize;


(async () => {
  const { statistic, indicators } = await parseBudget();
  console.log(statistic, indicators);

  const newRegions = [];

  const [category, categoryCreated] = await Category.findOrCreate(
    {
      where: {
        title: 'Бюджет',
      },
      defaults: {
        title: 'Бюджет',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
  );
  const indicatorsRecords = {
    Доходы: {},
    Расходы: {},
  };
  for (const indicator of indicators) {
    const [incomeIndicator] = await Indicator.findOrCreate({
      where: {
        title: `Доходы ${indicator}`,
      },
      defaults: {
        title: `Доходы ${indicator}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    indicatorsRecords['Доходы'][indicator] = incomeIndicator;

    const [newIncomeIndicatorCategory, newIncomeIndicatorCategoryCreated] = await Indicators_categories.findOrCreate({
      where: {
        indicator_id: incomeIndicator.id,
        category_id: category.id
      },
      defaults: {
        indicator_id: incomeIndicator.id,
        category_id: category.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    indicatorsRecords[indicator] = incomeIndicator;

    const [spentIndicator, spentIndicatorCreated] = await Indicator.findOrCreate({
      where: {
        title: `Расходы ${indicator}`,
      },
      defaults: {
        title: `Расходы  ${indicator}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    indicatorsRecords['Расходы'][indicator] = spentIndicator;

    const [newSpentCategory, newSpentCategoryCreated] = await Indicators_categories.findOrCreate({
      where: {
        indicator_id: spentIndicator.id,
        category_id: category.id
      },
      defaults: {
        indicator_id: spentIndicator.id,
        category_id: category.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }
  for (const region of Object.keys(statistic)) {
    const regionRecord = await Region.findOne({
      where: {
        reg_alias_the_constitutional_name: region.replace('г.', 'Город федерального значения').replace('республика', 'Республика').replace(' - ', ' — ')
      }
    });
    if (!regionRecord) {
      newRegions.push(region);
    } else {
      for (const year of Object.keys(statistic[region])) {
        for (const month of Object.keys(statistic[region][year])) {
          for (const indicator of indicators) {
            // console.log(year, month, statistic[region][year][month]);
            const incomeIndicator = indicatorsRecords['Доходы'][indicator];
            if ((statistic[region][year][month].income[indicator] !== undefined) && (statistic[region][year][month].income[indicator] !== null)) {
              const [statisticIncome, statisticIncomeCreated] = await Region_statistic.findOrCreate({
                where: {
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: incomeIndicator.id,
                  region_id: regionRecord.reg_ID,
                },
                defaults: {
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: incomeIndicator.id,
                  value: statistic[region][year][month].income[indicator],
                  measurement_unit: 'млрд. руб.',
                  region_id: regionRecord.reg_ID,
                  createdAt: new Date(),
                  updatedAt: new Date()
                }
              });
              if (!statisticIncomeCreated && (`${statisticIncome.value}` !== `${statistic[region][year][month].income[indicator]}`)) {
                const dublicateOfStatistic = await Region_statistic.create({
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: incomeIndicator.id,
                  value: statistic[region][year][month].income[indicator],
                  measurement_unit: 'млрд. руб.',
                  region_id: regionRecord.reg_ID,
                  createdAt: new Date(),
                  updatedAt: new Date()
                });
              }
            }
            const spentIndicator = indicatorsRecords['Расходы'][indicator];
            if ((statistic[region][year][month].spent[indicator] !== undefined) && (statistic[region][year][month].spent[indicator] !== null)) {
              const [statisticSpent, statisticSpentCreated] = await Region_statistic.findOrCreate({
                where: {
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: spentIndicator.id,
                  region_id: regionRecord.reg_ID,
                },
                defaults: {
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: spentIndicator.id,
                  value: statistic[region][year][month].spent[indicator],
                  measurement_unit: 'млрд. руб.',
                  region_id: regionRecord.reg_ID,
                  createdAt: new Date(),
                  updatedAt: new Date()
                }
              });
              if (!statisticSpentCreated && (`${statisticSpent.value}` !== `${statistic[region][year][month].spent[indicator]}`)) {
                const dublicateOfStatistic = await Region_statistic.create({
                  year: `${parseInt(year)}`,
                  month,
                  indicator_id: spentIndicator.id,
                  value: statistic[region][year][month].spent[indicator],
                  measurement_unit: 'млрд. руб.',
                  region_id: regionRecord.reg_ID,
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
  console.log('indicators', indicators);
  const uniqueТewRegions = [...new Set(newRegions)];
  console.log('Регионы которые нужно добавить', uniqueТewRegions);
})();

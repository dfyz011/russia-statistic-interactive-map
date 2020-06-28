const db = require('../models');

const { Op } = db.Sequelize;

const { Indicators_categories, Indicator, Region_statistic } = db;

(async () => {
  const result = await Indicator.findAll({
    where: {
      id: {
        [Op.and]: {
          [Op.lte]: 73173,
          [Op.gte]: 66387
        }
      }
    }
  });
  console.log(result);

  for (const indicator of result) {
    // console.log(indicator.indicator_id);
    console.log(await Region_statistic.destroy({
      where: {
        indicator_id: indicator.id,
      },
    }));
    console.log(await Indicators_categories.destroy({
      where: {
        indicator_id: indicator.id,
      },
    }));
    console.log(await Indicator.destroy({
      where: {
        id: indicator.id,
      },
    }));
  }
})();

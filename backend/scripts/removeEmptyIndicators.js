const db = require('../models');

const { Op } = db.Sequelize;

const { Indicators_categories, Indicator, Region_statistic } = db;

(async () => {
  const result = await Indicator.findAll();
  for (const indicator of result) {
    const { count, statistic } = await Region_statistic.findAndCountAll({
      where: {
        indicator_id: indicator.id,
      },
    });
    if (count === 0) {
      console.log('deletedCAT', await Indicators_categories.destroy({
        where: {
          indicator_id: indicator.id,
        },
      }));
      console.log('deletedIND', await Indicator.destroy({
        where: {
          id: indicator.id,
        },
      }));
    }
  }
})();

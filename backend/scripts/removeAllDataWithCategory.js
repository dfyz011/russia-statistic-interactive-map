const db = require('../models');

const { Indicators_categories, Indicator, Region_statistic } = db;

(async (category_id) => {
  const result = await Indicators_categories.findAll({
    where: {
      category_id,
    }
  });
  for (const indicator of result) {
    // console.log(indicator.indicator_id);
    console.log(await Region_statistic.destroy({
      where: {
        indicator_id: indicator.indicator_id,
      },
    }));
    console.log(await Indicators_categories.destroy({
      where: {
        indicator_id: indicator.indicator_id,
      },
    }));
    console.log(await Indicator.destroy({
      where: {
        id: indicator.indicator_id,
      },
    }));
  }
})(8);

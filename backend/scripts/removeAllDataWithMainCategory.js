const db = require('../models');

const {
  Indicators_categories, Indicator, Region_statistic, Category
} = db;

(async (mainCategory_id) => {
  const categories = await Category.findAll({
    where: {
      category_id: mainCategory_id,
    }
  });

  for (const category of categories) {
    const category_id = category.id;
    console.log(category_id);
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
    console.log(await Category.destroy({
      where: {
        id: category_id,
      },
    }));
  }
  console.log(await Category.destroy({
    where: {
      id: mainCategory_id,
    },
  }));
})(25);

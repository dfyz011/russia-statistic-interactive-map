const db = require('../models');

const { Indicator, Indicators_categories, Category } = db;
const { Op } = db.Sequelize;

exports.findAll = async (req, res) => {
  try {
    const { categories } = req.body;
    let indicators;
    if (categories && categories.length > 0) {
      let allCat = [];
      for (const cat of categories) {
        const rowCat = await Category.findOne({
          where: {
            id: Number(cat)
          },
        });
        if (!rowCat.category_id) {
          const childCats = await Category.findAll({
            where: {
              category_id: cat
            },
          });
          const childIds = childCats.map((el) => el.id);
          allCat = [...allCat, ...childIds];
        }
        allCat = [...allCat, cat];
        console.log('allCat', allCat);
      }
      const categoriesFilter = { category_id: { [Op.in]: [...allCat] } };
      const indicatorsFilter = {
        ...categoriesFilter,
      };
      const result = await Indicators_categories.findAll({
        where: indicatorsFilter,
        include: [
          {
            model: Indicator,
            as: 'Indicator',
          },
        ],
        order: [
          [Indicator, 'title', 'ASC'],
        ],
      });
      indicators = result.map((el) => el.Indicator);
    } else {
      indicators = await Indicator.findAll({
        order: [
          ['title', 'ASC'],
        ],
      });
    }
    console.log('>>>>>>>>', indicators.length);
    res.json({ items: indicators });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error retrieving indicators',
    });
  }
};

exports.findByRegion = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;
    const result = await Indicator.findOne({
      where: {
        id: parseInt(indicatorId),
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

const db = require('../models');

const { Category } = db;
const { Op } = db.Sequelize;

exports.findAll = async (req, res) => {
  try {
    const result = await Category.findAll({
      order: [
        ['title', 'ASC'],
      ],
    });
    res.json({ items: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error retrieving categories',
    });
  }
};

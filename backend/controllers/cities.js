const db = require('../models');

const { City } = db;
const { Op } = db.Sequelize;

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        message: 'Content can not be empty!',
      });
    }
    const { city } = req.body;
    const result = await City.create(city);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message || 'Some error occurred while creating the City.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await City.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error retrieving cities',
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const {
      cityId,
    } = req.params;
    const result = await City.findOne({
      where: {
        id: parseInt(cityId),
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found City with id ${req.params.cityId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving City with id ${req.params.cityId}`,
      });
    }
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        message: 'Content can not be empty!',
      });
    }
    const {
      cityId,
    } = req.params;

    const {
      city,
    } = req.body;

    const found = await City.findOne({
      where: {
        id: cityId,
      }
    });

    if (!found) {
      throw new Error('City not found');
    }

    const result = await found.update(city);
    res.json(result);
  } catch (err) {
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found City with id ${req.params.cityId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error updating City with id ${req.params.cityId}`,
      });
    }
  }
};

exports.delete = async (req, res) => {
  try {
    const {
      cityId,
    } = req.params;

    const result = await City.destroy({
      where: {
        id: cityId,
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found City with id ${req.params.cityId}.`,
      });
    } else {
      res.status(500).json({
        message: `Could not delete City with id ${req.params.cityId}`,
      });
    }
  }
};

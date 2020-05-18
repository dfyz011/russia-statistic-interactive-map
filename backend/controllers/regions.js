const db = require('../models');

const { Region } = db;
const { Op } = db.Sequelize;

exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        message: 'Content can not be empty!',
      });
    }
    const { region } = req.body;
    const result = await Region.create(region);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message || 'Some error occurred while creating the Region.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await Region.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error retrieving regions',
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;
    const result = await Region.findOne({
      where: {
        id: parseInt(regionId),
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found Region with id ${req.params.regionId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving Region with id ${req.params.regionId}`,
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
      regionId,
    } = req.params;

    const {
      region,
    } = req.body;

    const found = await Region.findOne({
      where: {
        id: regionId,
      }
    });

    if (!found) {
      throw new Error('Region not found');
    }

    const result = await found.update(region);
    res.json(result);
  } catch (err) {
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found Region with id ${req.params.regionId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error updating Region with id ${req.params.regionId}`,
      });
    }
  }
};

exports.delete = async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;

    const result = await Region.destroy({
      where: {
        id: regionId,
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found Region with id ${req.params.regionId}.`,
      });
    } else {
      res.status(500).json({
        message: `Could not delete Region with id ${req.params.regionId}`,
      });
    }
  }
};

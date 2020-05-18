const express = require('express');

const router = express.Router();

const { cities } = require('../controllers');

const { regions } = require('../controllers');

router.post('/regions', regions.create);

router.get('/regions', regions.findAll);

router.get('/regions/:regionId', regions.findOne);

router.put('/regions/:regionId', regions.update);

router.delete('/regions/:regionId', regions.delete);

router.post('/cities', cities.create);

router.get('/cities', cities.findAll);

router.get('/cities/:cityId', cities.findOne);

router.put('/cities/:cityId', cities.update);

router.delete('/cities/:cityId', cities.delete);


module.exports = router;

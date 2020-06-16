const express = require('express');

const router = express.Router();

const {
  cities, regions, statistics, indicators, categories
} = require('../controllers');

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


router.get('/statistics/region/:regionId', statistics.findByRegion);
router.post('/statistics/indicator/:indicatorId', statistics.findByIndicator);
router.post('/statistics/map/indicators', statistics.findByIndicatorsForMap);
router.get('/statistics/map/indicator/:indicatorId', statistics.findByIndicatorForMap);
router.post('/statistics/diagram/indicator/:indicatorId', statistics.findByIndicatorForDiagram);
router.post('/statistics/radar-diagram/indicator/:indicatorId', statistics.findByIndicatorForRadarDiagram);
router.post('/statistics/top/indicator/:indicatorId', statistics.findByIndicatorForTop);
router.post('/statistics/top/region/:regionId', statistics.findByRegionForTop);

router.post('/indicators', indicators.findAll);
router.get('/indicators/regionId', indicators.findByRegion);

router.get('/categories', categories.findAll);


module.exports = router;

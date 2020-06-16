const db = require('../models');

const { Region_statistic, Region, Indicator } = db;
const { Op } = db.Sequelize;

exports.findByRegion = async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;
    const result = await Region_statistic.findOne({
      where: {
        region_id: parseInt(regionId),
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for region with id ${req.params.regionId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for region  with id ${req.params.regionId}`,
      });
    }
  }
};

exports.findByIndicator = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;
    const { years: rawSelectedYears, regions: selectedRegions } = req.body;
    const selectedYears = rawSelectedYears.map((el) => `${el}`);
    const yearsFilter = selectedYears && selectedYears.length > 0
      ? { year: { [Op.in]: [...selectedYears] } }
      : {};
    const regionsFilter = selectedRegions && selectedRegions.length > 0
      ? { region_id: { [Op.in]: [...selectedRegions] } }
      : {};
    console.log(yearsFilter);
    console.log(selectedYears);

    const regionStatisticFilter = {
      indicator_id: parseInt(indicatorId),
      ...yearsFilter,
      ...regionsFilter,
    };

    const result = await Region_statistic.findAll({
      where: regionStatisticFilter,
      include: [
        {
          model: Region,
          as: 'Region',
          where: {
            reg_type: 'Регион'
          },
        },
        {
          model: Indicator,
          as: 'Indicator'
        }
      ],
      order: [
        ['year', 'ASC'],
        [Region, 'reg_alias_human_name', 'ASC'],
      ],
    });
    const years = await Region_statistic.findAll({
      attributes: ['year'],
      where: {
        indicator_id: parseInt(indicatorId),
      },
      group: ['year'],
      order: [
        ['year', 'ASC'],
      ],
    });
    const regions = await Region.findAll({
      where: {
        reg_type: 'Регион'
      },
      order: [
        ['reg_alias_human_name', 'ASC'],
      ],
    });
    res.json({ statistic: result, years, regions });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

exports.findByIndicatorForDiagram = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;
    const { years: rawSelectedYears, regions: selectedRegions } = req.body;
    const selectedYears = rawSelectedYears.map((el) => `${el}`);
    const yearsFilter = selectedYears && selectedYears.length > 0
      ? { year: { [Op.in]: [...selectedYears] } }
      : {};
    const regionsFilter = selectedRegions && selectedRegions.length > 0
      ? { region_id: { [Op.in]: [...selectedRegions] } }
      : {};

    const regionStatisticFilter = {
      indicator_id: parseInt(indicatorId),
      ...yearsFilter,
      ...regionsFilter,
    };

    let result = [];

    if ((selectedYears && selectedYears.length > 0) && (selectedRegions && selectedRegions.length > 0)) {
      result = await Region_statistic.findAll({
        where: regionStatisticFilter,
        include: [
          {
            model: Region,
            as: 'Region',
            where: {
              reg_type: 'Регион'
            },
            attributes: ['reg_alias_human_name'],
          },
        ],
        order: [
          ['year', 'ASC'],
          [Region, 'reg_alias_human_name', 'ASC'],
        ],
        attributes: ['value', 'year', 'region_id']
      });
    }

    const years = await Region_statistic.findAll({
      attributes: ['year'],
      where: {
        indicator_id: parseInt(indicatorId),
      },
      group: ['year'],
      order: [
        ['year', 'ASC'],
      ],
    });

    const regions = await Region.findAll({
      where: {
        reg_type: 'Регион'
      },
      order: [
        ['reg_alias_human_name', 'ASC'],
      ],
    });

    const groupedResultByYear = result.reduce((r, a) => {
      r[a.year] = r[a.year] || [];
      r[a.year].push(a);
      return r;
    }, {});

    const ar = [];
    for (const year in groupedResultByYear) {
      const yearFullStatistic = groupedResultByYear[year].reduce((r, a) => {
        return { ...r, [a.Region.reg_alias_human_name]: parseFloat(`${a.value}`.replace(',', '.')) };
      }, {});
      ar.push({ year, ...yearFullStatistic });
    }
    // const groupedResultByRegion = result.reduce((r, {
    //   year, value, Region, region_id
    // }) => {
    //   r.push({
    //     name: Region.reg_alias_human_name, year, value, region_id
    //   });
    //   return r;
    // }, []);
    res.json({ statistic: ar, years, regions });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

exports.findByIndicatorForRadarDiagram = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;
    const { years: rawSelectedYears, regions: selectedRegions } = req.body;
    const selectedYears = rawSelectedYears.map((el) => `${el}`);
    const yearsFilter = selectedYears && selectedYears.length > 0
      ? { year: { [Op.in]: [...selectedYears] } }
      : {};
    const regionsFilter = selectedRegions && selectedRegions.length > 0
      ? { region_id: { [Op.in]: [...selectedRegions] } }
      : {};

    const regionStatisticFilter = {
      indicator_id: parseInt(indicatorId),
      ...yearsFilter,
      ...regionsFilter,
    };

    let result = [];

    if ((selectedYears && selectedYears.length > 0) && (selectedRegions && selectedRegions.length > 0)) {
      result = await Region_statistic.findAll({
        where: regionStatisticFilter,
        include: [
          {
            model: Region,
            as: 'Region',
            where: {
              reg_type: 'Регион'
            },
            attributes: ['reg_alias_human_name'],
          },
        ],
        order: [
          ['year', 'ASC'],
          [Region, 'reg_alias_human_name', 'ASC'],
        ],
        attributes: ['value', 'year', 'region_id']
      });
    }

    const years = await Region_statistic.findAll({
      attributes: ['year'],
      where: {
        indicator_id: parseInt(indicatorId),
      },
      group: ['year'],
      order: [
        ['year', 'ASC'],
      ],
    });

    const regions = await Region.findAll({
      where: {
        reg_type: 'Регион'
      },
      order: [
        ['reg_alias_human_name', 'ASC'],
      ],
    });

    const groupedResultByRegion = result.reduce((r, a) => {
      r[a.Region.reg_alias_human_name] = r[a.Region.reg_alias_human_name] || [];
      r[a.Region.reg_alias_human_name].push({ region: a.Region.reg_alias_human_name, year: a.year, value: a.value });
      return r;
    }, {});

    const ar = [];
    for (const region in groupedResultByRegion) {
      const regionFullStatistic = groupedResultByRegion[region].reduce((r, a) => {
        return { ...r, [a.year]: parseFloat(`${a.value}`.replace(',', '.')) };
      }, {});
      ar.push({ region, ...regionFullStatistic });
    }
    res.json({ statistic: ar, years, regions });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

exports.findByIndicatorForMap = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;

    const result = await Region_statistic.findAll({
      where: {
        indicator_id: parseInt(indicatorId),
      },
      include: [
        {
          model: Region,
          as: 'Region'
        },
        {
          model: Indicator,
          as: 'Indicator'
        }
      ],
    });

    const groupedResult = result.reduce((r, a) => {
      r[a.year] = r[a.year] || { min: Infinity, max: 0, values: {} };
      r[a.year].values[a.Region.reg_ID] = a;
      const currentValue = parseFloat(a.value);
      if (currentValue > r[a.year].max) {
        r[a.year].max = currentValue;
      }
      if (currentValue < r[a.year].min) {
        r[a.year].min = currentValue;
      }
      return r;
    }, {});

    const regions = await Region.findAll({
      where: {
        reg_type: 'Регион'
      },
      order: [
        ['reg_alias_human_name', 'ASC'],
      ],
    });
    const groupedRegions = regions.reduce((r, a) => {
      r[a.reg_ID] = a;
      return r;
    }, {});
    res.json({ items: groupedResult, regions: groupedRegions });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found map statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving map statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

exports.findByRegionForTop = async (req, res) => {
  try {
    const {
      regionId,
    } = req.params;
    const { year: rawSelectedYear } = req.body;
    const selectedYear = `${rawSelectedYear}`;

    const result = await Region_statistic.findAll({
      where: {
        year: selectedYear,
        region_id: parseInt(regionId),
        // indicator_id: {
        //   [Op.gt]: 814
        // }
      },
      include: [
        {
          model: Region,
          as: 'Region',
          where: {
            reg_type: 'Регион'
          },
          attributes: ['reg_alias_human_name'],
        },
        {
          model: Indicator,
          as: 'Indicator',
        },
      ],
      order: [
        [Indicator, 'title', 'ASC'],
      ],
      limit: 20
    });
    const regionTop = [];
    for (const stat of result) {
      // console.log(stat);
      const indicatorTop = await Region_statistic.findAll({
        where: {
          year: selectedYear,
          indicator_id: stat.indicator_id
        },
        include: [
          {
            model: Region,
            as: 'Region',
            where: {
              reg_type: 'Регион'
            },
            attributes: ['reg_alias_human_name'],
          },
          {
            model: Indicator,
            as: 'Indicator',
          },
        ],
        order: [
          ['value', 'ASC'],
          [Indicator, 'title', 'ASC'],
        ],
      });
      regionTop.push({ ...stat.dataValues, place: indicatorTop.findIndex((el) => el.region_id === parseInt(regionId)) + 1 });
    }
    console.log('regionTop', regionTop);
    res.json({ statistic: regionTop });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

exports.findByIndicatorForTop = async (req, res) => {
  try {
    const {
      indicatorId,
    } = req.params;
    const { year: rawSelectedYear } = req.body;
    const selectedYear = `${rawSelectedYear}`;

    const result = await Region_statistic.findAll({
      where: {
        year: selectedYear,
        indicator_id: parseInt(indicatorId),
      },
      include: [
        {
          model: Region,
          as: 'Region',
          where: {
            reg_type: 'Регион'
          },
          attributes: ['reg_alias_human_name'],
        },
        {
          model: Indicator,
          as: 'Indicator',
        },
      ],
      order: [
        ['value', 'ASC'],
        [Region, 'reg_alias_human_name', 'ASC'],
      ],
    });

    const ar = result.map((stat, index) => {
      return { ...stat.dataValues, place: index + 1 };
    });
    res.json({ statistic: ar });
  } catch (err) {
    console.error(err);
    if (err.kind === 'not_found') {
      res.status(404).json({
        message: `Not found statistic for indicator with id ${req.params.indicatorId}.`,
      });
    } else {
      res.status(500).json({
        message: `Error retrieving statistic for indicator with id ${req.params.indicatorId}`,
      });
    }
  }
};

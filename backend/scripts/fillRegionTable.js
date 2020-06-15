const region_info = require('../files/region_info.json');
const db = require('../models');

const { Region } = db;
const { Op } = db.Sequelize;

(async () => {
  for (const region of region_info) {
    await Region.findOrCreate({
      where: {
        reg_alias_okato: region.reg_alias_okato,
      },
      defaults: {
        ...region,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }
})();

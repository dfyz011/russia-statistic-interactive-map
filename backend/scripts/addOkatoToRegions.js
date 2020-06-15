const regions_okato = require('../files/zakupki_regions_okato.json');
const db = require('../models');

const { Region } = db;
const { Op } = db.Sequelize;

(async () => {
  for (const [okato, name] of Object.entries(regions_okato)) {
    const region = await Region.findOne({
      where: {
        reg_alias_citytable: {
          [Op.like]: `%${name.slice(0, name.indexOf(' '))}%`
        }
      }
    });
    if (region === null) {
      console.log('Not found!', okato, name);
    } else {
      region.reg_kladr_id = okato;
      region.save();
    }
  }
})();

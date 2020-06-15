module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [{
      reg_ID: '0',
      reg_alias_the_constitutional_name: 'Российская Федерация',
      reg_alias_human_name: 'Российская Федерация',
      reg_alias_okato: '00000000000',
      reg_alias_iso_code: 'RU',
      reg_alias_tableau: '',
      reg_alias_datawrapper: '',
      reg_alias_datwrapper_square: '',
      reg_tile_column: '',
      reg_tile_row: '',
      reg_alias_short_2letters: 'RU',
      reg_alias_short_3letters: 'RUS',
      reg_fo: '',
      reg_mask: '',
      reg_antimask: '',
      reg_alias_rosbris_ID: '',
      reg_alias_duckconsulting: '',
      reg_alias_fedstat: '',
      reg_alias_fias_name: '',
      reg_alias_fias_id: '',
      reg_alias_rossstat_order: '',
      reg_level: '',
      reg_type: '',
      reg_status: '',
      reg_alias_citytable: '',
      reg_kladr_id: '00000000000',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};

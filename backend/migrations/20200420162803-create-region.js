
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Regions', {
      reg_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reg_alias_the_constitutional_name: {
        type: Sequelize.INTEGER
      },
      reg_alias_human_name: {
        type: Sequelize.INTEGER
      },
      reg_alias_okato: {
        type: Sequelize.INTEGER
      },
      reg_alias_iso_code: {
        type: Sequelize.INTEGER
      },
      reg_alias_tableau: {
        type: Sequelize.INTEGER
      },
      reg_alias_datawrapper: {
        type: Sequelize.INTEGER
      },
      reg_alias_datwrapper_square: {
        type: Sequelize.INTEGER
      },
      reg_tile_column: {
        type: Sequelize.INTEGER
      },
      reg_tile_row: {
        type: Sequelize.INTEGER
      },
      reg_alias_short_2letters: {
        type: Sequelize.INTEGER
      },
      reg_alias_short_3letters: {
        type: Sequelize.INTEGER
      },
      reg_fo: {
        type: Sequelize.INTEGER
      },
      reg_mask: {
        type: Sequelize.INTEGER
      },
      reg_antimask: {
        type: Sequelize.INTEGER
      },
      reg_alias_rosbris_ID: {
        type: Sequelize.INTEGER
      },
      reg_alias_duckconsulting: {
        type: Sequelize.INTEGER
      },
      reg_alias_fedstat: {
        type: Sequelize.INTEGER
      },
      reg_alias_fias_name: {
        type: Sequelize.INTEGER
      },
      reg_alias_fias_id: {
        type: Sequelize.INTEGER
      },
      reg_alias_rossstat_order: {
        type: Sequelize.INTEGER
      },
      reg_type: {
        type: Sequelize.INTEGER
      },
      reg_status: {
        type: Sequelize.INTEGER
      },
      reg_alias_citytable: {
        type: Sequelize.INTEGER
      },
      reg_level: {
        type: Sequelize.INTEGER
      },
      ifnc: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Regions');
  }
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Regions', {
      reg_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reg_alias_the_constitutional_name: {
        type: Sequelize.STRING
      },
      reg_alias_human_name: {
        type: Sequelize.STRING
      },
      reg_alias_okato: {
        type: Sequelize.STRING
      },
      reg_alias_iso_code: {
        type: Sequelize.STRING
      },
      reg_alias_tableau: {
        type: Sequelize.STRING
      },
      reg_alias_datawrapper: {
        type: Sequelize.STRING
      },
      reg_alias_datwrapper_square: {
        type: Sequelize.STRING
      },
      reg_tile_column: {
        type: Sequelize.STRING
      },
      reg_tile_row: {
        type: Sequelize.STRING
      },
      reg_alias_short_2letters: {
        type: Sequelize.STRING
      },
      reg_alias_short_3letters: {
        type: Sequelize.STRING
      },
      reg_fo: {
        type: Sequelize.STRING
      },
      reg_mask: {
        type: Sequelize.STRING
      },
      reg_antimask: {
        type: Sequelize.STRING
      },
      reg_alias_rosbris_ID: {
        type: Sequelize.STRING
      },
      reg_alias_duckconsulting: {
        type: Sequelize.STRING
      },
      reg_alias_fedstat: {
        type: Sequelize.STRING
      },
      reg_alias_fias_name: {
        type: Sequelize.STRING
      },
      reg_alias_fias_id: {
        type: Sequelize.STRING
      },
      reg_alias_rossstat_order: {
        type: Sequelize.STRING
      },
      reg_level: {
        type: Sequelize.STRING
      },
      reg_type: {
        type: Sequelize.STRING
      },
      reg_status: {
        type: Sequelize.STRING
      },
      reg_alias_citytable: {
        type: Sequelize.STRING
      },
      reg_kladr_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Regions');
  }
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cities', {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reg_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Regions',
          key: 'reg_ID'
        }
      },
      city_name: {
        type: Sequelize.INTEGER
      },
      if_double: {
        type: Sequelize.INTEGER
      },
      agglomeration: {
        type: Sequelize.INTEGER
      },
      found_century: {
        type: Sequelize.INTEGER
      },
      found_year: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.INTEGER
      },
      post_index: {
        type: Sequelize.INTEGER
      },
      district_type: {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.INTEGER
      },
      fias_id: {
        type: Sequelize.INTEGER
      },
      kladr_id: {
        type: Sequelize.INTEGER
      },
      iso_code: {
        type: Sequelize.INTEGER
      },
      fias_level: {
        type: Sequelize.INTEGER
      },
      history_values: {
        type: Sequelize.INTEGER
      },
      capital_marker: {
        type: Sequelize.INTEGER
      },
      okato: {
        type: Sequelize.INTEGER
      },
      oktmo: {
        type: Sequelize.INTEGER
      },
      timezone: {
        type: Sequelize.INTEGER
      },
      ifnc: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Cities');
  }
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Region_statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      indicator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Indicators',
          key: 'id'
        }
      },
      region_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Regions',
          key: 'reg_ID'
        }
      },
      year: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      measurement_unit: {
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
    return queryInterface.dropTable('Region_statistics');
  }
};

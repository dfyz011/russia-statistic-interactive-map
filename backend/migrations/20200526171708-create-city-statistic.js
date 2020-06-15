
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('City_statistics', {
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
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cities',
          key: 'city_id'
        }
      },
      year: {
        type: Sequelize.STRING
      },
      month: {
        type: Sequelize.STRING
      },

      value: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('City_statistics');
  }
};

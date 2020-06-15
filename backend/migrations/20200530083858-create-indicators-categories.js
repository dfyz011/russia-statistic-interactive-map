
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Indicators_categories', {
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
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
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
    return queryInterface.dropTable('Indicators_categories');
  }
};

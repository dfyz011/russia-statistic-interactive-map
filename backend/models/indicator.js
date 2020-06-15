module.exports = (sequelize, DataTypes) => {
  const Indicator = sequelize.define('Indicator', {
    title: DataTypes.STRING(1000),
  }, {});
  Indicator.associate = function (models) {
    this.belongsToMany(models.Region, {
      through: 'Region_statistic',
      foreignKey: {
        name: 'id'
      }
    });
    this.belongsToMany(models.City, {
      through: 'City_statistic',
      foreignKey: {
        name: 'id'
      }
    });
    this.belongsToMany(models.Category, {
      through: 'Indicators_categories',
      foreignKey: {
        name: 'id'
      }
    });
  };
  return Indicator;
};

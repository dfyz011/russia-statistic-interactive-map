
module.exports = (sequelize, DataTypes) => {
  const City_statistic = sequelize.define('City_statistic', {
    year: DataTypes.STRING,
    month: DataTypes.STRING,
    indicator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: DataTypes.STRING,
    measurement_unit: DataTypes.STRING,
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  City_statistic.associate = function (models) {
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'City' });
    this.belongsTo(models.Indicator, { foreignKey: 'indicator_id', as: 'Indicator' });
  };
  return City_statistic;
};

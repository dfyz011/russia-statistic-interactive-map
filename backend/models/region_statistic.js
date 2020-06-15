
module.exports = (sequelize, DataTypes) => {
  const Region_statistic = sequelize.define('Region_statistic', {
    year: DataTypes.STRING,
    month: DataTypes.STRING,
    indicator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: DataTypes.STRING,
    measurement_unit: DataTypes.STRING,
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Region_statistic.associate = function (models) {
    this.belongsTo(models.Region, { foreignKey: 'region_id', as: 'Region' });
    this.belongsTo(models.Indicator, { foreignKey: 'indicator_id', as: 'Indicator' });
  };
  return Region_statistic;
};


module.exports = (sequelize, DataTypes) => {
  const Indicators_categories = sequelize.define('Indicators_categories', {
    indicator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Indicators_categories.associate = function (models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'Category' });
    this.belongsTo(models.Indicator, { foreignKey: 'indicator_id', as: 'Indicator' });
  };
  return Indicators_categories;
};

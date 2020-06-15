
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING(1000),
    category_id: {
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {});
  Category.associate = function (models) {
    this.belongsToMany(models.Indicator, {
      through: 'Indicators_categories',
      foreignKey: {
        name: 'id'
      }
    });
    this.belongsTo(models.Category, {
      foreignKey: {
        name: 'id'
      }
    });
    this.hasOne(models.Category, {
      foreignKey: {
        name: 'category_id'
      }
    });
  };
  return Category;
};

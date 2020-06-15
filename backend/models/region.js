
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    reg_ID: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    reg_alias_the_constitutional_name: {
      type: DataTypes.STRING
    },
    reg_alias_human_name: {
      type: DataTypes.STRING
    },
    reg_alias_okato: {
      type: DataTypes.STRING
    },
    reg_alias_iso_code: {
      type: DataTypes.STRING
    },
    reg_alias_tableau: {
      type: DataTypes.STRING
    },
    reg_alias_datawrapper: {
      type: DataTypes.STRING
    },
    reg_alias_datwrapper_square: {
      type: DataTypes.STRING
    },
    reg_tile_column: {
      type: DataTypes.STRING
    },
    reg_tile_row: {
      type: DataTypes.STRING
    },
    reg_alias_short_2letters: {
      type: DataTypes.STRING
    },
    reg_alias_short_3letters: {
      type: DataTypes.STRING
    },
    reg_fo: {
      type: DataTypes.STRING
    },
    reg_mask: {
      type: DataTypes.STRING
    },
    reg_antimask: {
      type: DataTypes.STRING
    },
    reg_alias_rosbris_ID: {
      type: DataTypes.STRING
    },
    reg_alias_duckconsulting: {
      type: DataTypes.STRING
    },
    reg_alias_fedstat: {
      type: DataTypes.STRING
    },
    reg_alias_fias_name: {
      type: DataTypes.STRING
    },
    reg_alias_fias_id: {
      type: DataTypes.STRING
    },
    reg_alias_rossstat_order: {
      type: DataTypes.STRING
    },
    reg_level: {
      type: DataTypes.STRING
    },
    reg_type: {
      type: DataTypes.STRING
    },
    reg_status: {
      type: DataTypes.STRING
    },
    reg_alias_citytable: {
      type: DataTypes.STRING
    },
    reg_kladr_id: {
      type: DataTypes.STRING
    },
  }, {});
  Region.associate = function (models) {
    this.belongsToMany(models.Indicator, { through: 'Region_statistic', foreignKey: 'region_id', });
  };
  return Region;
};

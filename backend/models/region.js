
module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('Region', {
    reg_id: DataTypes.INTEGER,
    reg_alias_the_constitutional_name: DataTypes.STRING,
    reg_alias_human_name: DataTypes.STRING,
    reg_alias_okato: DataTypes.INTEGER,
    reg_alias_iso_code: DataTypes.INTEGER,
    reg_alias_tableau: DataTypes.INTEGER,
    reg_alias_datawrapper: DataTypes.INTEGER,
    reg_alias_datwrapper_square: DataTypes.INTEGER,
    reg_tile_column: DataTypes.INTEGER,
    reg_tile_row: DataTypes.INTEGER,
    reg_alias_short_2letters: DataTypes.INTEGER,
    reg_alias_short_3letters: DataTypes.INTEGER,
    reg_fo: DataTypes.STRING,
    reg_mask: DataTypes.INTEGER,
    reg_antimask: DataTypes.INTEGER,
    reg_alias_rosbris_ID: DataTypes.INTEGER,
    reg_alias_duckconsulting: DataTypes.INTEGER,
    reg_alias_fedstat: DataTypes.INTEGER,
    reg_alias_fias_name: DataTypes.INTEGER,
    reg_alias_fias_id: DataTypes.INTEGER,
    reg_alias_rossstat_order: DataTypes.INTEGER,
    reg_type: DataTypes.INTEGER,
    reg_status: DataTypes.INTEGER,
    reg_alias_citytable: DataTypes.INTEGER,
    reg_level: DataTypes.INTEGER,
    ifnc: DataTypes.INTEGER,
  }, {});
  Region.associate = function (models) {
    // associations can be defined here
  };
  return Region;
};


module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city_id: DataTypes.INTEGER,
    reg_id: DataTypes.INTEGER,
    city_name: DataTypes.STRING,
    if_double: DataTypes.INTEGER,
    agglomeration: DataTypes.INTEGER,
    found_century: DataTypes.INTEGER,
    found_year: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    post_index: DataTypes.INTEGER,
    district_type: DataTypes.INTEGER,
    district: DataTypes.INTEGER,
    city: DataTypes.STRING,
    fias_id: DataTypes.INTEGER,
    kladr_id: DataTypes.INTEGER,
    iso_code: DataTypes.INTEGER,
    fias_level: DataTypes.INTEGER,
    history_values: DataTypes.INTEGER,
    capital_marker: DataTypes.INTEGER,
    okato: DataTypes.INTEGER,
    oktmo: DataTypes.INTEGER,
    timezone: DataTypes.INTEGER,
    ifnc: DataTypes.INTEGER,
  }, {});
  City.associate = function (models) {
    // associations can be defined here
  };
  return City;
};

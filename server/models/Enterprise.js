export default (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    contact_info: DataTypes.STRING,
  });
  return Enterprise;
};
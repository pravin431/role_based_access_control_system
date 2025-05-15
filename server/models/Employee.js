export default (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    role: DataTypes.STRING,
    salary: DataTypes.DECIMAL(10,2),
    status: {
      type: DataTypes.ENUM('active','inactive'),
      defaultValue: 'active',
    },
  });
  return Employee;
};
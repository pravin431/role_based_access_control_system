import { Sequelize, DataTypes } from 'sequelize';
import RoleModel from './Role.js';
import PermissionModel from './Permission.js';
import RolePermissionModel from './role_permissions.js';
import EnterpriseModel from './Enterprise.js';
import UserModel from './User.js';
import EmployeeModel from './Employee.js';
import ProductModel from './Product.js';
import { DB_URL } from '../dbConfig.js';

const sequelize = new Sequelize(DB_URL, {
  dialect: 'mysql',
});

// Initialize models
const Role = RoleModel(sequelize, DataTypes);
const Permission = PermissionModel(sequelize, DataTypes);
const RolePermission = RolePermissionModel(sequelize, DataTypes);
const Enterprise = EnterpriseModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Employee = EmployeeModel(sequelize, DataTypes);
const Product = ProductModel(sequelize, DataTypes);

// Associations
Role.belongsToMany(Permission, { through: RolePermission }); // Many-to-many relationship
Permission.belongsToMany(Role, { through: RolePermission });// Many-to-many relationship
// Role and User association
Role.hasMany(User);// One-to-many relationship->one Role can be associated with multiple User records
User.belongsTo(Role);//One-to-one relationship ->one User can be associated with one Role

Enterprise.hasMany(User);
User.belongsTo(Enterprise);  
Enterprise.hasMany(Employee);
Employee.belongsTo(Enterprise);
Enterprise.hasMany(Product);
Product.belongsTo(Enterprise);

// Optional: Link User and Employee one-to-one
// User.hasOne(Employee);
// Employee.belongsTo(User);

// Export all
export {
  sequelize,
  Role,
  Permission,
  RolePermission,
  Enterprise,
  User,
  Employee,
  Product,
};
export default (sequelize) => {
  const RolePermission = sequelize.define('role_permissions', {}, {
    timestamps: false,
  });
  return RolePermission;
};
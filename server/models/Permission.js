export default (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    module:    { type: DataTypes.STRING, allowNull: false },
    can_create: DataTypes.BOOLEAN,
    can_read:   DataTypes.BOOLEAN,
    can_update: DataTypes.BOOLEAN,
    can_delete: DataTypes.BOOLEAN,
  }, {
    timestamps: true,              // this is actually the default
    createdAt: 'createdAt',        // column name in DB
    updatedAt: 'updatedAt',        // column name in DB
  });
  return Permission;
};
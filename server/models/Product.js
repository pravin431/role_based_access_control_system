export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    sku: {
      type: DataTypes.STRING,
      unique: true,
    },
    price: DataTypes.DECIMAL(10,2),
    category: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('available','discontinued'),
      defaultValue: 'available',
    },
  });
  return Product;
};
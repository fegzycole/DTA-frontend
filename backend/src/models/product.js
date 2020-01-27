module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Product.prototype.getId = function getId() {
    const { id } = this.dataValues;
    return id;
  };

  Product.prototype.getRequiredDataValues = function getRequiredDataValues() {
    const { name, id, price } = this.dataValues;
    const data = { name, id, price };
    return data;
  };

  return Product;
};

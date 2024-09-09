'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category', 
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Product',
});

Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
);

module.exports = Product;


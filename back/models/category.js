const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');


class Category extends Model { }


Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Category'
});


module.exports = Category;

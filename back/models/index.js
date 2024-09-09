'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const basename = path.basename(__filename);
const fs = require('fs');


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('./category');
db.Product = require('./product');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });
 
// Ejecutar la función associate si está definida
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const db = {};
require("dotenv").config()


const databases = [];

for (let i = 0; i < 2; i++) {
  let dbName = process.env.MAIN_DB_NAME;
  if (i == 1) {
    dbName = process.env.SHADOW_DB_NAME;
  }
  let obj = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": dbName,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "ssl": true,
    "dialectOptions": {
       "ssl": {
          "require": true
       }
     }
  };
  databases.push(obj);
}

for (let i = 0; i < 2; ++i) {
  let database = databases[i];
  db[database.database] = new Sequelize(database.database, database.username, database.password, database);
}

fs
  .readdirSync(__dirname + '/product')
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname + '/product', file))(db.Product, Sequelize);
    db[model.name] = model;
  });

fs
  .readdirSync(__dirname + '/shadow')
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname + '/shadow', file))(db.Shadow, Sequelize);
    db[model.name] = model;
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = Sequelize;

module.exports = db;



var express = require('express');
const mysql = require('mysql');
const Sequelize = require('sequelize');
var db = require("../models");
require("dotenv").config()

const sequelize = new Sequelize(process.env.MAIN_DB_NAME, process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    ssl: true,
    dialectOptions: {
       ssl: {
          require: true
       }
     }
});

initializeDbConnection = function () {
    sequelize
        .authenticate()
        .then(() => {
            db.Product.sync()
            db.Shadow.sync()
        })
        .then(() => {
            console.log("DB is initialize")
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}



exports.InitializeDbConnection = initializeDbConnection;
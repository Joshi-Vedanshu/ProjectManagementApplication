var express = require('express');
const mysql = require('mysql');
const Sequelize = require('sequelize');
var db = require("../models");


const sequelize = new Sequelize('Product', 'root',
    'password', {
    host: 'localhost',
    dialect: 'mysql'
});

initializeDbConnection = function () {
    sequelize
        .authenticate()
        .then(() => {
            db.Product.sync()
            db.Shadow.sync()
        })
        .then(()=>{
            console.log("DB is initialize")
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}



exports.InitializeDbConnection = initializeDbConnection;
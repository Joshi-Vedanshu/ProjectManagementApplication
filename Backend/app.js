var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const Sequelize = require('sequelize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var db =  require("./models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// db configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
});

const sequelize = new Sequelize('Product', 'root',
  'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3005, function () {
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

  sequelize
    .authenticate()
    .then(() => {
      db.sequelize.sync()
      .then(() => {
        console.log("Synced db.");
      })
      console.log('Connection has been established successfully.');
      console.log("The table for the organization model was just created!");
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
});



module.exports = app;

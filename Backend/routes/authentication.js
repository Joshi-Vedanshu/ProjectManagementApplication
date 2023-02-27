var express = require('express');
var router = express.Router();
const sessions = require('express-session');
const userController = require('../controllers/userController');

router.post('/login', function (req, res, next) {


});

router.post('/register', async function (req, res, next) {
   await userController.AddUser(req,res);
});

module.exports = router;
var express = require('express');
var router = express.Router();
const sessions = require('express-session');


/* GET home page. */
router.get('/', function (req, res, next) {

  if (!(sessions.token == undefined || req.headers.authorization == undefined)) {
    if (sessions.token == req.headers.authorization.split(' ')[1]) {
      // do appropriate action
      res.status(200).send();
    }
    else {
      res.status(404).send();
    }
  }
  else {
    res.status(404).send();
  }
});

module.exports = router;

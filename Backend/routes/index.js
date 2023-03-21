var express = require('express');
var router = express.Router();
const sessions = require('express-session');
const token = require('../middleware_functions/token');
const { validateSessionAndHeader } = require('../middleware_functions/manageSessionAndHeader');
var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/',async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.GetDashboardData(token.getUserFromTheToken(sessions.token), req);
    res.status(200).send(data);
  }
  else {
    res.status(auth.code).send();
  }
});

module.exports = router;

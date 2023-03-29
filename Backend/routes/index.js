var express = require('express');
var router = express.Router();
const sessions = require('express-session');
const token = require('../middleware_functions/token');
const { validateSessionAndHeader } = require('../middleware_functions/manageSessionAndHeader');
var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.GetDashboardData(token.getUserFromTheToken(sessions.token).id, req);
    res.status(200).send(data);
  }
  else {
    res.status(auth.code).send();
  }
});

router.post('/join', async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    if (await dashboardController.JoinOrganization(token.getUserFromTheToken(sessions.token).id, req.body.orgId)) {
      res.status(200).send();
    }
    else {
      res.status(502).send();
    }
  }
  else {
    res.status(auth.code).send();
  }
});

router.post('/add', async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.AddOrganization(token.getUserFromTheToken(sessions.token).id, req);
    if (data) {
      res.status(200).send(data);
    }
    else {
      res.status(502).send(data);
    }

  }
  else {
    res.status(auth.code).send();
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
const sessions = require('express-session');
const authenticationController = require('../controllers/authenticationController');
const token = require('../middleware_functions/token');
const { validateSessionAndHeader } = require('../middleware_functions/manageSessionAndHeader');

router.post('/login', async function (req, res, next) {
   let auth = validateSessionAndHeader(sessions, req);
   if (auth.validation && auth.code !== 401) {
      res.status(auth.code).send();
   }
   else if (!(req.body.email == undefined || req.body.password == undefined)) {
      let status = await authenticationController.CheckIfUserExist(req);
      if (status) {
         let responseBody = {
            "accessToken": token.generateAccessToken(req.body.email),
            "refreshToken": token.generateRefreshToken(req.body.email)
         }
         sessions.token = responseBody.accessToken;
         let refreshTokens;
         if (sessions.refreshTokens == undefined) {
            refreshTokens = [];
         }
         else {
            refreshTokens = sessions.refreshTokens;
         }
         refreshTokens.push(responseBody.refreshToken);
         sessions.refreshTokens = refreshTokens;
         res.status(201).send(responseBody);
      }
      else {
         res.status(404).send();
      }
   }
   else {
      res.status(404).send();
   }
});

router.post('/register', async function (req, res, next) {
   let status = await authenticationController.AddUser(req, res);
   if (status) {
      res.status(201).send();
   }
   else {
      res.status(500).send();
   }
});


router.post("/refreshToken", (req, res) => {
   if (!(req.body.token == undefined || req.body.email == undefined)) {
      if (!sessions.refreshTokens.includes(req.body.token)) res.status(400).send();
      if (!token.validateRefreshToken(req.body.token)) res.status(403).send();
      sessions.refreshTokens = sessions.refreshTokens.filter((c) => c != req.body.token)
      let responseBody = {
         "accessToken": token.generateAccessToken(req.body.email),
         "refreshToken": token.generateRefreshToken(req.body.email)
      }
      sessions.token = responseBody.accessToken;
      sessions.refreshTokens.push(responseBody.refreshToken);
      res.status(201).send(responseBody);
   }
   else {
      res.status(403).send();
   }
});

router.delete("/logout", (req, res) => {
   if (req.body.token != undefined) {
      sessions.refreshTokens = sessions.refreshTokens.filter((c) => c != req.body.token);
      sessions.token = null;
      res.status(204).send();
   }
   else {
      res.status(403).send();
   }
});

module.exports = router;
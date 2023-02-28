var express = require('express');
var router = express.Router();
const sessions = require('express-session');
const userController = require('../controllers/userController');
const token = require('../middleware_functions/token');

router.post('/login', async function (req, res, next) {
   if (!(sessions.token == undefined || req.headers.authorization == undefined)) {
      if (sessions.token == req.headers.authorization.split(' ')[1]) {
         // do appropriate action
         res.status(200).send();
      }
      else {
         sessions.token = null;
         res.status(404).send();
      }
   }
   else {
      let status = await userController.CheckIfUserExist(req);
      if (status) {
         let responseBody = { "accessToken": token.generateAccessToken(req.body.email), 
         "refreshToken": token.generateRefreshToken }
         sessions.token = responseBody.accessToken;
         let refreshTokens;
         if(sessions.refreshTokens == undefined){
            refreshTokens = [];
         }
         else{
            refreshTokens = sessions.refreshTokens;
         }
         refreshTokens.push(responseBody.refreshToken);
         sessions.refreshTokens = refreshTokens;
         res.status(201).send(responseBody.json());
      }
      else {
         res.status(404).send();
      }
   }

});

router.post('/register', async function (req, res, next) {
   let status = await userController.AddUser(req, res);
   if (status) {
      res.status(201).send();
   }
   else {
      res.status(500).send();
   }
});

module.exports = router;
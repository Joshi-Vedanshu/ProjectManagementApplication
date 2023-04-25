var express = require("express");
var router = express.Router();
const sessions = require('express-session');
const token = require('../middleware_functions/token');
const { validateSessionAndHeader } = require('../middleware_functions/manageSessionAndHeader');
var userController = require('../controllers/userController');

router.post('/skills', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.AddUserSkill(req);
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

router.put('/skills', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.UpdateUserSkill(req);
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

router.put('/userprofile', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.ChangeUserProfileInformation(req, token.getUserFromTheToken(sessions.token).id);
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

router.get('/userprofile', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.GetUserInformation(token.getUserFromTheToken(sessions.token).id);
        res.status(200).send(data);
    }
    else {
        res.status(auth.code).send();
    }
});

router.get('/permissions', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.GetPermissionsOfUser(token.getUserFromTheToken(sessions.token).id);
        res.status(200).send(data);
    }
    else {
        res.status(auth.code).send();
    }
});

router.get('/role', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.GetRoleOfUser(token.getUserFromTheToken(sessions.token).id);
        res.status(200).send(data);
    }
    else {
        res.status(auth.code).send();
    }
});

router.get('/user', async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.GetUserInformationByUserId(req);
        res.status(200).send(data);
    }
    else {
        res.status(auth.code).send();
    }
});

router.get("/", async function (req, res, next) {
    let auth = validateSessionAndHeader(sessions, req);
    if (auth.validation && auth.code === 202) {
        let data = await userController.GetUsersOfOrganization(token.getUserFromTheToken(sessions.token).id);
        res.status(200).send(data);
    }
    else {
        res.status(auth.code).send();
    }
});

module.exports = router;

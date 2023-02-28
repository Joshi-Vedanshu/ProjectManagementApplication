var UserService = require('../services/userService').UserService;
var userService = new UserService();

const AddUser = async function (req, res) {
    return await userService.AddUser(req);
}

const CheckIfUserExist = async function (req, res) {
    return await userService.CheckIfUserExist(req);
}

module.exports = { AddUser, CheckIfUserExist }
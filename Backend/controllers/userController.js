var UserService = require('../services/userService').UserService;
var userService = new UserService();

const AddUser = async function (req, res) {
    return await userService.AddUser(req);
}

const CheckIfUserExist = async function (req, res) {
    return await userService.CheckIfUserExist(req);
}

const GetUserInfo = async function (req, res) {
    return await userService.GetUserInfo(req);
}

const UpdateUser = async function (req, res) {
    return await userService.GetUserInfo(req);
}

module.exports = { AddUser, CheckIfUserExist, GetUserInfo, UpdateUser}
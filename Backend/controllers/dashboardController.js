var roles = require("../enums/roles");
var RoleService = require('../services/roleServices').RoleService;
var roleService = new RoleService();
var UserService = require('../services/userService').UserService;
var userService = new UserService();

const GetDashboardData = async function (email, req) {
    let userId = await userService.GetUserIdByEmail(email);
    console.log(userId);
    let role = await roleService.getRolesByUser(userId);
    return role;
    //check the role
    //according to the role send the data
}

module.exports = { GetDashboardData }
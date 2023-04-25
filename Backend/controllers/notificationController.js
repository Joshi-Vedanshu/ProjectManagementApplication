var NotificationService =
    require("../services/notificationServices").NotificationService;
var notificationService = new NotificationService();
var RoleService = require("../services/roleServices").RoleService;
var roleService = new RoleService();
var RolePermissionMappingService =
    require("../services/rolePermissionMappingServices").RolePermissionMappingService;
var rolePermissionMappingService = new RolePermissionMappingService();
var UserService = require("../services/userService").UserService;
var userService = new UserService();
var roles = require("../enums/roles");
var OrganizationService =
    require("../services/organizationServices").OrganizationService;
var objMethods = require("../methods/objectMethods");
var organizationService = new OrganizationService();

const GetNotifications = async function (email) {
    let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
    let role = await roleService.GetRolesByUser(userId);
    switch (roles.roles[role[0].name]) {
        case 2:
            return await notificationService.GetNotificationsOfOrganization(userId);
        default:
            return []
    }
};

const SetRolePermissionOfUser = async function (email, req) {
    let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
    let role = await roleService.GetRolesByUser(userId);
    // add entry in user organization mapping table
    console.log(req.body);
    switch (roles.roles[role[0].name]) {
        case 2:
            let user_role = await roleService.GetRolesByUser(req.body.requesterId);
            console.log(req.body.requesterId);
            console.log(user_role[0].dataValues.id);
            let orgId = objMethods.GetFirstOrDefault(
                await organizationService.GetOrganizationByUserId(userId)
            ).dataValues.id;
            //let user = await userService.UpdateUser(req, req.body.requesterId);
            await userService.UpdateNotificationsAndAddUserId(req.body.requesterId, orgId)
            await roleService.UpdateRole(req, user_role[0].dataValues.id);
            return await rolePermissionMappingService.UpdatePermissionByRoleId(req, user_role[0].dataValues.id);
        default:
            return []
    }
};


module.exports = {
    GetNotifications,
    SetRolePermissionOfUser
};
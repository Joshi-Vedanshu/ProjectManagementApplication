var UserService = require("../services/userService").UserService;
var SkillService = require("../services/skillServices").SkillService;
var RolePermissionMappingService =
  require("../services/rolePermissionMappingServices").RolePermissionMappingService;
var RoleService = require("../services/roleServices").RoleService;
var roleService = new RoleService();
var userService = new UserService();
var skillService = new SkillService();
var rolePermissionMappingService = new RolePermissionMappingService();

const ChangeUserProfileInformation = async function (req, email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  return await userService.UpdateUser(req, userId);
};

const AddUserSkill = async function (req) {
  return await skillService.AddSkill(req);
};

const UpdateUserSkill = async function (req) {
  return await skillService.UpdateSkills(req);
};

const GetUserSkill = async function (req) {
  return await skillService.GetSkills(req);
};

const DeleteUserSkill = async function (req) {
  return await skillService.DeleteSkill(req);
}

const GetPermissionsOfUser = async function (email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  return await rolePermissionMappingService.getRolePermissionMappingByRoleId(
    role[0].dataValues.id
  );
};

const GetRoleOfUser = async function (email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  return await roleService.GetRolesByUser(userId);
};

const GetUserInformation = async function (email) {
  return await userService.GetUserIdByEmail(email);
};

const GetUserInformationByUserId = async function (req) {
  let role = await roleService.GetRolesByUser(req.query.id);
  let permissions = await rolePermissionMappingService.getRolePermissionMappingByRoleId(role[0].dataValues.id);
  return [await userService.GetUserInformationByUserId(req), role, permissions];
};

const GetUsersOfOrganization = async function(email){
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let orgId = await userService.GetOrgIdByUserId(userId);
  return await userService.GetUsersOfOrganizationByOrgId(orgId);
};


module.exports = {
  ChangeUserProfileInformation,
  AddUserSkill,
  UpdateUserSkill,
  GetPermissionsOfUser,
  GetRoleOfUser,
  GetUserSkill,
  DeleteUserSkill,
  GetUserInformation,
  GetUserInformationByUserId,
  GetUsersOfOrganization
};

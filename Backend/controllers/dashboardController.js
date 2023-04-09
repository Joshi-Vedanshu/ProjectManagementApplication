var roles = require("../enums/roles");
var RoleService = require("../services/roleServices").RoleService;
var roleService = new RoleService();
var UserService = require("../services/userService").UserService;
var userService = new UserService();
var OrganizationService =
  require("../services/organizationServices").OrganizationService;
var organizationService = new OrganizationService();
var ProjectService = require("../services/projectServices").ProjectService;
var projectService = new ProjectService();
var NotificationService =
  require("../services/notificationServices").NotificationService;
var notificationService = new NotificationService();
var SprintService = require("../services/sprintServices").SprintService;
var sprintService = new SprintService();
var RolePermissionMappingService =
  require("../services/rolePermissionMappingServices").RolePermissionMappingService;
var rolePermissionMappingService = new RolePermissionMappingService();
var objMethods = require("../methods/objectMethods");

const GetDashboardData = async function (email, req) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  switch (roles.roles[role[0].name]) {
    case 0:
      return await organizationService.GetAllOrganizations();
      break;
    case 2:
      let orgId = objMethods.GetFirstOrDefault(
        await organizationService.GetOrganizationByUserId(userId)
      ).dataValues.id;
      let Orgprojects = await projectService.GetAllProjectOfOrganization(orgId);
      return Orgprojects;
      break;
    default:
      let projects = await projectService.GetAllProjectsOfUser(userId);
      let sprints = await sprintService.GetSprintsByProjectId(
        projects.map((x) => x.id)
      );
      return [projects, sprints];
      break;
  }
};

const JoinOrganization = async function (email, orgId) {
  let userId = objMethods.GetFirstOrDefault(
    objMethods.GetFirstOrDefault(await userService.GetUserIdByEmail(email))
  ).dataValues.id;
  console.log(await organizationService.GetAdminId(orgId));
  let adminId = objMethods.GetFirstOrDefault(
    await organizationService.GetAdminId(orgId)
  ).dataValues.adminId;
  return await notificationService.AddNotification({
    adminId: adminId,
    userId: userId,
  });
};

const AddOrganization = async function (email, req) {
  let userId = objMethods.GetFirstOrDefault(
    objMethods.GetFirstOrDefault(await userService.GetUserIdByEmail(email))
  ).dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  if (role[0].dataValues.type !== roles.roles["admin"]) {
    if (await organizationService.AddOrganization(req, userId)) {
      let status = await roleService.UpdateRole({
        id: role[0].dataValues.id,
        type: roles.roles["admin"],
        name: "admin",
      });

      return status
        ? await rolePermissionMappingService.UpdateRolePermissionMapping({
            roleId: role[0].dataValues.id,
            projectAccess: "1111",
            teamAccess: "1111",
            organizationAccess: "1111",
            sprintAccess: "1111",
          })
        : false;
    }
  }
  return false;
};

const ManageProject = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.projectAccess[type] == "1") {
    switch (type) {
      case "0":
        return await projectService.AddProject(req);
      case "1":
        return await projectService.GetAllProjectsOfUser(userId);
      case "2":
        return await projectService.UpdateProject(req);
      case "3":
        return await projectService.DeleteProject(req);
    }
  } else {
    return false;
  }
};

const ManageSprint = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.sprintAccess[type] == "1") {
    switch (type) {
      case "0":
        return await sprintService.AddSprint(req);
      case "1":
        let projects = await projectService.GetAllProjectsOfUser(userId);
        return await sprintService.GetSprintsByProjectId(
          projects.map((x) => x.id)
        );
      case "2":
        return await sprintService.UpdateSprint(req);
      case "3":
        return await sprintService.DeleteSprint(req);
    }
  } else {
    return false;
  }
};

const ManageTeam = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.teamAccess[type] == "1") {
    // switch (type) {
    //   case "0":
    //     return await teamService.AddTeam(req);
    //   case "1":
    //     let projects = await teamService.GetAllProjectsOfUser(userId);
    //     return await teamService.GetSprintsByProjectId(
    //       projects.map((x) => x.id)
    //     );
    //   case "2":
    //     return await sprintService.UpdateSprint(req);
    //   case "3":
    //     return await sprintService.DeleteSprint(req);
    // }
  } else {
    return false;
  }
};

const GetPermissionsOfUser = async function (email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.getRolesByUser(userId);
  return await rolePermissionMappingService.getRolePermissionMappingByRoleId(
    role[0].dataValues.id
  );
};

module.exports = {
  GetDashboardData,
  JoinOrganization,
  AddOrganization,
  ManageProject,
  ManageSprint,
  GetPermissionsOfUser,
  ManageTeam,
};

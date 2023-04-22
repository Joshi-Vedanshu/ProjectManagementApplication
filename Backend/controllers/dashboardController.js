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
var TeamService = require("../services/teamServices").TeamService;
var teamService = new TeamService();
var CardService = require("../services/cardServices").CardService;
var cardService = new CardService();
var RolePermissionMappingService =
  require("../services/rolePermissionMappingServices").RolePermissionMappingService;
var rolePermissionMappingService = new RolePermissionMappingService();
var objMethods = require("../methods/objectMethods");
var UserTeamMappingService =
  require("../services/userteammappingServices").UserTeamMappingService;
var userteammappingService = new UserTeamMappingService();
var TeamProjectMappingService =
  require("../services/projectTeamMappingServices").ProjectTeamMappingService;
var teamProjectMappingService = TeamProjectMappingService();

const GetDashboardData = async function (email, req) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
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
  let role = await roleService.GetRolesByUser(userId);
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
            teamUserMappingAccess: "1111",
            projectTeamMappingAccess: "1111",
          })
        : false;
    }
  }
  return false;
};

const ManageProject = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  console.log(permissions);
  console.log(type);
  console.log(permissions[0].dataValues.projectAccess[type]);
  if (permissions[0].dataValues.projectAccess[type] == "1") {
    switch (type) {
      case 0:
        let orgId = objMethods.GetFirstOrDefault(
          await organizationService.GetOrganizationByUserId(userId)
        ).dataValues.id;
        return await projectService.AddProject(req, orgId);
      case 1:
        switch (roles.roles[role[0].name]) {
          case 2:
            let orgId = objMethods.GetFirstOrDefault(
              await organizationService.GetOrganizationByUserId(userId)
            ).dataValues.id;
            let Orgprojects = await projectService.GetAllProjectOfOrganization(
              orgId
            );
            return Orgprojects;
          default:
            return await projectService.GetAllProjectsOfUser(userId);
        }
      case 2:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await projectService.UpdateProject(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            if (
              projects.map((x) => x.id == req.body.id).lenght != 0 ||
              projects.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await projectService.UpdateProject(req);
            }
            return false;
        }
      case 3:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await projectService.DeleteProject(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            if (
              projects.map((x) => x.id == req.body.id).lenght != 0 ||
              projects.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await projectService.DeleteProject(req);
            }
            return false;
        }
    }
  } else {
    return false;
  }
};

const ManageSprint = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.sprintAccess[type] == "1") {
    switch (type) {
      case 0:
        return await sprintService.AddSprint(req);
      case 1:
        switch (roles.roles[role[0].name]) {
          case 2:
            let orgId = objMethods.GetFirstOrDefault(
              await organizationService.GetOrganizationByUserId(userId)
            ).dataValues.id;
            let Orgprojects = await projectService.GetAllProjectOfOrganization(
              orgId
            );
            return await sprintService.GetSprintsByProjectId(
              Orgprojects.map((x) => x.id)
            );
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            return await sprintService.GetSprintsByProjectId(
              projects.map((x) => x.id)
            );
        }
      case 2:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await sprintService.UpdateSprint(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            let sprints = await sprintService.GetSprintsByProjectId(
              projects.map((x) => x.id)
            );
            if (
              sprints.map((x) => x.id == req.body.id).lenght != 0 ||
              sprints.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await sprintService.UpdateSprint(req);
            }
            return false;
        }
      case 3:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await sprintService.DeleteSprint(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            let sprints = await sprintService.GetSprintsByProjectId(
              projects.map((x) => x.id)
            );
            if (
              sprints.map((x) => x.id == req.body.id).lenght != 0 ||
              sprints.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await sprintService.DeleteSprint(req);
            }
            return false;
        }
    }
  } else {
    return false;
  }
};

const ManageCard = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.teamAccess[type] == "1") {
    switch (type) {
      case 0:
        return await cardService.AddCard(req);
      case 1:
        switch (roles.roles[role[0].name]) {
          case 2:
            let orgId = objMethods.GetFirstOrDefault(
              await organizationService.GetOrganizationByUserId(userId)
            ).dataValues.id;
            let Orgprojects = await projectService.GetAllProjectOfOrganization(
              orgId
            );
            let sprintsForOrg = await sprintService.GetSprintsByProjectId(
              Orgprojects.map((x) => x.id)
            );
            return await cardService.GetAllCardBasedOnSprints(
              sprintsForOrg.map((x) => x.id)
            );
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            let sprintsForUser = await sprintService.GetSprintsByProjectId(
              projects.map((x) => x.id)
            );
            return await cardService.GetAllCardBasedOnSprints(
              sprintsForUser.map((x) => x.id)
            );
        }
      case 2:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await cardService.UpdateCard(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            if (
              projects.map((x) => x.id == req.body.id).lenght != 0 ||
              projects.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await cardService.UpdateCard(req);
            }
            return false;
        }
      case 3:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await cardService.DeleteCard(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            if (
              projects.map((x) => x.id == req.body.id).lenght != 0 ||
              projects.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await cardService.DeleteCard(req);
            }
            return false;
        }
    }
  } else {
    return false;
  }
};

const ManageTeam = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.teamAccess[type] == "1") {
    switch (type) {
      case 0:
        let orgId = objMethods.GetFirstOrDefault(
          await organizationService.GetOrganizationByUserId(userId)
        ).dataValues.id;
        return await teamService.AddTeam(req, orgId);
      case 1:
        switch (roles.roles[role[0].name]) {
          case 2:
            let orgId = objMethods.GetFirstOrDefault(
              await organizationService.GetOrganizationByUserId(userId)
            ).dataValues.id;
            return await teamService.GetTeamsByOrgId(orgId);
          default:
            let teams =
              await userteammappingService.GetUserTeamMappingsByUserId(userId);
            return await teamService.GetTeamsById(teams.map((x) => x.teamId));
        }
      case 2:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await teamService.UpdateTeam(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            let teams = await teamService.GetAllTeamBasedOnProjects(
              projects.map((x) => x.id)
            );
            if (
              teams.map((x) => x.id == req.body.id).lenght != 0 ||
              teams.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await teamService.UpdateTeam(req);
            }
            return false;
        }
      case 3:
        switch (roles.roles[role[0].name]) {
          case 2:
            return await teamService.DeleteTeam(req);
          default:
            let projects = await projectService.GetAllProjectsOfUser(userId);
            let teams = await teamService.GetAllTeamBasedOnProjects(
              projects.map((x) => x.id)
            );
            if (
              teams.map((x) => x.id == req.body.id).lenght != 0 ||
              teams.map((x) => x.id == req.body.id).lenght != undefined
            ) {
              return await teamService.DeleteTeam(req);
            }
            return false;
        }
    }
  } else {
    return false;
  }
};

const ManageUserTeamMapping = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.teamUserMappingAccess[type] == "1") {
    switch (type) {
      case 0:
        return await userteammappingService.AddUserTeamMappings(req);
      case 1:
        let orgId = objMethods.GetFirstOrDefault(
          await organizationService.GetOrganizationByUserId(userId)
        ).dataValues.id;
        return await userteammappingService.GetUserTeamMappingByOrgId(orgId);
      case 2:
        return await userteammappingService.UpdateUserTeamMappings(req);
      case 3:
        return await userteammappingService.DeleteUserTeamMappings(req);
    }
  } else {
    return false;
  }
};

const ManageProjectTeamMapping = async function (email, req, type) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let role = await roleService.GetRolesByUser(userId);
  let permissions =
    await rolePermissionMappingService.getRolePermissionMappingByRoleId(
      role[0].dataValues.id
    );
  if (permissions[0].dataValues.projectTeamMappingAccess[type] == "1") {
    switch (type) {
      case 0:
        return await teamProjectMappingService.AddProjectTeamMappings(req);
      case 1:
        let orgId = objMethods.GetFirstOrDefault(
          await organizationService.GetOrganizationByUserId(userId)
        ).dataValues.id;
        return await teamProjectMappingService.GetProjectTeamMappingsByOrgId(
          orgId
        );
      case 2:
        return await teamProjectMappingService.UpdateProjectTeamMappings(req);
      case 3:
        return await teamProjectMappingService.DeleteProjectTeamMappings(req);
    }
  } else {
    return false;
  }
};

const Search = async function (req, type) {
  switch (type) {
    case "user":
      return await userService.Search(req);
    case "project":
      return await projectService.Search(req);
    case "sprint":
      return await sprintService.Search(req);
    case "card":
      return await cardService.Search(req);
    case "team":
      return await teamService.Search(req);
  }
};

module.exports = {
  GetDashboardData,
  JoinOrganization,
  AddOrganization,
  ManageProject,
  ManageSprint,
  ManageTeam,
  ManageCard,
  ManageUserTeamMapping,
  ManageProjectTeamMapping,
  Search,
};

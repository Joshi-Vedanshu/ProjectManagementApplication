var ProdctDb = require("../models").Product.models;

this.ProjectTeamMappingService = function () {
  // CREATE
  this.AddProjectTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.ProjectTeamMapping.create({
      teamId: request.body.teamId,
      projectId: request.body.projectId,
    }).then(async function (projectteammapping) {
      console.log("ProjectTeamMapping is created");

      if (projectteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getProjectTeamMappings = async function (request) {
    let projectteammapping = await ProdctDb.ProjectTeamMapping.findAll();
    if (projectteammapping != undefined) {
      return projectteammapping;
    }
    return null;
  };

  // READ (BY ID)
  this.getProjectTeamMappingsById = async function (request) {
    let projectteammapping = await ProdctDb.ProjectTeamMapping.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (projectteammapping != undefined) {
      return projectteammapping;
    }
    return null;
  };

  // READ (BY TEAM ID)
  this.getProjectTeamMappingsByTeamId = async function (request) {
    let projectteammapping = await ProdctDb.ProjectTeamMapping.findAll({
      where: {
        teamId: request.body.teamId,
      },
    });
    if (projectteammapping != undefined) {
      return projectteammapping;
    }
    return null;
  };

  // READ (BY PROJECT ID)
  this.getProjectTeamMappingsByProjectId = async function (request) {
    let projectteammapping = await ProdctDb.ProjectTeamMapping.findAll({
      where: {
        projectId: request.body.projectId,
      },
    });
    if (projectteammapping != undefined) {
      return projectteammapping;
    }
    return null;
  };

  this.GetProjectTeamMappingsByOrgId = async function (orgId) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        orgId: orgId,
      },
    });
    let projectteammapping = await ProdctDb.ProjectTeamMapping.findAll({
      group: ['projectId'],
      where: {
        teamId: teams.map(x => x.id),
      },
    });
    if (projectteammapping != undefined) {
      return projectteammapping;
    }
    return null;
  };

  // UPDATE
  this.UpdateProjectTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.ProjectTeamMapping.update(
      {
        teamId: request.body.teamId,
        projectId: request.body.projectId,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (projectteammapping) {
      console.log("ProjectTeamMapping is created");

      if (projectteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteProjectTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.ProjectTeamMapping.destroy({
      where: { id: request.body.id },
    }).then(async function (projectteammapping) {
      console.log("ProjectTeamMapping is created");

      if (projectteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };
};

exports.ProjectTeamMappingService = this.ProjectTeamMappingService;

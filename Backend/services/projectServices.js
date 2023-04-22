var Op = require("sequelize");

var ProdctDb = require("../models").Product.models;

this.ProjectService = function () {
  // SEARCH
  this.Search = async function (request) {
    let data = await ProdctDb.Project.findAll({
      where: {
        name: {
          [Op.like]: request.query + "%",
        },
      },
    });
    return data;
  };

  // CREATE
  this.AddProject = async function (request, orgId) {
    let status = true;
    await ProdctDb.Project.create({
      name: request.body.name,
      description: request.body.description,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      userId: request.body.userId,
      orgId: orgId,
    }).then(async function (project) {
      console.log("Project is created");

      if (project == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ ALL
  this.getProjects = async function (request) {
    let projects = await ProdctDb.Project.findAll();
    if (projects != undefined) {
      return projects;
    }
    return null;
  };

  // READ BY USER
  this.GetProjectsByUser = async function (userId) {
    let projects = await ProdctDb.Project.findAll({
      where: {
        userId: userId,
      },
    });
    if (projects != undefined) {
      return projects;
    }
    return null;
  };

  this.GetAllProjectsOfUser = async function (userId) {
    ProdctDb.UserTeamMapping.hasMany(ProdctDb.ProjectTeamMapping, {
      foreignKey: "teamId",
    });
    ProdctDb.ProjectTeamMapping.belongsTo(ProdctDb.UserTeamMapping, {
      foreignKey: "teamId",
    });
    let teams = await ProdctDb.UserTeamMapping.findAll({
      where: { userId: userId },
      include: [ProdctDb.ProjectTeamMapping],
    });
    let projectIds = [].concat(
      ...Object.values(
        teams
          .map((x) => x.ProjectTeamMappings)
          .map((y) => y.map((c) => c.projectId))
      )
    );
    let projects = await ProdctDb.Project.findAll({
      where: {
        id: projectIds,
      },
    });
    return projects;
  };

  this.GetAllProjectOfOrganization = async function (orgId) {
    ProdctDb.Team.hasMany(ProdctDb.ProjectTeamMapping, {
      foreignKey: "teamId",
    });
    ProdctDb.ProjectTeamMapping.belongsTo(ProdctDb.Team, {
      foreignKey: "teamId",
    });
    let teams = await ProdctDb.Team.findAll({
      where: { orgId: orgId },
      include: [ProdctDb.ProjectTeamMapping],
    });
    let projectIds = [].concat(
      ...Object.values(
        teams
          .map((x) => x.ProjectTeamMappings)
          .map((y) => y.map((c) => c.projectId))
      )
    );
    let projects = await ProdctDb.Project.findAll({
      where: {
        id: projectIds,
      },
    });
    let orgProjects = await ProdctDb.Project.findAll({
      where: {
        orgId: orgId,
      },
    });
    return [...projects, ...orgProjects];
  };

  // UPDATE
  this.UpdateProject = async function (request) {
    let status = false;
    await ProdctDb.Project.update(
      {
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        userId: request.body.userId,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (project) {
      if (project != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteProject = async function (request) {
    let status = false;
    await ProdctDb.Project.destroy({
      where: { id: request.body.id },
    }).then(async function (project) {
      if (project != undefined) {
        status = true;
      }
    });
    return status;
  };
};

exports.ProjectService = this.ProjectService;

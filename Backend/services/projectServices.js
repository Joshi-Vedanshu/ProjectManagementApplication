const { or } = require("sequelize");

var ProdctDb = require("../models").Product.models;

this.ProjectService = function () {
  // CREATE
  this.AddProject = async function (request) {
    let status = true;
    await ProdctDb.Project.create({
      name: request.body.name,
      description: request.body.description,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      userId: request.body.userId,
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
    ProdctDb.UserTeamMapping.hasMany(ProdctDb.ProjectTeamMapping, { foreignKey: 'teamId' });
    ProdctDb.ProjectTeamMapping.belongsTo(ProdctDb.UserTeamMapping, { foreignKey: 'teamId' });
    let teams = await ProdctDb.UserTeamMapping.findAll({ where: { userId: userId }, include: [ProdctDb.ProjectTeamMapping] });
    let projectIds = [].concat(...Object.values(teams.map(x => x.ProjectTeamMappings).map(y => y.map(c => c.projectId))));
    let projects = await ProdctDb.Project.findAll({
      where: {
        id: projectIds
      }
    });
    return projects;
  }

  this.GetAllProjectOfOrganization = async function (orgId) {
    ProdctDb.Team.hasMany(ProdctDb.ProjectTeamMapping, { foreignKey: 'teamId' });
    ProdctDb.ProjectTeamMapping.belongsTo(ProdctDb.Team, { foreignKey: 'teamId' });
    let teams = await ProdctDb.Team.findAll({ where: { orgId: orgId }, include: [ProdctDb.ProjectTeamMapping] });
    let projectIds = [].concat(...Object.values(teams.map(x => x.ProjectTeamMappings).map(y => y.map(c => c.projectId))));
    let projects = await ProdctDb.Project.findAll({
      where: {
        id: projectIds
      }
    });
    return projects;
  }

  // UPDATE
  this.updateProject = async function (request) {
    let status = true;
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
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // DELETE
  this.deleteProject = async function (request) {
    let status = true;
    await ProdctDb.Project.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.ProjectService = this.ProjectService;

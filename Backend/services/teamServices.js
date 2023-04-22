var ProdctDb = require("../models").Product.models;

this.TeamService = function () {
  // SEARCH
  this.Search = async function (request) {
    let data = await ProdctDb.Team.findAll({
      where: {
        name: {
          [Op.like]: request.query + "%",
        },
      },
    });
    return data;
  };

  // CREATE
  this.AddTeam = async function (request, orgId) {
    let status = true;
    await ProdctDb.Team.create({
      name: request.body.name,
      description: request.body.description,
      orgId: orgId,
    }).then(async function (team) {
      console.log("Team is created");

      if (team == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.GetTeamsById = async function (teamIds) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        id: teamIds,
      },
    });
    if (teams != undefined) {
      return teams;
    }
    return null;
  };

  // READ (BY ID)
  this.GetAllTeamBasedOnProjects = async function (Orgprojects) {
    ProdctDb.Team.hasMany(ProdctDb.ProjectTeamMapping, {
      foreignKey: "teamId",
    });
    ProdctDb.ProjectTeamMapping.belongsTo(ProdctDb.Team, {
      foreignKey: "teamId",
    });
    return await ProdctDb.ProjectTeamMapping.findAll({
      where: { projectId: Orgprojects },
      include: [ProdctDb.Team],
    });
  };

  // READ (BY ORG-ID)
  this.GetTeamsByOrgId = async function (orgId) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        orgId: orgId,
      },
    });
    if (teams != undefined) {
      return teams;
    }
    return null;
  };

  // UPDATE
  this.UpdateTeam = async function (request) {
    let status = false;
    await ProdctDb.Team.update(
      {
        name: request.body.name,
        description: request.body.description,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (team) {
      if (team != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteTeam = async function (request) {
    let status = false;
    await ProdctDb.Team.destroy({
      where: { id: request.body.id },
    }).then(async function (team) {
      if (team != undefined) {
        status = true;
      }
    });
    return status;
  };
};

exports.TeamService = this.TeamService;

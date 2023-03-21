var ProdctDb = require("../models").Product.models;

this.TeamService = function () {
  // CREATE
  this.AddTeam = async function (request) {
    let status = true;
    await ProdctDb.Team.create({
      name: request.body.name,
      description: request.body.description,
      orgId: request.body.orgId,
    }).then(async function (team) {
      console.log("Team is created");

      if (team == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getTeams = async function (request) {
    let teams = await ProdctDb.Team.findAll();
    if (teams != undefined) {
      return teams;
    }
    return null;
  };

  // READ (BY ID)
  this.getTeamsById = async function (request) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (teams != undefined) {
      return teams;
    }
    return null;
  };

  // READ (BY ORG-ID)
  this.getTeamsByOrgId = async function (request) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        orgId: request.body.OrgId,
      },
    });
    if (teams != undefined) {
      return teams;
    }
    return null;
  };

  // UPDATE
  this.updateTeam = async function (request) {
    let status = true;
    await ProdctDb.Team.update(
      {
        name: request.body.name,
        description: request.body.description,
        orgId: request.body.orgId,
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
  this.deleteTeam = async function (request) {
    let status = true;
    await ProdctDb.Team.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.TeamService = this.TeamService;

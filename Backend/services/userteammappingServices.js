var ProdctDb = require("../models").Product.models;

this.UserTeamMappingService = function () {
  // CREATE
  this.AddUserTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.UserTeamMapping.create({
      teamId: request.body.teamId,
      userId: request.body.userId,
    }).then(async function (userteammapping) {
      console.log("UserTeamMapping is created");

      if (userteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getUserTeamMappings = async function (request) {
    let userteammapping = await ProdctDb.UserTeamMapping.findAll();
    if (userteammapping != undefined) {
      return userteammapping;
    }
    return null;
  };

  // READ (BY ID)
  this.getUserTeamMappingsById = async function (request) {
    let userteammapping = await ProdctDb.UserTeamMapping.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (userteammapping != undefined) {
      return userteammapping;
    }
    return null;
  };

  this.GetUserTeamMappingByOrgId = async function (orgId) {
    let teams = await ProdctDb.Team.findAll({
      where: {
        orgId: orgId,
      },
    });
    let userteammapping = await ProdctDb.UserTeamMapping.findAll({
      group: ['teamId'],
      where: {
        teamId: teams.map(x => x.id),
      },
    });
    if (userteammapping != undefined) {
      return userteammapping;
    }
    return null;
  };

  // READ (BY USER ID)
  this.GetUserTeamMappingsByUserId = async function (userId) {
    let userteammapping = await ProdctDb.UserTeamMapping.findAll({
      where: {
        userId: userId,
      },
    });
    if (userteammapping != undefined) {
      return userteammapping;
    }
    return null;
  };

  // READ (BY TEAM ID)
  this.getUserTeamMappingsByTeamId = async function (request) {
    let userteammapping = await ProdctDb.UserTeamMapping.findAll({
      where: {
        teamId: request.body.teamId,
      },
    });
    if (userteammapping != undefined) {
      return userteammapping;
    }
    return null;
  };

  // UPDATE
  this.UpdateUserTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.UserTeamMapping.update(
      {
        teamId: request.body.teamId,
        userId: request.body.userId,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (userteammapping) {
      if (userteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteUserTeamMappings = async function (request) {
    let status = true;
    await ProdctDb.UserTeamMapping.destroy({
      where: { id: request.body.id },
    }).then(async function (userteammapping) {
      console.log("UserTeamMapping is created");

      if (userteammapping == undefined) {
        status = false;
      }
    });
    return status;
  };
};

exports.UserTeamMappingService = this.UserTeamMappingService;

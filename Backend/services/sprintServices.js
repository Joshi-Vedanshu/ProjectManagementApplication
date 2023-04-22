var ProdctDb = require("../models").Product.models;

this.SprintService = function () {
  // SEARCH
  this.Search = async function (request) {
    let data = await ProdctDb.Sprint.findAll({
      where: {
        name: {
          [Op.like]: request.query + "%",
        },
      },
    });
    return data;
  };

  // CREATE
  this.AddSprint = async function (request) {
    let status = true;
    await ProdctDb.Sprint.create({
      name: request.body.name,
      description: request.body.description,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      projectId: request.body.projectId,
    }).then(async function (sprint) {
      console.log("Sprint is created");

      if (sprint == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getSprints = async function (request) {
    let sprints = await ProdctDb.Sprint.findAll();
    if (sprints != undefined) {
      return sprints;
    }
    return null;
  };

  // READ (BY ID)
  this.getSprintsById = async function (request) {
    let sprints = await ProdctDb.Sprint.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (sprints != undefined) {
      return sprints;
    }
    return null;
  };

  // READ (BY PROJECT ID)
  this.GetSprintsByProjectId = async function (projectId) {
    let sprints = await ProdctDb.Sprint.findAll({
      where: {
        projectId: projectId,
      },
    });
    if (sprints != undefined) {
      return sprints;
    }
    return null;
  };

  // UPDATE
  this.UpdateSprint = async function (request) {
    let status = false;
    await ProdctDb.Sprint.update(
      {
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        projectId: request.body.projectId,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (sprint) {
      if (sprint != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteSprint = async function (request) {
    let status = true;
    await ProdctDb.Sprint.destroy({
      where: { id: request.body.id },
    }).then(async function (sprint) {
      if (sprint != undefined) {
        status = true;
      }
    });
    return status;
  };
};

exports.SprintService = this.SprintService;

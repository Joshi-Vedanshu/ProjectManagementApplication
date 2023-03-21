var ProdctDb = require("../models").Product.models;

this.SprintService = function () {
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
  this.getSprintsByProjectId = async function (request) {
    let sprints = await ProdctDb.Sprint.findAll({
      where: {
        projectId: request.body.projectId,
      },
    });
    if (sprints != undefined) {
      return sprints;
    }
    return null;
  };

  // UPDATE
  this.updateSprint = async function (request) {
    let status = true;
    await ProdctDb.Assignment.update(
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
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // DELETE
  this.deleteSprint = async function (request) {
    let status = true;
    await ProdctDb.Sprint.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.SprintService = this.SprintService;

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
  this.getProjectsByUser = async function (request) {
    let projects = await ProdctDb.Project.findAll({
      where: {
        userId: request.body.userId,
      },
    });
    if (projects != undefined) {
      return projects;
    }
    return null;
  };

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

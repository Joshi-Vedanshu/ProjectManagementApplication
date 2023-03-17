var ProdctDb = require("../models").Product.models;

this.AssignmentService = function () {
  // CREATE
  this.AddAssignment = async function (request) {
    let status = true;
    await ProdctDb.Assignment.create({
      userId: request.body.userId,
      cardId: request.body.cardId,
    }).then(async function (assignment) {
      console.log("Assignment is created");

      if (assignment == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getAssignmentsByUser = async function (request) {
    let assignments = await ProdctDb.Assignment.findAll({
      where: {
        userId: request.body.userId,
      },
    });
    if (assignments != undefined) {
      return assignments;
    }
    return null;
  };

  // UPDATE
  this.updateAssignmentByUser = async function (request) {
    let status = true;
    await ProdctDb.Assignment.update(
      {
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
  this.deleteAssignment = async function (request) {
    let status = true;
    await ProdctDb.Assignment.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.AssignmentService = this.AssignmentService;

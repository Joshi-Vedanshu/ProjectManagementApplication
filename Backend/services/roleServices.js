var ProdctDb = require("../models").Product.models;

this.RoleService = function () {
  // CREATE
  this.AddRole = async function (request) {
    let status = true;
    await ProdctDb.Role.create({
      userId: request.body.userId,
      code: request.body.code,
    }).then(async function (role) {
      console.log("Role is created");

      if (role == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getRoles = async function (request) {
    let roles = await ProdctDb.Role.findAll();
    if (roles != undefined) {
      return roles;
    }
    return null;
  };

  // READ (BY USER)
  this.GetRolesByUser = async function (userId) {
    let roles = await ProdctDb.Role.findAll({
      where: {
        userId: userId,
      },
    });
    if (roles != undefined) {
      return roles;
    }
    return null;
  };

  // UPDATE
  this.UpdateRole = async function (request, id) {
    let status = false;
    await ProdctDb.Role.update(
      {
        type: request.body.type,
        name: request.body.name,
      },
      {
        where: { id: id },
      }
    ).then(function (role) {
      if (role != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.deleteRole = async function (request) {
    let status = true;
    await ProdctDb.Role.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.RoleService = this.RoleService;

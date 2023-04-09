var ProdctDb = require("../models").Product.models;

this.RolePermissionMappingService = function () {
  // CREATE
  this.AddRolePermissionMapping = async function (request) {
    let status = true;
    await ProdctDb.RolePermissionMapping.create({
      roleId: request.body.roleId,
      projectAccess: request.body.projectAccess,
      teamAccess: request.body.teamAccess,
      organizationAccess: request.body.organizationAccess,
      sprintAccess: request.body.sprintAccess,
    }).then(async function (rolepermissionmapping) {
      console.log("RolePermissionMapping is created");

      if (rolepermissionmapping == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getRolePermissionMapping = async function (request) {
    let rolepermissionmapping = await ProdctDb.RolePermissionMapping.findAll();
    if (rolepermissionmapping != undefined) {
      return rolepermissionmapping;
    }
    return null;
  };

  // READ (BY ID)
  this.getRolePermissionMappingById = async function (request) {
    let rolepermissionmapping = await ProdctDb.RolePermissionMapping.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (rolepermissionmapping != undefined) {
      return rolepermissionmapping;
    }
    return null;
  };

  // READ (BY ROLE ID)
  this.getRolePermissionMappingByRoleId = async function (roleId) {
    let rolepermissionmapping = await ProdctDb.RolePermissionMapping.findAll({
      where: {
        roleId: roleId,
      },
    });
    if (rolepermissionmapping != undefined) {
      return rolepermissionmapping;
    }
    return null;
  };

  // UPDATE
  this.UpdateRolePermissionMapping = async function (request) {
    let status = false;
    await ProdctDb.RolePermissionMapping.update(
      {
        projectAccess: request.projectAccess,
        teamAccess: request.teamAccess,
        organizationAccess: request.organizationAccess,
        sprintAccess: request.sprintAccess,
      },
      {
        where: { roleId: request.roleId },
      }
    ).then(function (rolePermission) {
      if (rolePermission != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.deleteRolePermissionMapping = async function (request) {
    let status = true;
    await ProdctDb.RolePermissionMapping.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.RolePermissionMappingService = this.RolePermissionMappingService;

var ProdctDb = require("../models").Product.models;

this.OrganizationService = function () {
  // CREATE
  this.AddOrganization = async function (request) {
    let status = true;
    await ProdctDb.Organization.create({
      name: request.body.name,
      code: request.body.code,
      contact: request.body.contact,
    }).then(async function (organization) {
      console.log("Organization is created");

      if (organization == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getOrganizations = async function (request) {
    let organizations = await ProdctDb.Organization.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (organizations != undefined) {
      return organizations;
    }
    return null;
  };

  // UPDATE
  this.updateOrganization = async function (request) {
    let status = true;
    await ProdctDb.Organization.update(
      {
        name: request.body.name,
        code: request.body.code,
        contact: request.body.contact,
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
  this.deleteOrganization = async function (request) {
    let status = true;
    await ProdctDb.Organization.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.OrganizationService = this.OrganizationService;

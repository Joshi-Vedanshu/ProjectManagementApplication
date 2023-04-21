var ProdctDb = require("../models").Product.models;

this.UserProfileService = function () {
  // CREATE
  this.AddUserProfile = async function (request) {
    let status = true;
    await ProdctDb.UserProfile.create({
      email: request.body.email,
      contactNumber: request.body.contactNumber,
      password: request.body.password,
      dateOfHire: request.body.dateOfHire,
    }).then(async function (userprofile) {
      console.log("UserProfile is created");

      if (userprofile == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getUserProfiles = async function (request) {
    let userProfile = await ProdctDb.UserProfile.findAll({
      where: {
        userId: request.body.userId,
      },
    });
    if (userProfile != undefined) {
      return userProfile;
    }
    return null;
  };

  // UPDATE
  this.updateUserProfile = async function (request) {
    let status = true;
    await ProdctDb.UserProfile.update(
      {
        email: request.body.email,
        contactNumber: request.body.contactNumber,
        password: request.body.password,
        dateOfHire: request.body.dateOfHire,
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
  this.deleteUserProfile = async function (request) {
    let status = true;
    await ProdctDb.UserProfile.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.UserProfileService = this.UserProfileService;

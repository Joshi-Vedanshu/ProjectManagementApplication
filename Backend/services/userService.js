var ProdctDb = require("../models").Product.models;

this.UserService = function () {
  // SEARCH
  this.Search = async function (request) {
    let data = await ProdctDb.UserProfile.findAll({
      where: {
        name: {
          [Op.like]: request.query + "%",
        },
      },
    });
    return data;
  };

  this.AddUser = async function (request) {
    let status = true;
    let userPresent = await ProdctDb.UserProfile.findAll({
      where: {
        email: request.body.email,
      },
    });
    if (userPresent === undefined || userPresent.length == 0) {
      await ProdctDb.UserProfile.create({
        contactNumber: request.body.contactNumber,
        email: request.body.email,
        password: request.body.password,
        dateOfHire: request.body.dateOfHire,
      }).then(async function (userProfile) {
        console.log("UserProfile is created");
        if (userProfile != undefined) {
          await ProdctDb.User.create({
            firstName: request.body.firstName,
            dateOfBirth: request.body.dateOfBirth,
            lastName: request.body.lastName,
            userProfileId: userProfile.dataValues.id,
          }).then(async function (user) {
            if (user != undefined) {
              let role = await ProdctDb.Role.create({
                type: 0,
                name: "default",
                userId: user.id,
              });
              await ProdctDb.RolePermissionMapping.create({
                roleId: role.dataValues.id,
              });
              console.log("User is created");
            } else {
              await ProdctDb.UserProfile.destroy({
                where: {
                  id: userProfile.dataValues.id,
                },
              });
              status = false;
            }
          });
        } else {
          status = false;
        }
      });
    } else {
      status = false;
    }
    return status;
  };

  this.CheckIfUserExist = async function (request) {
    let user = await ProdctDb.UserProfile.findAll({
      where: {
        email: request.body.email,
        password: request.body.password,
      },
    });
    if (user != undefined && user.length > 0) {
      return true;
    }
    return false;
  };

  this.GetUserInfo = async function (request) {
    let user = null;
    let userProfile = await ProdctDb.UserProfile.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (userProfile != undefined) {
      user = await ProdctDb.User.findAll({
        where: {
          userProfileId: userProfile[0].dataValues.id,
        },
      });
      return [user, userProfile];
    }
    return null;
  };

  this.GetUserIdByEmail = async function (email) {
    let user = null;
    let userProfile = await ProdctDb.UserProfile.findAll({
      where: {
        email: email,
      },
    });
    if (userProfile != undefined) {
      user = await ProdctDb.User.findAll({
        where: {
          userProfileId: userProfile[0].dataValues.id,
        },
      });
      return [user, userProfile];
    }
    return null;
  };

  this.UpdateUser = async function (request, userId) {
    let user = await ProdctDb.User.update(
      {
        firstName: request.body.firstName,
        middleName: request.body.middleName,
        lastName: request.body.lastName,
        location: request.body.location,
        dateOfBirth: request.body.dateOfBirth,
        yearsOfExperience: request.body.yearsOfExperience,
      },
      {
        where: {
          id: userId,
        },
      }
    ).then(async function (user) {
      await ProdctDb.UserProfile.update(
        {
          contactNumber: request.body.contactNumber,
          password: request.body.password,
          dateOfHire: request.body.dateOfHire,
        },
        {
          where: {
            id: user.userProfileId,
          },
        }
      );
    });

    if (user != undefined) {
      return true;
    }
    return false;
  };
};

exports.UserService = this.UserService;

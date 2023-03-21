var ProdctDb = require('../models').Product.models;

this.UserService = function () {
    this.AddUser = async function (request) {
        let status = true;
        let userPresent = await ProdctDb.UserProfile.findAll({
            where: {
                email: request.body.email
            }
        });
        if (userPresent === undefined || userPresent.length == 0) {
            await ProdctDb.UserProfile.create({
                contactNumber: request.body.contactNumber,
                email: request.body.email,
                password: request.body.password,
                dateOfHire: request.body.dateOfHire
            }).then(async function (userProfile) {
                console.log("UserProfile is created");
                if (userProfile != undefined) {
                    await ProdctDb.User.create({
                        firstName: request.body.firstName,
                        dateOfBirth: request.body.dateOfBirth,
                        lastName: request.body.lastName,
                        userProfileId: userProfile.dataValues.id
                    }).then(async function (user) {
                        if (user != undefined) {
                            await ProdctDb.Role.create({
                                type: 0,
                                name: "default",
                                userId: user.id
                            });
                            console.log("User is created");
                        } else {
                            await ProdctDb.UserProfile.destroy({
                                where: {
                                    id: userProfile.dataValues.id
                                }
                            });
                            status = false;
                        }
                    });
                }
                else {
                    status = false;
                }
            });
        }
        else{
            status = false;
        }
        return status;
    }

    this.CheckIfUserExist = async function (request) {
        let user = await ProdctDb.UserProfile.findAll({
            where: {
                email: request.body.email,
                password: request.body.password
            }
        });
        if (user != undefined) {
            return true;
        }
        return false;
    }

    this.GetUserInfo = async function (request) {
        let user = await ProdctDb.UserProfile.findAll({
            where: {
                id: request.body.id
            }
        });
        if (user != undefined) {
            return user;
        }
        return null;
    }

    this.GetUserIdByEmail = async function (email) {
        let user = await ProdctDb.UserProfile.findAll({
            where: {
                email: email
            }
        });
        if (user != undefined) {
            return user;
        }
        return null;
    }

    this.UpdateUser = async function (request) {

        // let user = await ProdctDb.User.update(
        //     {
        //         firstName:request.body.firstName,
        //         middleName:request.body.middleName,
        //         lastName:request.body.lastName,
        //         location:request.body.location,
        //         dateOfBirth:request.body.dateOfBirth,
        //         yearsOfExperience:request.body.yearsOfExperience
        //     },
        //     {
        //     where:{
        //         id : request.body.id
        //     }});
        // userprof = request.body.userProfile
        // let userProfile = await ProdctDb.UserProfile.update(
        //         {
        //             contactNumber:userprof.contactNumber,
        //             password:userprof.password,
        //             dateOfHire:userprof.dateOfHire
        //         },
        //         {
        //         where:{
        //             id : userprof.id
        //         }});
        // if(user != undefined){
        //     return true;
        // }
        // return false;
    }
}

exports.UserService = this.UserService;
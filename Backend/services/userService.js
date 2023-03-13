var db = require("../models");
const user = require("../models/product/user");
var ProdctDb = require('../models').Product.models;

this.UserService = function () {
    this.AddUser = async function (request) {
        let status = true;
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
        return status;
    }

    this.CheckIfUserExist = async function(request){
        let User = await ProdctDb.UserProfile.findAll({
            where:{
                email : request.body.email,
                password: request.body.password
            }
        });
        if(User != undefined){
            return true;
        }
        return false;
    }

    this.GetUserInfo = async function(request){
        let User = await ProdctDb.UserProfile.findAll({
            where:{
                email : request.body.email
            }
        });
        if(User != undefined){
            return User;
        }
        return null;
    }

    this.UpdateUser = async function(request){

        let User = await ProdctDb.User.update(
            {
                firstName:request.body.firstName,
                middleName:request.body.middleName,
                lastName:request.body.lastName,
                location:request.body.location,
                dateOfBirth:request.body.dateOfBirth,
                yearsOfExperience:request.body.yearsOfExperience
            },
            {
            where:{
                id : request.body.id
            }});
        userprof = request.body.userProfile
        let UserProfile = await ProdctDb.UserProfile.update(
                {
                    contactNumber:userprof.contactNumber,
                    password:userprof.password,
                    dateOfHire:userprof.dateOfHire
                },
                {
                where:{
                    id : userprof.id
                }});
        if(User != undefined){
            return true;
        }
        return false;
    }
}

exports.UserService = this.UserService;
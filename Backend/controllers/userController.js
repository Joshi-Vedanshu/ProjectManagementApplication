var UserService = require('../services/userService').UserService;
var userService = new UserService();

const AddUser = async function (req, res) {
    let status = await userService.AddUser(req);
    if(status){
        res.status(201).send();
    }
    else{
        res.status(500).send();
    }
}

module.exports = { AddUser }
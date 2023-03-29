var UserService = require("../services/userService").UserService;
var SkillService = require("../services/skillServices").SkillService;
var userService = new UserService();
var skillService = new SkillService();

const ChangeUserProfileInformation = async function (req) {
  return await userService.UpdateUser(req);
};

const AddUserSkill = async function (req) {
  return await skillService.AddSkill(req);
};

const UpdateUserSkill = async function (req) {
  return await skillService.updateSkills(req);
};

module.exports = {
  ChangeUserProfileInformation,
  AddUserSkill,
  UpdateUserSkill,
};

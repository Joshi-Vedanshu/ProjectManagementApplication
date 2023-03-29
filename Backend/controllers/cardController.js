var UserService = require("../services/userService").UserService;
var userService = new UserService();

var ProjectService = require("../services/projectServices").ProjectService;
var projectService = new ProjectService();

var CardService = require("../services/cardServices").CardService;
var cardService = new CardService();

var SprintService = require("../services/sprintServices").SprintService;
var sprintService = new SprintService();

const GetCardsByUserId = async function (email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let cards = await cardService.GetCardsByAssigneeId(userId);
  return cards;
};

const GetCardsBySprintId = async function (email) {
  let userId = (await userService.GetUserIdByEmail(email))[0][0].dataValues.id;
  let projects = await projectService.GetAllProjectsOfUser(userId);
  let sprints = await sprintService.GetSprintsByProjectId(
    projects.map((x) => x.id)
  );
  return sprints;
};

module.exports = { GetCardsByUserId, GetCardsBySprintId };

var ProdctDb = require("../models").Product.models;

this.SkillService = function () {
  // CREATE
  this.AddSkill = async function (request) {
    let status = true;
    await ProdctDb.Skill.create({
      name: request.body.name,
      code: request.body.code,
      level: request.body.level,
    }).then(async function (skill) {
      console.log("Skill is created");

      if (skill == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.GetSkills = async function (request) {
    let skills = await ProdctDb.Skill.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (skills != undefined) {
      return skills;
    }
    return null;
  };

  // UPDATE
  this.UpdateSkills = async function (request) {
    let status = false;
    await ProdctDb.Skill.update(
      {
        name: request.body.name,
        code: request.body.code,
        level: request.body.level,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (skill) {
      if (skill != undefined) {
        status = true;
      }
    });
    return status;
  };

  // DELETE
  this.DeleteSkill = async function (request) {
    let status = false;
    await ProdctDb.Skill.destroy({
      where: { id: request.body.id },
    }).then(async function (skill) {
      if (skill != undefined) {
        status = true;
      }
    });
    return status;
  };
};

exports.SkillService = this.SkillService;

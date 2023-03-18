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
  this.getSkills = async function (request) {
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
  this.updateSkills = async function (request) {
    let status = true;
    await ProdctDb.Skill.update(
      {
        name: request.body.name,
        code: request.body.code,
        level: request.body.level,
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
  this.deleteSkill = async function (request) {
    let status = true;
    await ProdctDb.Skill.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.SkillService = this.SkillService;

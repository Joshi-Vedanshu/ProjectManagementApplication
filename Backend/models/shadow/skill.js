const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

class Skills extends Model {}
module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define(
    "Skill",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
      },
      code: {
        type: DataTypes.STRING(30),
      },
      level: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Skill",
    }
  );

  return Skill;
};

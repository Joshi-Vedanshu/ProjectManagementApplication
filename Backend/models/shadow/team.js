const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class Teams extends Model {}
module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define(
    "Team",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
      },
      description: {
        type: DataTypes.STRING(50),
      },
      orgId: {
        type: DataTypes.UUID,
        references: {
          model: "Organization",
          key: "id",
        },
      },
    },
    {
      tableName: "Team",
    }
  );

  return Team;
};

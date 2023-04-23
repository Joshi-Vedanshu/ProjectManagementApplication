const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class UserTeamMappings extends Model {}
module.exports = (sequelize, Sequelize) => {
  const UserTeamMapping = sequelize.define(
    "UserTeamMapping",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      teamId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Team",
          key: "id",
        },
      },
    },
    {
      tableName: "UserTeamMapping",
    }
  );

  return UserTeamMapping;
};

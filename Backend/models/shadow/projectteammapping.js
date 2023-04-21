const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class ProjectTeamMappings extends Model {}
module.exports = (sequelize, Sequelize) => {
  const ProjectTeamMapping = sequelize.define(
    "ProjectTeamMapping",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      teamId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Team",
          key: "id",
        },
      },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Project",
          key: "id",
        },
      },
    },
    {
      tableName: "ProjectTeamMapping",
    }
  );

  return ProjectTeamMapping;
};

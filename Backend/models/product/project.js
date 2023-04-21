const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

class Projects extends Model { }
module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define(
    "Project",
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
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: "User",
          key: "id",
        },
      },
      orgId: {
        type: DataTypes.UUID,
        references: {
          model: "Organization",
          key: "id",
        },
      }
    },
    {
      tableName: "Project",
    }
  );

  return Project;
};

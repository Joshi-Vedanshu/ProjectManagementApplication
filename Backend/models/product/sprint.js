const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class Sprints extends Model {}
module.exports = (sequelize, Sequelize) => {
  const Sprint = sequelize.define(
    "Sprint",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
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
      projectId: {
        type: DataTypes.UUID,
        references: {
          model: "Project",
          key: "id",
        },
      },
    },
    {
      tableName: "Sprint",
    }
  );

  return Sprint;
};

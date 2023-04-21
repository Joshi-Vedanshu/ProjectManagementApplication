const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class Assignments extends Model { }
module.exports = (sequelize, Sequelize) => {
  const Assignment = sequelize.define(
    "Assignment",
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
      cardId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Card",
          key: "id",
        },
      },
    },
    {
      tableName: "Assignment",
    }
  );

  return Assignment;
};

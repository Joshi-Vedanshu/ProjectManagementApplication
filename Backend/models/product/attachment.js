const { Sequelize, DataTypes, Model } = require("sequelize");
const Organization = require("./Organization");
const sequelize = new Sequelize("mysql::memory:");

class Attachments extends Model {}
module.exports = (sequelize, Sequelize) => {
  const Attachment = sequelize.define(
    "Attachment",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      dataPath: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING(10),
      },
    },
    {
      tableName: "Attachment",
    }
  );

  return Attachment;
};

const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

class Users extends Model {}
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(20),
      },
      middleName: {
        type: DataTypes.STRING(20),
      },
      lastName: {
        type: DataTypes.STRING(20),
      },
      location: {
        type: DataTypes.STRING(35),
      },
      dateOfBirth: {
        type: DataTypes.DATE,
      },
      yearsOfExperience: {
        type: DataTypes.INTEGER,
      },
      userProfileId: {
        type: DataTypes.UUID,
        references: {
          model: "UserProfile",
          key: "id",
        },
      },
    },
    {
      tableName: "User",
    }
  );

  return User;
};

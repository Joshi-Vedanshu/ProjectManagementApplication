const { Sequelize, DataTypes, Model } = require("sequelize");

class UserProfiles extends Model {}
module.exports = (sequelize, Sequelize) => {
  const UserProfile = sequelize.define(
    "UserProfile",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
      },
      contactNumber: {
        type: DataTypes.STRING(30),
      },
      password: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      dateOfHire: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "UserProfile",
    }
  );

  return UserProfile;
};

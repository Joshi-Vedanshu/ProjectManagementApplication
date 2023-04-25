const { Sequelize, DataTypes, Model } = require("sequelize");

class UserOrganizationMappings extends Model {}
module.exports = (sequelize, Sequelize) => {
  const UserOrganizationMapping = sequelize.define(
    "UserOrganizationMapping",
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
      orgId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Organization",
          key: "id",
        },
      },
    },
    {
      tableName: "UserOrganizationMapping",
    }
  );

  return UserOrganizationMapping;
};

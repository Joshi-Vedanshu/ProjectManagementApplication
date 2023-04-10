const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const RolePermissionMapping = sequelize.define(
    "RolePermissionMapping",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "Role",
          key: "id",
        },
      },
      projectAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      },
      teamAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      },
      organizationAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      },
      sprintAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      },
      teamUserMappingAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      },
      projectTeamMappingAccess: {
        type: DataTypes.STRING.BINARY,
        defaultValue: 00000,
      }
    },
    {
      tableName: "RolePermissionMapping",
    }
  );

  return RolePermissionMapping;
};

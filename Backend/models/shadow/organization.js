const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

class Organizations extends Model { }
module.exports = (sequelize, Sequelize) => {
  const Organization = sequelize.define(
    "Organization",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        unique: true
      },
      code: {
        type: DataTypes.STRING(10),
        unique: true,
      },
      contact: {
        type: DataTypes.INTEGER(10),
      },
      adminId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    },
    {
      tableName: "Organization",
    }
  );

  return Organization;
};

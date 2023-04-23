const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

class Notifications extends Model {}
module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define(
    "Notification",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      adminId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      requesterId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      status:{
        type: DataTypes.CHAR,
        defaultValue:'0',
        allowNull: false
      }
    },
    {
      tableName: "Notification",
    }
  );

  return Notification;
};

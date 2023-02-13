const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Teams extends Model { }
module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define('UserProfile', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Email: {
            type: DataTypes.STRING(50)
        },
        ContactNumber: {
            type: DataTypes.STRING(30)
        },
        Password: {
            type: DataTypes.STRING(20)
        },
        DateOfHire: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'UserProfile'
    });

    return UserProfile;
}

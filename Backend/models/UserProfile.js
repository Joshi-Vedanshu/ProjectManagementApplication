const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class UserProfiles extends Model { }
module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define('UserProfile', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(50)
        },
        contactNumber: {
            type: DataTypes.STRING(30)
        },
        password: {
            type: DataTypes.STRING(20)
        },
        dateOfHire: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'UserProfile'
    });

    return UserProfile;
}

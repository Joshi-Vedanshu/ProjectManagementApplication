const { Sequelize, DataTypes, Model } = require('sequelize');
const UserProfile = require('./UserProfile');
const sequelize = new Sequelize('mysql::memory:');

class Teams extends Model { }
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Firstname: {
            type: DataTypes.STRING(20)
        },
        MiddleName: {
            type: DataTypes.STRING(20)
        },
        LastName: {
            type: DataTypes.STRING(20)
        },
        Location: {
            type: DataTypes.STRING(35)
        },
        DateOfBirth: {
            type: DataTypes.DATE
        },
        YearsOfExperience: {
            type: DataTypes.INT
        },
        UserProfileFK: {
            type: DataTypes.UUID,
            references: {
                model: 'UserProfile', 
                key: 'id'
            }
        }
    }, {
        tableName: 'User'
    });

    return User;
}

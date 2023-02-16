const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');
const bcrypt = require('bcrypt');
const salt = "$2b$11$nnImKXMRoqh603a0T7o8j.";

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
            type: DataTypes.STRING(60),
            set(value) {
                this.setDataValue('password',  bcrypt.hashSync(value, salt));
            }
        },
        dateOfHire: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'UserProfile'
    });

    return UserProfile;
}

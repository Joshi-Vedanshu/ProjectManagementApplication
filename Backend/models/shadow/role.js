const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Roles extends Model { }
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        type: {
            type: DataTypes.SMALLINT
        },
        name: {
            type: DataTypes.STRING(30)
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        tableName: 'Role'
    });

    return Role;
}

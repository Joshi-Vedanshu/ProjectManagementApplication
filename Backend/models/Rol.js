const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Teams extends Model { }
module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('Rol', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Code: {
            type: DataTypes.STRING(30)
        },
        UserFk: {
            type: DataTypes.UUID,
            references: {
                model: 'User', 
                key: 'id'
            }
        }
    }, {
        tableName: 'Rol'
    });

    return Rol;
}

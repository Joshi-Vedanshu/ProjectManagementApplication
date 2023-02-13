const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class Teams extends Model { }
module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define('Skill', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(30)
        },
        Code: {
            type: DataTypes.STRING(30)
        },
        Level: {
            type: DataTypes.INT
        }
    }, {
        tableName: 'Skill'
    });

    return Skill;
}

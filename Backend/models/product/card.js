const { Sequelize, DataTypes, Model } = require('sequelize');
const Organization = require('./Organization');
const sequelize = new Sequelize('mysql::memory:');

class Cards extends Model { }
module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define('Card', {
        // Model attributes are defined here
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        type:{
            type: DataTypes.TINYINT,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING(20)
        },
        description: {
            type: DataTypes.STRING(50)
        },
        startDate: {
            type:DataTypes.DATE,
            allowNull:false
        },
        endDate:{
            type:DataTypes.DATE,
            allowNull:false
        },
        parentId: {
            type: DataTypes.UUID,
            references: {
                model: 'Card', 
                key: 'id'
            }
        },
        assigneId:{
            type: DataTypes.UUID,
            references: {
                model: 'User', 
                key: 'id'
            }
        },
        reporterId:{
            type: DataTypes.UUID,
            references: {
                model: 'User', 
                key: 'id'
            }
        },
        status:{
            type: DataTypes.TINYINT,
            allowNull:false
        },
        storyPoint:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        duration:{
            type: DataTypes.TIME,
            allowNull:true
        },
        comment:{
            type:DataTypes.STRING,
            allowNull:true
        },
        attachmentId:{
            type: DataTypes.UUID,
            references: {
                model: 'Attachment', 
                key: 'id'
            }
        },
        sprintId:{
            type: DataTypes.UUID,
            references: {
                model: 'Sprint', 
                key: 'id'
            }
        }
    }, {
        tableName: 'Card'
    });

    return Card;
}

const database = require('../../../database/database.js');
const { DataTypes } = require('sequelize');

const TABLA = 'auths';

const Auths = database.define(TABLA, {
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true, 
    }
});

module.exports = Auths;
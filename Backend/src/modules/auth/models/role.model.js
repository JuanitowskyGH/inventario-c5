const database = require('../../../database/database.js');
const { DataTypes } = require('sequelize');

const TABLA = 'roles';

const Roles = database.define(TABLA, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Roles;
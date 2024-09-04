const { DataTypes } = require('sequelize');
const sequelize = require('../../../database/database');

const TABLA = 'roles';

const Role = sequelize.define(TABLA, {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Role;
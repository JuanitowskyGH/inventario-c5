const { DataTypes } = require('sequelize');
const sequelize = require('../../../database/database');

const TABLA = 'users';

const User = sequelize.define(TABLA, {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidop: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  })

module.exports = User;
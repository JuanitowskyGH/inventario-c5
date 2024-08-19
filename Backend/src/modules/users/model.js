const database = require('../../database/database.js');
const { DataTypes } = require('sequelize');

const TABLA = 'users';

const Usuarios = database.define(TABLA, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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
        allowNull: false
    },
    permisos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Usuarios;
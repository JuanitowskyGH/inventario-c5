/*import database from "../database/database.js";
import { DataTypes } from "sequelize";*/

const database = require('../../database/database.js');
const { DataTypes } = require('sequelize');

const TABLA = 'users';

const Inventario = database.define(TABLA, {
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
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Inventario;
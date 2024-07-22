/*import { Sequelize } from "sequelize";
import { config } from "../config.js";*/

const { Sequelize } = require('sequelize');
const { config } = require('../config.js');

const database = new Sequelize('inventario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = database;

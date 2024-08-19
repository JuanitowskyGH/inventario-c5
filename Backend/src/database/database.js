require('dotenv').config();

const { Sequelize } = require('sequelize');
const config = require('../config');

const database = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql'
});

module.exports = database;
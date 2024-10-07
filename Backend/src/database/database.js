require("dotenv").config();

const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize(
  config.development.database,
  config.development.user,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
  }
);

module.exports = database;

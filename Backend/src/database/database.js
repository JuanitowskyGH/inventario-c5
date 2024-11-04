require("dotenv").config();

const { Sequelize } = require("sequelize");
const config = require("../config");

const database = new Sequelize(
  config.test.database,
  config.test.username,
  config.test.password,
  {
    host: config.test.host,
    dialect: "mysql",
  }
);

module.exports = database;

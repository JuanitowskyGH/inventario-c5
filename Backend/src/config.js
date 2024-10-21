require("dotenv").config();

module.exports = {
  app: {
    port: process.env.DB_PORT || 4000,
  },
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "testdb",
    host: process.env.DB_HOST || "localhost",
    jwtsecret: process.env.JWT_SECRET,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pruebas",
    host: process.env.DB_HOST || "localhost",
    jwtsecret: process.env.JWT_SECRET,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pruebas",
    host: process.env.DB_HOST || "localhost",
    jwtsecret: process.env.JWT_SECRET,
    dialect: "mysql",
  },
};
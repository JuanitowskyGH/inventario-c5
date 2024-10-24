require("dotenv").config();

module.exports = {
  app: {
    port: process.env.DB_PORT || 4000,
  },
  secure: {
    jwtsecret: process.env.JWT_SECRET,
    process: process.env.NODE_ENV,
  },
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pruebas",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pruebas",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
};
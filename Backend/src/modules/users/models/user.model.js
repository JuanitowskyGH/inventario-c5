const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
const Role = require("./role.model");

const TABLA = "users";

const User = sequelize.define(TABLA, {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidop: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: "id",
    },
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: "id",
    },
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
});


module.exports = User;

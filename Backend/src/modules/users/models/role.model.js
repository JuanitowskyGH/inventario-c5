const { DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

const TABLA = "roles";

const Role = sequelize.define(TABLA, {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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

module.exports = Role;

const database = require("../../../database/database.js");
const User = require("../../users/models/user.model.js");
const { DataTypes } = require("sequelize");

const TABLA = "consumables";

const Consumible = database.define(
  TABLA,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    etiqueta: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Sin marca",
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Sin modelo",
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Sin No. de serie",
    },
    responsable: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Consumible;

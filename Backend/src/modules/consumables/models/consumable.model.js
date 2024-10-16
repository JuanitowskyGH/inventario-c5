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
      defaultValue: "SIN MARCA",
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "SIN MODELO",
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "SIN NO. DE SERIE",
    },
    responsable: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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

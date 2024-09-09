const database = require("../../database/database.js");
const { DataTypes } = require("sequelize");

const TABLA = "registers";

const Inventario = database.define(
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
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
    numAnterior: {
      type: DataTypes.STRING,
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
      allowNull: false,
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
      unique: true,
    },
    departamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsable: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edicion: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Sin edición",
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
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

module.exports = Inventario;

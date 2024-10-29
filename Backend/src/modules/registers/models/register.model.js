const database = require("../../../database/database.js");
const User = require("../../users/models/user.model.js");
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
      unique: true,
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
      defaultValue: "S/N",
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
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // RELACION PARA AGREGAR EL USUARIO QUE CREO EL REGISTRO
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
    },
  }
);

module.exports = Inventario;

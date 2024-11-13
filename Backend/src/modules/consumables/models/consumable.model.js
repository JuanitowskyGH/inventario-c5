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
      defaultValue: "S/M",
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "S/M",
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "S/N",
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
    // RELACION PARA OBTENER EL ID DEL USUARIO QUE CREA EL CONSUMIBLE
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

module.exports = Consumible;

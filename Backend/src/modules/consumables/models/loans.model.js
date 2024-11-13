const Sequelize = require("sequelize");
const sequelize = require("../../../database/database");
const User = require("../../users/models/user.model");
const Status = require("./status.model");

const Loans = sequelize.define(
  "loans",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    loanDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    statusId: {
      type: Sequelize.INTEGER,
      references: {
        model: Status,
        key: "id",
      },
    },
    // RELACION PARA OBTENER EL ID DEL USUARIO QUE APRUEBA EL PRESTAMO
    approvedBy: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "loans",
    timestamps: false,
  }
);

module.exports = Loans;

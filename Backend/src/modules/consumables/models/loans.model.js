const Sequelize = require('sequelize');
const sequelize = require('../../../database/database');

const Loans = sequelize.define('loans', {
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
  }
  });

module.exports = Loans;
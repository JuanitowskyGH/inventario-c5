const Sequelize = require('sequelize');
const sequelize = require('../../../database/database');

const Status = sequelize.define('status', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'status',
  timestamps: false,
});

module.exports = Status;
const { DataTypes } = require('sequelize');
const sequelize = require('../../../database/database');
const User = require('./user.model');
const Role = require('./role.model');

const TABLA = 'user_roles';

const UserRole = sequelize.define(TABLA, {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id'
    }
  }
});

User.belongsToMany(Role, { through: UserRole, foreignKey: 'userId' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'roleId' });

module.exports = UserRole;
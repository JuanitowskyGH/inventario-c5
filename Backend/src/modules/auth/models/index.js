const config = require('../../../config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model.js')
db.role = require('./role.model.js')

db.role.belongsToMany(db.user, {
    through: 'auth',
})

db.user.belongsToMany(db.role, {
    through: 'auth',
})

db.ROLES = ['Lector', 'Moderador', 'Administrador']

module.exports = db
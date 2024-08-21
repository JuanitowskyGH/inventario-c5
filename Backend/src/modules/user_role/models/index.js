const config = require('../../../config.js');
const Sequelize = require('sequelize');
//const database = require('../../../database/database.js');
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "auth"
});
db.user.belongsTo(db.role, {
    through: "auth"
});

db.ROLES = ["Lector", "Moderador", "Administrador"];
module.exports = db;
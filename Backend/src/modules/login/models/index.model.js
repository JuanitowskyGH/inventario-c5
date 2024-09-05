const User = require('./user.model.js');
const Role = require('./role.model.js');
const UserRole = require('./userRole.model.js');
const db = require('../../../database/database');

db.sync({ force: false }).then(() => {
  console.log('Tablas creadas');
  initial()
})

async function initial() {
  await Role.findOrCreate({
      where: { id: 1 },
      defaults: { name: "Administrador" }
  });
  await Role.findOrCreate({
      where: { id: 2 },
      defaults: { name: "Moderador" }
  });
  await Role.findOrCreate({
      where: { id: 3 },
      defaults: { name: "Lector" }
  });
}

module.exports = { User, Role };
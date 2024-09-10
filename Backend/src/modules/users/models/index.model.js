const User = require("./user.model.js");
const Role = require("./role.model.js");
const db = require("../../../database/database");
const bcrypt = require("bcrypt");

//CREACION DE TABLAS EN LA BASE DE DATOS
db.sync({ force: false }).then(() => {
  console.log("Tablas creadas");
  initial();
});

//CREACION DE VALORES INICIALES
async function initial() {
  await Role.findOrCreate({
    where: { id: 1 },
    defaults: { name: "Administrador" },
  });
  await Role.findOrCreate({
    where: { id: 2 },
    defaults: { name: "Moderador" },
  });
  await Role.findOrCreate({
    where: { id: 3 },
    defaults: { name: "Lector" },
  });

  //CREACION DE USUARIO ADMINISTRADOR POR DEFECTO
  const hashPass = await bcrypt.hash("admin", 8);

  await User.findOrCreate({
    where: { id: 1 },
    defaults: {
      nombre: "Admin_name",
      apellidop: "Admin_ap",
      apellidom: "Admin_am",
      username: "admin",
      password: hashPass,
      roleId: 1,
    },
  });
}

module.exports = { User, Role };

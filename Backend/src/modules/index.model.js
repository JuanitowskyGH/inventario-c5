const User = require("./users/models/user.model.js");
const Role = require("./users/models/role.model.js");
const Inventario = require("./registers/models/register.model.js");

  //RELACIONES ENTRE TABLAS
  User.belongsTo(Role, { foreignKey: "roleId" });
  Role.hasMany(User, { foreignKey: "roleId" });

  User.belongsTo(User, { as: "creatorU", foreignKey: "createdBy" });
  Inventario.belongsTo(User, { as: "creatorI", foreignKey: "createdBy" });


module.exports = { User, Role, Inventario };

const User = require("./users/models/user.model.js");
const Role = require("./users/models/role.model.js");
const Inventario = require("./registers/models/register.model.js");
const Consumible = require("./consumables/models/consumable.model.js");
const LoanConsumable = require("./consumables/models/loanConsumable.model.js");
const Loans = require("./consumables/models/loans.model.js");
const Status = require("./consumables/models/status.model.js");

  // RELACIONES ENTRE TABLAS
  User.belongsTo(Role, { foreignKey: "roleId" });
  Role.hasMany(User, { foreignKey: "roleId" });

  User.belongsTo(User, { as: "creatorU", foreignKey: "createdBy" });
  Inventario.belongsTo(User, { as: "creatorI", foreignKey: "createdBy" });
  Consumible.belongsTo(User, { as: "creatorC", foreignKey: "createdBy" });

  Loans.belongsTo(User, { as: "user", foreignKey: "userId" });
  Loans.belongsTo(Status, { as: "status", foreignKey: "statusId" });
  Loans.belongsTo(User, { as: "approved", foreignKey: "approvedBy" });
  Loans.belongsToMany(Consumible, { through: LoanConsumable, as: "consumables", foreignKey: "loanId" });
  Consumible.belongsToMany(Loans, { through: LoanConsumable, as: "loans", foreignKey: "consumableId" });

module.exports = { User, Role, Inventario, Consumible, Loans, Status, LoanConsumable};

//PARA PROBAR EL GITIGNORE
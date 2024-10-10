const express = require("express");
const { getTypes, getByType } = require("../controllers/consumable.controller.js");
const consumable = express.Router();

consumable.get("/consumables/types", getTypes);
consumable.get("/consumables/type/:tipo/:modelo", (req, res, next) => {
  req.params.tipo = decodeURIComponent(req.params.tipo);
  req.params.modelo = decodeURIComponent(req.params.modelo);
  next();
}, getByType);

module.exports = consumable;
const express = require("express");
const { getTypes, getByType } = require("../controllers/consumable.controller.js");
const consumable = express.Router();

consumable.get("/consumables/types", getTypes);
consumable.get("/consumables/type/:tipo/:modelo", getByType);

module.exports = consumable;
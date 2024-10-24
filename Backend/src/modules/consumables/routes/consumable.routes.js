const express = require("express");
const multer = require("multer");
const path = require("path");
const authUser = require('../../auth/middleware/user.middleware');
const { create, getTypes, update, getByType, getById, remove } = require("../controllers/consumable.controller.js");
const consumable = express.Router();

//CONFIGURACION DE MULTER PARA GUARDAR IMAGENES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/consumables");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

//MIDDLEWARE PARA SUBIR IMAGENES
const upload = multer({ storage: storage });

consumable.post("/consumables", authUser, upload.single("imagen"), create);
consumable.put("/consumables/:id", upload.single("imagen"), update);
consumable.get("/consumables/types", getTypes);
consumable.get("/consumables/type/:tipo/:marca", (req, res, next) => {
  req.params.tipo = decodeURIComponent(req.params.tipo);
  req.params.modelo = decodeURIComponent(req.params.modelo);
  next();
}, getByType);
consumable.get("/consumables/:id", getById);
consumable.delete("/consumables/:id", remove);

module.exports = consumable;

/* POR ALGUNA EXTRAÑA RAZON SI SE MUEVEN LAS RUTAS YA NO 
   OBTIENE LOS CONSUMIBLES ??? */
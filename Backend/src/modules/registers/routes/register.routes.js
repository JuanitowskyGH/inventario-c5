const express = require("express");
const multer = require("multer");
const path = require("path");
const authUser = require('../../auth/middleware/user.middleware');
const { getAll, getById, create, update, remove } = require("../controllers/register.controller.js");
const inventario = express.Router();

// CONFIGURACION DE MULTER PARA GUARDAR IMAGENES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/registers");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// MIDDLEWARE PARA SUBIR IMAGENES
const upload = multer({ storage: storage });

// RUTAS PARA MANEJAR EL CRUD DEL INVENTARIO
inventario.get("/inventario", getAll);
inventario.get("/inventario/:id", getById);
inventario.post("/inventario", authUser, upload.single("imagen"), create);
inventario.put("/inventario/:id", upload.single("imagen"), update);
inventario.delete("/inventario/:id", remove);

module.exports = inventario;

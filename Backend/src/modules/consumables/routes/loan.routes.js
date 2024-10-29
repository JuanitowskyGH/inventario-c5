const express = require("express");
const router = express.Router();
const { solicitudPrestamo, aprobarPrestamo, obtenerSolicitudes } = require("../controllers/loan.controller");

router.post("/request", solicitudPrestamo);
router.put("/request/:id", aprobarPrestamo);
router.get("/getrequest", obtenerSolicitudes);

module.exports = router;
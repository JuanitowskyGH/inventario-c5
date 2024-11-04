const express = require("express");
const router = express.Router();
const { solicitudPrestamo, aprobarPrestamo, rechazarPrestamo, obtenerSolicitudes, reportePrestamos } = require("../controllers/loan.controller");

router.post("/request", solicitudPrestamo);
router.put("/apprequest/:id", aprobarPrestamo);
router.put("/decrequest/:id", rechazarPrestamo);
router.get("/getrequest", obtenerSolicitudes);
router.get("/report", reportePrestamos);

module.exports = router;
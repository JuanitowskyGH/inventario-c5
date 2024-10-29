const express = require('express');
const router = express.Router();
const { login, logout, getCurrentUser } = require('../controllers/login.controller')

// RUTAS PARA CONTROLAR EL ACCESO
router.post('/login', login);
router.post('/logout', logout);
router.get('/currentUser', getCurrentUser);

module.exports = router;
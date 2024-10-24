const express = require('express');
const router = express.Router();
const { login, logout, getCurrentUser } = require('../controllers/login.controller')
const { auth } = require("./../middleware/auth.middleware");

router.post('/login', login);
router.post('/logout', logout);
router.get('/currentUser', getCurrentUser);

module.exports = router;
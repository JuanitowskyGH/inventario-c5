const express = require('express');
const router = express.Router();
const { create, login } = require('../controllers/user.controller')

router.post('/register', create);
router.post('/login', login);

module.exports = router;
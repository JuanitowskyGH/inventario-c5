const express = require('express');
const router = express.Router();
const { login } = require('../controllers/login.controller')

//router.post('/register', create);
router.post('/', login);

module.exports = router;
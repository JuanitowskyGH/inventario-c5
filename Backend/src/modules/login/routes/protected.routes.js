const express = require('express');
const { auth, authRole } = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/admin', auth, authRole(['Administrador']), (req, res) => {
    res.json({ message: 'Welcome admin' });
})

router.get('/mod', auth, authRole(['Moderador']), (req, res) => {
    res.json({ message: 'Welcome mod' });
})

router.get('/lector', auth, authRole(['Lector']), (req, res) => {
    res.json({ message: 'Welcome reader' });
})

module.exports = router;
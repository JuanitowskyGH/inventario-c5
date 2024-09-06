const express = require('express');
const router = express.Router();
const { create, findAll, findOne, update, remove } = require('../controllers/user.controller')

router.post('/register', create);
router.get('/users', findAll);
router.get('/user/:id', findOne);
router.put('/user/:id', update);
router.delete('/user/:id', remove);

module.exports = router;
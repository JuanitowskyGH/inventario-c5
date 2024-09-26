const express = require('express');
const router = express.Router();
const authUser = require('../../auth/middleware/user.middleware');
const { create, findAll, findOne, update, remove } = require('../controllers/user.controller')

router.post('/users', authUser, create);
router.get('/users', findAll);
router.get('/users/:id', findOne);
router.put('/users/:id', update);
router.delete('/users/:id', remove);

module.exports = router;
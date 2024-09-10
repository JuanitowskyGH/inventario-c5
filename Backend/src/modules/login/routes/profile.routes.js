const express = require('express');
const router = express.Router();
const { getUserInfo, updateUserInfo, verifyPassword } = require('../controllers/profile.controller');

router.get('/info', getUserInfo);
router.put('/info', updateUserInfo);
router.post('/verify', verifyPassword);

module.exports = router;
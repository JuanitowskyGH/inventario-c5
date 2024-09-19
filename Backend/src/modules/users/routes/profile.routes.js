const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { getUserInfo, updateUserInfo, verifyPassword, updatePassword } = require('../controllers/profile.controller');

//CONFIGURACION DE MULTER PARA GUARDAR IMAGENES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/users");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

//MIDDLEWARE PARA SUBIR IMAGENES
const upload = multer({ storage: storage });

router.get('/info', getUserInfo);
router.put('/info', upload.single("imagen"), updateUserInfo);
router.put('/upass', updatePassword);
router.post('/verify', verifyPassword);

module.exports = router;
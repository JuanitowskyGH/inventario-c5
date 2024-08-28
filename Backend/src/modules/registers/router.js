const express = require('express');
const multer = require('multer');
const path = require('path');
const { getAll, getById, create, update, remove } = require('./controller.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/registers');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const inventario = express.Router();

inventario.get('/inventario', getAll);
inventario.get('/inventario/:id', getById);
inventario.post('/inventario', upload.single("imagen"), create);
inventario.put('/inventario/:id', upload.single("imagen"), update);
inventario.delete('/inventario/:id', remove);

module.exports = inventario;
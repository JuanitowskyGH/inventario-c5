const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const cors = require('cors');

const inventario = require('./modules/inventario/rutas');
const usuarios = require('./modules/usuarios/rutas');
const errors = require('./red/errors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuracion de puerto
app.set('port', config.app.port);

// Rutas
app.use("/api", inventario);
app.use("/api", usuarios);
app.use(errors);

module.exports = app;

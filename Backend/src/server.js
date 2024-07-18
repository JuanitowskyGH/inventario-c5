const express = require('express');
const config = require('./config');
const morgan = require('morgan');

const inventario = require('./modules/inventario/rutas');
const errors = require('./red/errors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuracion de puerto
app.set('port', config.app.port);

// Rutas
app.use("/server/inventario", inventario);
app.use(errors);

module.exports = app;

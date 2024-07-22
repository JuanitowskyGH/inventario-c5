/*import express from 'express';
import { getAll, getById, create, update, remove } from './controller.js';
*/
const express = require('express');
const { getAll, getById, create, update, remove } = require('./controller.js');

const inventario = express.Router();

inventario.get('/inventario', getAll);
inventario.get('/inventario/:id', getById);
inventario.post('/inventario', create);
inventario.put('/inventario/:id', update);
inventario.delete('/inventario/:id', remove);

module.exports = inventario;
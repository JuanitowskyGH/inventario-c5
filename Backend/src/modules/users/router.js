/*import express from 'express';
import { getAll, getById, create, update, remove } from './controller.js';
*/
const express = require('express');
const { getAll, getById, create, update, remove } = require('./controller.js');

const usuarios = express.Router();

usuarios.get('/usuarios', getAll);
usuarios.get('/usuarios/:id', getById);
usuarios.post('/usuarios', create);
usuarios.put('/usuarios/:id', update);
usuarios.delete('/usuarios/:id', remove);

module.exports = usuarios;
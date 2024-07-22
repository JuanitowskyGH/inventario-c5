/*import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config.js'
import db from '../src/database/database.js';
import inventario from './modules/router.js';*/
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config.js');
const db = require('../src/database/database.js');


const inventario = require('./modules/registers/router.js');
const usuarios = require('./modules/users/router.js')

//MIDDLEWARE
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//RUTAS
app.use('/api', inventario);
app.use('/api', usuarios);

//PUERTO
try{
    db.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error){
    console.error('Unable to connect to the database:', error);
}

app.listen(config.app.port, () => {
    console.log(`Server running on port ${config.app.port}`);
})
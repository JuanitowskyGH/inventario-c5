const db = require('../../database/database');
const controlador = require('./controller');

module.exports = controlador(db);

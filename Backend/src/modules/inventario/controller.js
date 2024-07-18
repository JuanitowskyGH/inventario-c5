const db = require('../../database/database');
const TABLA = 'register';

// Funcion para encontrar todos los registros de la tabla
function findAll(){
    return db.findAll(TABLA);
}

// Funcion para encontrar un registro de la tabla por id
function findById(id){
    return db.findById(TABLA, id);
}

// Funcion para crear y actualizar un registro en la tabla
function createUpdate(body){
    return db.createUpdate(TABLA, body);
}

// Funcion para eliminar un registro de la tabla
function deleteById(body){
    return db.deleteById(TABLA, body);
}

module.exports = {
    findAll,
    findById,
    createUpdate,
    deleteById
}

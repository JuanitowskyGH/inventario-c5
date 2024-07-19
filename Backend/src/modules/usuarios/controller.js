const TABLA = 'users';

module.exports = function (dbInyect) {

    let db = dbInyect;

    if (!db) {
        db = require('../../database/database');
    }

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

    return {
        findAll,
        findById,
        createUpdate,
        deleteById
    }
}

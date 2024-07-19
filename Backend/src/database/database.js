const mysql = require('mysql');
const config = require('../config');


// Configuracion de la base de datos
const dbconf = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
}

// Conexion a la base de datos
let connection;
function handleCon(){
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if(err){
            console.error('[db err]', err);
            setTimeout(handleCon, 2000);
        }else{
            console.log('BASE DE DATOS CONECTADA');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleCon();
        }else{
            throw err;
        }
    });
}

handleCon();

// Funciones de consulta
// Funcion para encontrar todos los registros de una tabla
function findAll(tabla){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}


// Funcion para encontrar un registro de una tabla por id
function findById(tabla, id){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}


// Funcion para crear y actualizar un registro en una tabla
function create(tabla, data){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${tabla} SET ?`, data, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}

function update(tabla, data){
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}

function createUpdate(tabla, data){
    if(data && data.id == 0){
        return create(tabla, data);
    }else{
        return update(tabla, data);
    }
        
}


// Funcion para eliminar un registro de una tabla por id
function deleteById(tabla, datas){
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${tabla} WHERE id = ?`, datas.id, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}

module.exports = {
    findAll,
    findById,
    createUpdate,
    deleteById
}

/*
REVISAR ESTA PARTE DE CODIGO PARA VER SI FUNCIONA 

function createUpdate(tabla, data){
    if(data.id == 0){
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO ${tabla} SET ?`, data, (err, data) => {
                return err ? reject(err) : resolve(data);
            });
        });
    }else{
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (err, data) => {
                return err ? reject(err) : resolve(data);
            });
        });
    }
}*/
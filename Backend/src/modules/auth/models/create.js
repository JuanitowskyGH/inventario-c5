const registers = require('../../registers/model.js');
const Trole = require('./role.model.js');
const Tuser = require('./user.model.js');
const Tauth = require('./auth.model.js');

const create1 = registers.sync()
    .then(() => {
        console.log('La tabla Inventario ha sido creada (si no existía).');
    })
    .catch((error) => {
        console.log('Error al sincronizar el modelo Inventario:', error);
    });

const create2 = Trole.sync()
    .then(() => {
        console.log('La tabla Roles ha sido creada (si no existía).');
    })
    .catch((error) => {
        console.log('Error al sincronizar el modelo Roles:', error);
    });

const create3 = Tuser.sync()
    .then(() => {
        console.log('La tabla Usuarios ha sido creada (si no existía).');
    })
    .catch((error) => {
        console.log('Error al sincronizar el modelo Usuarios:', error);
    });

const create4 = Tauth.sync()
    .then(() => {
        console.log('La tabla Auth ha sido creada (si no existía).');
    })
    .catch((error) => {
        console.log('Error al sincronizar el modelo Auth:', error);
    });

const create ={
    create1,
    create2,
    create3,
    create4
}

module.exports = create;
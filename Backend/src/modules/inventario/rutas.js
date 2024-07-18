const express = require('express');
const router = express.Router();

const respuesta = require('../../red/respuestas');
const controlador = require('./controller');

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', createUpdate);
router.delete('/', deleteById);

//ENCONTRAR TODOS LOS REGISTROS DE LA TABLA
async function findAll (req, res, next) {
    try {
        const data = await controlador.findAll()
        respuesta.succes(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};

//ENCONTRAR UN REGISTRO DE LA TABLA POR ID
async function findById (req, res, next) {
    try {
        const data = await controlador.findById(req.params.id)
        respuesta.succes(req, res, data, 200);
    } catch (error) {
        next(error);
    }
};

//CREAR o EDITAR UN REGISTRO EN LA TABLA
async function createUpdate (req, res, next) {
    try {
        const data = await controlador.createUpdate(req.body)
        if(req.body.id == 0){
            mensaje = "Se ha creado el registro";
        }else{
            mensaje = "Se ha editado el registro";
        }
        respuesta.succes(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
}

//ELIMINAR UN REGISTRO DE LA TABLA
async function deleteById (req, res, next) {
    try {
        const data = await controlador.deleteById(req.body)
        respuesta.succes(req, res, "Se ha eliminado el registro", 200);
    } catch (error) {
        next(error);
    }
};

module.exports = router;
/*import e from "express";
import Inventario from "./model.js";*/

const Inventario = require('./model.js');

/*const getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; // Obtener parámetros de la consulta
        const offset = (page - 1) * limit;

        const inventario = await Inventario.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset)
        });

        res.json({
            totalItems: inventario.count,
            totalPages: Math.ceil(inventario.count / limit),
            currentPage: parseInt(page),
            data: inventario.rows
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    }
}*/

const getAll = async (req, res) => {
    try {
        const inventario = await Inventario.findAll();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    }
}

const getById = async (req, res) => {
    try {
        const inventario = await Inventario.findByPk(req.params.id);
        res.json(inventario);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    }
}

/*const create = async (req, res) => {
    try {
        const inventario = await Inventario.create(req.body);
        res.json(inventario);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el registro",
            error: error.message
        });
    }
}*/

const create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Imagen requerida"
            });
        }

        const imagen = req.file.path;
        const { etiqueta, numAnterior, tipo, descripcion, marca, modelo, serie, departamento, responsable, ubicacion, edicion } = req.body;

        let inventario = await Inventario.create({ 
            etiqueta, 
            numAnterior, 
            tipo, 
            descripcion, 
            marca, 
            modelo, 
            serie, 
            departamento, 
            responsable, 
            ubicacion, 
            edicion, 
            imagen 
        });

        res.status(201).json({ inventario, message: "Registro creado" });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el registro",
            error: error.message
        });
    }
}



const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { etiqueta, numAnterior, tipo, descripcion, marca, modelo, serie, departamento, responsable, ubicacion, edicion } = req.body;
        const updateData = { 
            etiqueta, 
            numAnterior, 
            tipo, 
            descripcion, 
            marca, 
            modelo, 
            serie, 
            departamento, 
            responsable, 
            ubicacion, 
            edicion 
        };

        if (req.file) {
            updateData.imagen = req.file.path;
        }

        await Inventario.update(updateData, {
            where: { id }
        });

        res.json({
            message: "Registro actualizado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el registro",
            error: error.message
        });
    }
}

const remove = async (req, res) => {
    try {
        await Inventario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Registro eliminado"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el registro",
            error: error.message
        });
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}
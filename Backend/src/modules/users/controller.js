/*import e from "express";
import Usuarios from "./model.js";*/

const Usuarios = require('./model.js');

/*const getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; // Obtener parámetros de la consulta
        const offset = (page - 1) * limit;

        const usuarios = await Usuarios.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset)
        });

        res.json({
            totalItems: usuarios.count,
            totalPages: Math.ceil(usuarios.count / limit),
            currentPage: parseInt(page),
            data: usuarios.rows
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
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    }
}

const getById = async (req, res) => {
    try {
        const usuario = await Usuarios.findByPk(req.params.id);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error: error.message
        });
    }
}

const create = async (req, res) => {
    try {
        const usuario = await Usuarios.create(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el registro",
            error: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        await Usuarios.update(req.body, {
            where: {
                id: req.params.id
            }
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
        await Usuarios.destroy({
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
/*import e from "express";
import Inventario from "./model.js";*/

const Inventario = require('./model.js');

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

const create = async (req, res) => {
    try {
        const inventario = await Inventario.create(req.body);
        res.json(inventario);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el registro",
            error: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        await Inventario.update(req.body, {
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
const Inventario = require("../models/register.model.js");

//CONTROLADOR PARA HACER LAS PETICIONES A LA BASE DE DATOS
//CONTROLADOR PARA OBTENER TODOS LOS REGISTROS
const getAll = async (req, res) => {
  try {
    const inventario = await Inventario.findAll();
    res.json(inventario);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los datos",
      error: error.message,
    });
  }
};

//CONTROLADOR PARA OBTENER UN REGISTRO POR ID
const getById = async (req, res) => {
  try {
    const inventario = await Inventario.findByPk(req.params.id);
    res.json(inventario);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los datos",
      error: error.message,
    });
  }
};

//CONTROLADOR PARA CREAR UN REGISTRO
const create = async (req, res) => {
  try {
    const imagen = req.file ? req.file.path.replace(/\\/g, '/') : null;
    const {
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
    } = req.body;
    const newDescripcion = descripcion || "Sin descripción";
    if (
      !etiqueta ||
      !numAnterior ||
      !tipo ||
      !marca ||
      !departamento ||
      !responsable ||
      !ubicacion
    ) {
      return res.status(400).json({
        message: "Todos los campos son requeridos",
      });
    }

    let inventario = await Inventario.create({
      etiqueta,
      numAnterior,
      tipo,
      descripcion: newDescripcion,
      marca,
      modelo,
      serie,
      departamento,
      responsable,
      ubicacion,
      edicion,
      imagen,
    });

    res.status(201).json({ inventario, message: "Registro creado" });
  } catch (error) {
    console.error("Error al crear el registro:", error);
    res.status(500).json({
      message: "Error al crear el registro",
      error: error.message,
    });
  }
};

//CONTROLADOR PARA ACTUALIZAR UN REGISTRO
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
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
    } = req.body;
    const newDescripcion = descripcion || "Sin descripción";
    const updateData = {
      etiqueta,
      numAnterior,
      tipo,
      descripcion: newDescripcion,
      marca,
      modelo,
      serie,
      departamento,
      responsable,
      ubicacion,
      edicion,
    };

    if (req.file) {
      updateData.imagen = req.file.path.replace(/\\/g, '/');
    }

    await Inventario.update(updateData, {
      where: { id },
    });

    res.json({
      message: "Registro actualizado",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el registro",
      error: error.message,
    });
  }
};

//CONTROLADOR PARA ELIMINAR UN REGISTRO
const remove = async (req, res) => {
  try {
    await Inventario.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Registro eliminado",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el registro",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

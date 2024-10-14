const { Consumible, User } = require("../../index.model");

// Función para transformar todos los campos a mayúsculas
const toUpperCaseFields = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'string') {
      newObj[key] = obj[key].toUpperCase();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// CONTROLADOR PARA CREAR UN REGISTRO
const create = async (req, res) => {
  try {
    const imagen = req.file ? req.file.path.replace(/\\/g, '/') : null;
    const {
      etiqueta,
      tipo,
      descripcion,
      marca,
      modelo,
      serie,
      responsable,
    } = req.body;

    if (!etiqueta || !tipo || !responsable) {
      return res.status(400).json({
        message: "Todos los campos son requeridos",
      });
    }

    // Transformar todos los campos a mayúsculas
    const upperCaseData = toUpperCaseFields({
      etiqueta,
      tipo,
      descripcion: descripcion || "Sin descripción",
      marca,
      modelo,
      serie,
      responsable,
    });

    let consumible = await Consumible.create({
      ...upperCaseData,
      imagen,
      createdBy: req.user.id,
    });

    res.status(201).json(consumible);
  } catch (error) {
    console.error('Error al crear el registro:', error);
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
      tipo,
      descripcion,
      marca,
      modelo,
      serie,
      responsable,
    } = req.body;
    const newDescripcion = descripcion || "Sin descripción";

    const upperCaseData = toUpperCaseFields({
      etiqueta,
      tipo,
      descripcion: newDescripcion || "Sin descripción",
      marca,
      modelo,
      serie,
      responsable,
    });

    if (req.file) {
      upperCaseData.imagen = req.file.path.replace(/\\/g, '/');
    }

    await Consumible.update(upperCaseData, {
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

const getTypes = async (req, res) => {
  try {
    const types = await Consumible.findAll({
      attributes: ['tipo', 'marca'],
      group: ['tipo', 'marca',]
    });
    res.json(types);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los tipos de registros",
      error: error.message,
    });
  }
};

const getByType = async (req, res) => {
  const { tipo, marca } = req.params;
  try {
    const decodedTipo = decodeURIComponent(tipo);
    const decodedModelo = decodeURIComponent(marca);
    
    const registros = await Consumible.findAll({
      where: { tipo: decodedTipo, marca: decodedModelo },
      include: [
        {
          model: User,
          as: "creatorC",
          attributes: ["nombre", "apellidop", "apellidom"],
        }
      ],
    });
    res.json(registros);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los registros por tipo y marca",
      error: error.message,
    });
  }
};

// CONTROLADOR PARA OBTENER UN CONSUMIBLE POR ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const consumible = await Consumible.findByPk(id);

    if (!consumible) {
      return res.status(404).json({
        message: "Consumible no encontrado",
      });
    }

    res.status(200).json(consumible);
  } catch (error) {
    console.error('Error al obtener el consumible:', error);
    res.status(500).json({
      message: "Error al obtener el consumible",
      error: error.message,
    });
  }
};


//CONTROLADOR PARA ELIMINAR UN REGISTRO
const remove = async (req, res) => {
  try {
    await Consumible.destroy({
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
  create,
  update,
  getTypes,
  getByType,
  getById,
  remove,
};
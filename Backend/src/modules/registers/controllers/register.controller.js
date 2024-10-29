const { Inventario, User } = require("../../index.model");

// FUNCION PARA TRANSFORMAR LOS DATOS EN MAYUSCULAS
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

// CONTROLADOR PARA OBTENER TODOS LOS REGISTROS
const getAll = async (req, res) => {
  try {
    const inventario = await Inventario.findAll({
      include: [
        {
          model: User,
          as: "creatorI",
          attributes: ["nombre", "apellidop", "apellidom"],
        }
      ],
    });
    res.json(inventario);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los datos",
      error: error.message,
    });
  }
};

// CONTROLADOR PARA OBTENER UN REGISTRO POR ID
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

// CONTROLADOR PARA CREAR UN REGISTRO
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
    } = req.body;

    if (
      !etiqueta ||
      !numAnterior ||
      !tipo ||
      !departamento ||
      !responsable ||
      !ubicacion
    ) {
      return res.status(400).json({
        message: "Todos los campos son requeridos",
      });
    }

    const etiquetaExistente = await Inventario.findOne({ where: { etiqueta } });
    if (etiquetaExistente) {
      return res.status(400).json({
        message: "La etiqueta ya está registrada",
      });
    }

    const upperCaseData = toUpperCaseFields({
      etiqueta,
      numAnterior,
      tipo,
      descripcion: descripcion || "Sin descripción",
      marca,
      modelo,
      serie,
      departamento,
      responsable,
      ubicacion,
    });
      

    let inventario = await Inventario.create({
      ...upperCaseData,
      imagen,
      createdBy: req.user.id,
    });

    res.status(201).json({ inventario, message: "Registro creado" });
  } catch (error) {
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
    } = req.body;

    if (
      !etiqueta ||
      !numAnterior ||
      !tipo ||
      !departamento ||
      !responsable ||
      !ubicacion
    ) {
      return res.status(400).json({
        message: "Todos los campos son requeridos",
      });
    }

    // BUSCAR FUNCION PARA HACER QUE NO CUENTE LA PROPIA ETIQUETA DEL REGISTRO QUE SE QUIERE ACTUALIZAR
    const etiquetaExistente = await Inventario.findOne({ where: { etiqueta } });
    if (etiquetaExistente) {
      return res.status(400).json({
        message: "La etiqueta ya está registrada",
      });
    }

    const upperCaseData = toUpperCaseFields({
      etiqueta,
      numAnterior,
      tipo,
      descripcion: descripcion || "Sin descripción",
      marca,
      modelo,
      serie,
      departamento,
      responsable,
      ubicacion,
    });

    if (req.file) {
      upperCaseData.imagen = req.file.path.replace(/\\/g, '/');
    }

    await Inventario.update(upperCaseData, {
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

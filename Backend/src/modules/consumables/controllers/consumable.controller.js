const { Consumible, User } = require("../../index.model");
const Sequelize = require("sequelize");

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
      tipo,
      descripcion,
      marca,
      modelo,
      serie,
      responsable,
      disponible
    } = req.body;

    if (!tipo || !responsable) {
      return res.status(400).json({
        message: "Todos los campos son requeridos",
      });
    }

    if (!/^(\d+)(,\s\d+)*$/.test(serie)) {
      return res.status(400).json({ mensaje: 'El formato de las series no es válido. Asegúrate de ingresar una serie o varias series separadas por una coma y un espacio.' });
    }

    const serieList = serie.includes(',') ? serie.split(', ').map(serie => serie.trim()) : [serie.trim()];

    // Transformar todos los campos a mayúsculas
    const upperCaseData = toUpperCaseFields({
      tipo,
      descripcion: descripcion || "Sin descripción",
      marca,
      modelo,
      responsable,
    });

    // Crear los consumibles por cada serie
    const consumiblesCreados = [];
    for (const serieItem of serieList) {
      const consumible = await Consumible.create({
        ...upperCaseData,
        serie: serieItem,
        imagen,
        disponible,
        createdBy: req.user.id,
      });

      consumiblesCreados.push(consumible);
    }

    res.status(201).json(consumiblesCreados);
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
      attributes: [
        'tipo',
        'marca',
        [Sequelize.fn('COUNT', Sequelize.col('DISPONIBLE')), 'totalRegistros'],
        [Sequelize.fn('SUM', Sequelize.literal('CASE WHEN DISPONIBLE = true THEN 1 ELSE 0 END')), 'disponibles']
      ],
      group: ['tipo', 'marca']
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

    // Transformar el campo DISPONIBLE
    const registrosTransformados = registros.map(registro => {
      return {
        ...registro.toJSON(),
        DISPONIBLE: registro.DISPONIBLE ? "disponible" : "no disponible"
      };
    });

    res.json(registrosTransformados);
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
const { Inventario, User } = require("../../index.model");

const getTypes = async (req, res) => {
  try {
    const types = await Inventario.findAll({
      attributes: ['tipo'],
      group: ['tipo']
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
  const { tipo } = req.params;
  try {
    const registros = await Inventario.findAll({
      where: { tipo },
      include: [
        {
          model: User,
          as: "creatorI",
          attributes: ["nombre", "apellidop", "apellidom"],
        }
      ],
    });
    res.json(registros);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los registros por tipo",
      error: error.message,
    });
  }
};

module.exports = {
  getTypes,
  getByType
};
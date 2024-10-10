const { Inventario, User } = require("../../index.model");

const getTypes = async (req, res) => {
  try {
    const types = await Inventario.findAll({
      attributes: ['tipo', 'modelo'],
      group: ['tipo', 'modelo']
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
  const { tipo, modelo } = req.params;
  console.log(`Received request for tipo: ${tipo}, modelo: ${modelo}`);
  try {
    const decodedTipo = decodeURIComponent(tipo);
    const decodedModelo = decodeURIComponent(modelo);
    console.log(`Decoded tipo: ${decodedTipo}, Decoded modelo: ${decodedModelo}`);
    
    const registros = await Inventario.findAll({
      where: { tipo: decodedTipo, modelo: decodedModelo },
      include: [
        {
          model: User,
          as: "creatorI",
          attributes: ["nombre", "apellidop", "apellidom"],
        }
      ],
    });
    console.log(`Found registros: ${JSON.stringify(registros)}`);
    res.json(registros);
  } catch (error) {
    console.error(`Error fetching records: ${error.message}`);
    res.status(500).json({
      message: "Error al obtener los registros por tipo y modelo",
      error: error.message,
    });
  }
};

module.exports = {
  getTypes,
  getByType
};
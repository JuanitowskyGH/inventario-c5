const { User, Role } = require("../../index.model");
const bcrypt = require("bcrypt");

//CONTROLADOR PARA CREAR UN USUARIO
const create = async (req, res) => {
  const { nombre, apellidop, apellidom, username, password, roleId } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 8);

    const user = await User.create({
      nombre,
      apellidop,
      apellidom,
      username,
      roleId,
      password: hashPass,
      createdBy: req.user.id,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//CONTROLADOR PARA OBTENER TODOS LOS USUARIOS
const findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Role,
          attributes: ["name"],
        },
        {
          model: User,
          as: "creatorU",
          attributes: ["nombre", "apellidop", "apellidom"],
        }
      ],
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//CONTROLADOR PARA OBTENER UN USUARIO POR ID
const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { include: Role });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//CONTROLADOR PARA ACTUALIZAR PERMISOS A UN USUARIO
const update = async (req, res) => {
  const { id } = req.params;
  const { roleId } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Actualizar rol del usuario
    if (roleId) {
      user.roleId = roleId;
      await user.save();
    }

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//CONTROLADOR PARA ELIMINAR UN USUARIO
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};

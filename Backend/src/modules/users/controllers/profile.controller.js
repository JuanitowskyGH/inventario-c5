const { User, Role } = require("../../index.model");
const bcrypt = require("bcrypt");

// CONTROLADOR PARA OBTENER LA INFORMACIÓN DEL PERFIL DEL USUARIO
const getUserInfo = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ["nombre", "apellidop", "apellidom", "username", "imagen"],
      include: [
        {
          model: Role,
          attributes: ["name"],
        },
      ],
    });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// CONTROLADOR PARA ACTUALIZAR LA INFORMACIÓN DEL PERFIL DEL USUARIO
const updateUserInfo = async (req, res) => {
  const { nombre, apellidop, apellidom, username } = req.body;
  const imagen = req.file ? req.file.path.replace(/\\/g, '/') : null;
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await user.update({
      nombre: nombre || user.nombre,
      apellidop: apellidop || user.apellidop,
      apellidom: apellidom || user.apellidom,
      username: username || user.username,
      imagen: imagen || user.imagen,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// CONTROLADOR PARA ACTUALIZAR LA CONTRASEÑA DEL USUARIO
const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passValid = await bcrypt.compare(currentPassword, user.password);
    if (!passValid) {
      return res.status(400).json({ message: "Contraseña actual incorrecta" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 8);
    await user.update({ password: hashedPassword });

    return res.status(200).json({ message: "La contraseña se ha actualizado con exito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// CONTROLADOR PARA VERIFICAR LA CONTRASEÑA DEL USUARIO
const verifyPassword = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }
    return res.status(200).json({ valid: passValid });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserInfo, updateUserInfo, verifyPassword, updatePassword };
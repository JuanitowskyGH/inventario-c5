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
      return res.status(404).json({ message: "User not found" });
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
      return res.status(404).json({ message: "User not found" });
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
      return res.status(404).json({ message: "User not found" });
    }

    const passValid = await bcrypt.compare(currentPassword, user.password);
    if (!passValid) {
      return res.status(400).json({ message: "Invalid current password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 8);
    await user.update({ password: hashedPassword });

    return res.status(200).json({ message: "Password updated successfully" });
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
      return res.status(404).json({ message: "User not found" });
    }

    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    return res.status(200).json({ valid: passValid });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserInfo, updateUserInfo, verifyPassword, updatePassword };
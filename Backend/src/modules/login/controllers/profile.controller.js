const { User, Role } = require("../models/index.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ["nombre", "apellidop", "apellidom", "username"],
      include: [
        {
          model: Role,
          attributes: ["name"]
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

const updateUserInfo = async (req, res) => {
  const { nombre, apellidop, apellidom, username } = req.body;
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
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const verifyPassword = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passValid = await bcrypt.compare(password, user.password);
    if(!passValid) {
      return res.status(404).json({ message: 'Invalid password' });
    }
    return res.status(200).json({ valid: passValid });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getUserInfo, updateUserInfo, verifyPassword };
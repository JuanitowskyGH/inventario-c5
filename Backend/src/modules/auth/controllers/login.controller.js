const { User, Role } = require("../../index.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../../config");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username },
      include: [{ model: Role, attributes: ["name"] }],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario incorrecto" });
    }

    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return res.status(404).json({ message: "Contraseña incorrecta" });
    }

    //PARA ACCEDER AL NOMBRE DEL ROL
    const role = user.role ? user.role.name : null;
    const token = jwt.sign(
      { id: user.id, username: user.username, role },
      config.secure.jwtsecret,
      { expiresIn: "2h" }
    );

    // Establece el token en las cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: config.secure.process, // Asegúrate de que sea seguro en producción
      sameSite: "strict",
      maxAge: 2 * 60 * 60 * 1000, // 2 horas
    });

    return res.json({ message: "Usuario autenticado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Controlador de Logout
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: config.secure.process,
    sameSite: "strict",
  });
  return res.json({ message: "Logout successful" });
};

// Controlador para Obtener el Usuario Actual
const getCurrentUser = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, config.secure.jwtsecret);
    return res.json({ id: decoded.id, username: decoded.username, role: decoded.role });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { login, logout, getCurrentUser };
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
      config.development.jwtsecret,
      { expiresIn: "2h" }
    );

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };

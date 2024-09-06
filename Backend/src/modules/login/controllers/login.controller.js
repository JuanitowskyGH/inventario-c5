const { User, Role } = require('../models/index.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username },
      include: [{ model: Role, attributes: ['name'] }]
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuario incorrecto' });
    }

    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return res.status(404).json({ message: 'Contraseña incorrecta' });
    }

    // Accede al nombre del rol
    const role = user.role ? user.role.name : null;
    const token = jwt.sign({ id: user.id, username: user.username, role }, config.secret, { expiresIn: '24h' });

    return res.json({ id: user.id, username: user.username, role, token });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login };
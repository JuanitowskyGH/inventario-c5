const { User, Role } = require('../models/index.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

/*const create = async (req, res) => {
  const { nombre, apellidop, apellidom, username, password, roleName } = req.body;
  try {
    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    const hashPass = await bcrypt.hash(password, 8);
    const user = await User.create({ nombre, apellidop, apellidom, username, password: hashPass, roleId: role.id })
    return res.status(201).json(user);
  } catch (error) { 
    return res.status(500).json({ message: error.message });
  }
}

const findAll = async (req, res) => {
  try {
    const users = await User.findAll({ include: Role });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { include: Role });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidop, apellidom, username, password, roleName } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    user.nombre = nombre;
    user.apellidop = apellidop;
    user.apellidom = apellidom;
    user.username = username;
    if(password) {
      user.password = await bcrypt.hash(password, 8);
    }
    user.roleId = role.id;
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ 
      where: { username }, 
      include: [{ model: Role, attributes: ['name'] }] 
    });
    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, username: user.username, role: user.Role.name }, config.secret, { expiresIn: 120 });
    res.json({ id: user.id, username: user.username, role: user.Role.name, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
*/



//REVISAR CONTROLADOR
/*const { User, Role, UserRole } = require('../models/index.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');*/

const create = async (req, res) => {
  const { nombre, apellidop, apellidom, username, password, roleId } = req.body;
  try {
    console.log('Role ID:', roleId)
    const hashPass = await bcrypt.hash(password, 8);

    const user = await User.create({
      nombre,
      apellidop,
      apellidom,
      username,
      password: hashPass,
      roleId
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await User.findAll({ include: Role });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { include: Role });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidop, apellidom, username, password, roleIds } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.nombre = nombre;
    user.apellidop = apellidop;
    user.apellidom = apellidom;
    user.username = username;
    if (password) {
      user.password = await bcrypt.hash(password, 8);
    }
    await user.save();

    // Actualizar roles del usuario
    if (roleIds && roleIds.length > 0) {
      await user.setRoles(roleIds);
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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
    const token = jwt.sign({ id: user.id, username: user.username, role }, config.secret, { expiresIn: 60 });

    return res.json({ id: user.id, username: user.username, role, token });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { create, findAll, findOne, update, remove, login };

const db = require("../models");
const config = require("../config/auth.config.js");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const create = async (req, res) => {
  try {
    const user = await User.create({
      nombre: req.body.nombre,
      username: req.body.username,
      permisos: req.body.permisos,
      password: bcrypt.hashSync(req.body.password, 8)
    });

    if (req.body.roles) {
      const roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      });
      await user.setRoles(roles);
    } else {
      const role = await Role.findOne({
        where: {
          name: req.body.permisos
        }
      });

      if (role) {
        await user.setRoles([role]);
      } else {
        res.status(404).send({ message: "Rol no encontrado" });
        return;
      }
    }
    res.send({ message: "Usuario registrado exitosamente!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    await User.update({
      nombre: req.body.nombre,
      username: req.body.username,
      permisos: req.body.permisos,
      password: bcrypt.hashSync(req.body.password, 8)
    }, {
      where: {
        id: req.params.id
      }
    });
    res.send({ message: "Usuario actualizado exitosamente!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send({ message: "Usuario eliminado exitosamente!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (!user) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Contraseña incorrecta"
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 7200
    });
    const authorities = [];
    const roles = await user.getRoles();
    roles.forEach(role => {
      authorities.push("ROLE_" + role.name.toUpperCase());
    });
    res.status(200).send({
      id: user.id,
      username: user.username,
      roles: authorities,
      accessToken: token
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  signin
};
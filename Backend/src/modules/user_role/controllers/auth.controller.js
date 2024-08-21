const db = require("../models")
const config = require("../config/auth.config.js")
const User = db.user
const Role = db.role

const Op = db.Sequelize.Op
const jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

const create = async (req, res) => {
  User.create({
    nombre: req.body.nombre,
    apellidop: req.body.apellidop,
    apellidom: req.body.apellidom,
    username: req.body.username,
    permisos: req.body.permisos,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Usuario registrado exitosamente!" })
          })
        })
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "Usuario registrado exitosamente!" })
        })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
  }

const getAll = async (req, res) => {
  User.findAll()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

const getById = async (req, res) => {
  User.findByPk(req.params.id)
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

const update = async (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Usuario actualizado exitosamente!" })
      } else {
        res.send({ message: "No se pudo actualizar el usuario" })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

const remove = async (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Usuario eliminado exitosamente!" })
      } else {
        res.send({ message: "No se pudo eliminar el usuario" })
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

const signin = async (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" })
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña incorrecta"
        })
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 3600 // 1 hora
      })

      var authorities = []
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase())
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          roles: authorities,
          accessToken: token
        })
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  signin
}
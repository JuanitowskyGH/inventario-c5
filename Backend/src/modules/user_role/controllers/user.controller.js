const allAccess = async (req, res) => {
  res.status(200).send({
    message: "Todos los permisos"
  });
}

const userBoard = async (req, res) => {
  res.status(200).send({
    message: "Usuario"
  });
}

const adminBoard = async (req, res) => {
  res.status(200).send({
    message: "Administrador"
  });
}

const moderatorBoard = async (req, res) => {
  res.status(200).send({
    message: "Moderador"
  });
}

module.exports = {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard
};
const allAccess = async (req, res) => {
  res.status(200).send({
    message: "Todos los permisos"
  });
}

const lectorBoard = async (req, res) => {
  res.status(200).send({
    message: "Lector"
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
  lectorBoard,
  adminBoard,
  moderatorBoard
};
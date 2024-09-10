const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

//MIDDLEWARE PARA VERIFICAR SI EL USUARIO ESTÁ AUTENTICADO

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized to actions" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.substring(7)
    : authHeader;

  try {
    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

//MIDDLEWARE PARA VERIFICAR EL ROL DEL USUARIO AUTENTICADO

const authRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  };
};

module.exports = { auth, authRole };

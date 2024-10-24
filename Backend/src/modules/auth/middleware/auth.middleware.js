const jwt = require("jsonwebtoken");
const config = require("../../../config");

// MIDDLEWARE PARA VERIFICAR SI EL USUARIO ESTÁ AUTENTICADO

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.substring(7)
    : req.cookies && req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized to actions" });
  }

  try {
    const decoded = jwt.verify(token, config.secure.jwtsecret);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// MIDDLEWARE PARA VERIFICAR EL ROL DEL USUARIO AUTENTICADO

const authRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  };
};

module.exports = { auth, authRole };
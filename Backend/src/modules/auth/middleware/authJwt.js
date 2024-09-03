const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No tienes acceso a esta página"
        });
    }

    try {
        const decoded = jwt.verify(token, config.secret);
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).send({
            message: "Sin autorización"
        });
    }
};

const checkRole = (roleName) => {
    return async (req, res, next) => {
        try {
            const user = await User.findByPk(req.userId);
            const roles = await user.getRoles();
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === roleName) {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: `Require ${roleName} Role!`
            });
        } catch (err) {
            res.status(500).send({
                message: err.message
            });
        }
    };
};

const authJwt = {
    verifyToken: verifyToken,
    isLector: checkRole("Lector"),
    isAdmin: checkRole("Administrador"),
    isModerator: checkRole("Moderador")
};

module.exports = authJwt;

/*const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No tienes acceso a esta página"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Sin autorización"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

isLector = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "Lector") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Lector Role!"
            });
        });
    });
}

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "Administrador") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
}

isModerator = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].name === "Moderador") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Moderator Role!"
            });
        });
    });
}

const authJwt = {
    verifyToken: verifyToken,
    isLector: isLector,
    isAdmin: isAdmin,
    isModerator: isModerator
};

module.exports = authJwt;*/
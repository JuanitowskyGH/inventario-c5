const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/all", controller.allAccess);

    app.get("/user", [authJwt.verifyToken], controller.userBoard);

    app.get(
        "/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.get(
        "/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );
}
/*
const express = require('express')
const userController = require('../controllers/user.controller')
const { authJwt } = require('../middleware')

const router = express.Router()

router.get('/all', userController.allAccess)
router.get('/user', [authJwt.verifyToken], userController.userBoard)
router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard)
router.get('/mod', [authJwt.verifyToken, authJwt.isModerator], userController.moderatorBoard)

module.exports = router
*/
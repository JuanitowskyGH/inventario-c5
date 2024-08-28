const express = require('express');
const { authJwt } = require('../middleware/index.js');
const { allAccess, lectorBoard, adminBoard, moderatorBoard } = require('../controllers/user.controller');

const router = express.Router();

router.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
})

router.get('/all', allAccess)
router.get('/lector', [authJwt.verifyToken], lectorBoard)
router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)
router.get('/mod', [authJwt.verifyToken, authJwt.isModerator], moderatorBoard)

module.exports = router
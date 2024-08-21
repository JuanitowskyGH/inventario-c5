const express = require('express');
const { verifySignUp } = require('../middleware/index.js');
const controller = require('../controllers/auth.controller.js');

const auth = express.Router();

auth.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

auth.post('/create', 
  [
    verifySignUp.checkDuplicateUsername, 
    verifySignUp.checkRolesExisted
  ], 
controller.create);
auth.post('/signin', controller.signin);
auth.get('/getall', controller.getAll);
auth.get('/getid/:id', controller.getById);
auth.put('/update/:id', controller.update);
auth.delete('/remove/:id', controller.remove);

module.exports = auth;
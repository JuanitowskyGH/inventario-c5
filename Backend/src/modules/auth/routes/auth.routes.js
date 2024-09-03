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

auth.post('/register', 
  [
    verifySignUp.checkDuplicateUsername, 
    verifySignUp.checkRolesExisted
  ], 
controller.create);
auth.post('/login', controller.login);
auth.get('/user', controller.getAll);
auth.get('/user/:id', controller.getById);
auth.put('/user/:id', controller.update);
auth.delete('/user/:id', controller.remove);

module.exports = auth;
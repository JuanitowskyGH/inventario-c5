const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config.js');
const db = require('../src/database/database.js');

const inventario = require('./modules/registers/router.js');
const usuarios = require('./modules/users/router.js')

const auth = require('./modules/auth/routes/auth.routes.js');
const user = require('./modules/auth/routes/user.routes.js');

//MIDDLEWARE
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

//RUTAS
app.use('/api', inventario);
app.use('/api', usuarios);
app.use('/api/auth', auth);
app.use('/api/user', user);

const role = require("./modules/auth/models");
role.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Hello World');
})

//PUERTO
try{
    db.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error){
    console.error('Unable to connect to the database:', error);
}

app.listen(config.app.port, () => {
    console.log(`Server running on port ${config.app.port}`);
})
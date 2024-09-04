const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config.js');
const db = require('../src/database/database.js');

const inventario = require('./modules/registers/router.js');
const usuarios = require('./modules/users/router.js')
//const auth = require('./modules/auth/routes/auth.routes.js');
// const user = require('./modules/auth/routes/user.routes.js');
// const create = require('./modules/auth/models/create.js');

const userRoutes = require('./modules/login/routes/user.routes');
const authRoutes = require('./modules/login/routes/auth.routes');
const protectedRoutes = require('./modules/login/routes/protected.routes');
const { auth } = require('./modules/login/middleware/auth.middleware');
const { Sequelize } = require('sequelize');
const Role = require('./modules/login/models/role.model.js');

//MIDDLEWARE
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

//RUTAS
app.use('/api', inventario);
// app.use('/api', usuarios);
// app.use('/api/auth', auth);
// app.use('/api/user', user);

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', auth, protectedRoutes);

// db.sync({ force: true }).then(() => {
//     console.log('Tablas creadas');

//     initial()

//     app.listen(config.app.port, () => {
//         console.log(`Server running on port ${config.app.port}`);
//     })
// });
// create.create1;
// create.create2;
// create.create3;
// create.create4;

// const role = require("./modules/auth/models");
// const Roles = role.role;
// role.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     initial();
// });

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



// async function initial() {
//     await Roles.findOrCreate({
//         where: { id: 1 },
//         defaults: { name: "Lector" }
//     });
//     await Roles.findOrCreate({
//         where: { id: 2 },
//         defaults: { name: "Moderador" }
//     });
//     await Roles.findOrCreate({
//         where: { id: 3 },
//         defaults: { name: "Administrador" }
//     });
// }
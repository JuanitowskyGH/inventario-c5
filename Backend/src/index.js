const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config.js");
const db = require("../src/database/database.js");

//RUTAS DE LOS MODULOS
const registers = require("./modules/registers/routes/register.routes.js");
const public = require("./modules/auth/routes/public.routes.js");
const users = require("./modules/users/routes/user.routes.js");
const profile = require("./modules/users/routes/profile.routes.js");
const { auth } = require("./modules/auth/middleware/auth.middleware.js");

//MIDDLEWARE
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

//RUTAS
app.use("/api/login", public);
app.use("/api", auth, profile);
app.use("/api", auth, users);
app.use("/api", auth, registers);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//PUERTO
try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const config = require("./config.js");
const db = require("../src/database/database.js");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// RUTAS DE LOS MODULOS
const registers = require("./modules/registers/routes/register.routes.js");
const public = require("./modules/auth/routes/public.routes.js");
const users = require("./modules/users/routes/user.routes.js");
const profile = require("./modules/users/routes/profile.routes.js");
const consumable = require("./modules/consumables/routes/consumable.routes.js");
const loan = require("./modules/consumables/routes/loan.routes.js");
const { auth } = require("./modules/auth/middleware/auth.middleware.js");

// MIDDLEWARE
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(helmet({
  crossOriginEmbedderPolicy: { policy: "require-corp" },
  crossOriginOpenerPolicy: { policy: "same-origin" },
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:', 'http:', 'http://localhost:4000/'],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'", 'http://localhost:4000/'],
      fontSrc: ["'self'", 'https:', 'http:'],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'", 'http://localhost:4000/'],
      frameSrc: ["'self'"]
    }
  }
}));

//RUTAS
app.use("/api/auth", public);
app.use("/api", auth, profile);
app.use("/api", auth, users);
app.use("/api", auth, registers);
app.use("/api", auth, consumable);
app.use("/api", auth, loan);

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
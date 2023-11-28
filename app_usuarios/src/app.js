const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const config = require("./config/config");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "back-session",
    secret: config.SECRET, // should use as secret environment variable
    httpOnly: false,
  })
);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.get("/", (req, res) => {
    res.json({ message: "Servicio de usuarios." });
})

module.exports = app;
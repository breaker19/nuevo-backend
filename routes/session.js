const express = require("express");
const { Router } = express;
const session = require("express-session");
const rutas = Router();
const path = require("path");
const app = express();

app.set("views", path.join(path.dirname(""), "./views"));

rutas.route("/");

rutas.get("/login", (req, res) => {
  res.render("login");

});


rutas.post("/login", (req, res) => {
  const registro = {
    username: req.body.username,
    password: req.body.password,
  };
  res.send(`Bienvenido: ${registro.username}`);
  console.log(registro.username);
});

module.exports = rutas;

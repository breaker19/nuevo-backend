const express = require("express");
const app = express();
const { options } = require("../options/mariaDB");
const knex = require("knex")(options);


app.get("/data", (req, res) => {

  knex
    .from("messages")
    .select("*")
    .orderBy("price", "desc")
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  // SELECT * FROM cars
  knex
    .from("messages")
    .select("*")
    .orderBy("price", "desc")
    .then((rows) => {
      res.send(rows);
      console.log(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

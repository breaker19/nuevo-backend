const express = require("express");
const { Router } = express;
const session = require("express-session");
const rutas = Router();
const path = require("path");
const app = express();
const twilio = require('twilio');

const accountSid = 'xxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)
app.set("views", path.join(path.dirname(""), "./views"));

rutas.route("/");

rutas.get("/login", (req, res) => {
  res.render("login");

});


rutas.post("/login", (req, res, next) => {
  const registro = {
    username: req.body.username,
    password: req.body.password,
  };

  res.send(`Bienvenido: ${registro.username}`);
  console.log(registro.username);

  try {
    //async
    if(registro){
   const message =  client.messages.create({
   
      body: `Bienvenido: ${registro.username}`,
      from: '+19377447141',
      to: '+541133398915',
     

     
   })}
    else{
        console.log('No se envio el mensaje');
    }
   
} catch (error) {
   console.log(error)
}
});



module.exports = rutas;

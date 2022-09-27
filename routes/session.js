const express = require("express");
const { Router } = express;
const session = require("express-session");
const rutas = Router();
const path = require("path");
const app = express();
const twilio = require('twilio');

const accountSid = 'ACaff6db7044ba385a30a0925eba462274'
const authToken = '817ffc5ff4611f791cec0885a9027143'

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

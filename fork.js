const express = require("express");
const { fork } = require("child_process");
const app = express();

let visitas = 0;
app.get("/", function (req, res) {
  visitas++;
  res.json({ visitas });
});

app.get("/calculo-bloq", function (req, res) {
  const suma = sumar();
  res.send(`La suma es de ${suma}`);
});

app.get("/calculo-nobloq", function (req, res) {
  const child = fork("./sumar.js");
  child.send("start");
  child.on("message", (suma) => {
    res.send(`La suma es de ${suma}`);
  });
});

function sumar() {
  let num1 = Math.floor(Math.random() * 1000000);
  console.log(`Suma de ${num1} `);
  return num1;
}
sumar()




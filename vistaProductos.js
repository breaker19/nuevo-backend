const productosVisibles = require("./productos.json")
const express = require("express");
const { Router } = express;
const router = Router();
const app = express();

for(i=0; i<productosVisibles.length; i++){
    productosVisibles[i].id = i+1;
}
app.get("/productosVisibles", (req, res) => {
    res.send(productosVisibles);
})



const Productos = require('../productos.json');
const express = require("express");
const { Router } = express;
const router = Router();
 


const session = require("express-session");

router
.route( '/productos')



router.get("/productos/", (req , res) => {res.send(Productos);})

router.get("/productos/:id", (req , res) => {
try {
    const producto = Productos.find(producto => producto.id == req.params.id);
    res.render("producto", { producto });}
catch(error) {res.status(404).send("Producto no encontrado");}})



.post( (req, res) => {
let id = req.params.id - 1;
try {
    const baseProductos = JSON.parse(req.body)
    Productos.push(baseProductos);
    res.send(Productos);}
catch (error) {res.send(error);}
})

router.delete("/productos/:id", (req, res) => {
    const id = req.params.id;
    const productos = Productos.splice(0, Productos.length);
    const producto = productos.find(producto => producto.id == id);
    const index = productos.indexOf(producto);
    productos.splice(index, 1);

    res.send(productos);})

router.post("/productos/", (req, res) => {
    const producto = req.body;
    Productos.push(producto);
    res.send(Productos);})

    router.post('/productos/:id', (req, res) => {
        const id = req.params.id;
        const producto = Productos.find(producto => producto.id == id);
        if (producto) {
            res.send(producto); }})


// router.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('ups, algo salió mal');
//     next(err);

// }
// )

//update producto
router.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = Productos.find(producto => producto.id == id);
    if (producto) {
        producto.name = "producto renombrado";
        producto.price = 200;
        producto.description = "descripcion nueva";
        producto.image = req.body.image;
        res.send(producto);

    }
}
)



  router.get("/cart/", (req, res) => {
    res.render("cart", { productos: Productos });})
  
    router.get("/cart/:id", (req, res) => {
        const id = req.params.id;
        const producto = Productos.find(producto => producto.id == id);
        res.send( { producto });
    }
    )

router.post("/cart/:id", (req, res) => {
  const id = req.params.id;
  const producto = Productos.find(producto => producto.id == id);
  if (producto) {
      res.send(producto);
  }
  else {
      res.send("No se encontró el producto");
  }})
module.exports = router;
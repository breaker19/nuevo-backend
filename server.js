const express = require("express");
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const router = require("./routes/routes.js");
const rutas = require("./routes/session.js");
const { options } = require("./options/mariaDB");
// const knex = require("knex")(options);
// const Productos = require('./controllers/index.js');
// const jsonProductos = require('./productos.json');
// const datos = new Productos();
// const {createTable} = require('./Tables/createTable.js');
// const {selectCards} = require('./Tables/selectCards.js');
// const {insertCards} = require('./Tables/insertCards.js');
const pruebaLogin = require('./login.js');
const twilio = require('./twilio.js');
// const CRUD = require('./firebase.js');
const cartSchema = require('./cart.js');
const { log } = require("console");
const  passport  = require("passport");
const   loginRouter  = require("./login.js");
require ("./middlewares/google.js");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use("/", rutas);
app.use("/api", router);
try {
  cartSchema
  console.log('Cart Schema creado');
} catch (error) {
  console.log(error);
  
}
try {pruebaLogin;}
catch (error) {console.log(error);}
try {twilio;}
catch (error) {console.log(error);}

// try {
//   createTable();
//   insertCards();
//   selectCards();
// }
// catch (error) {
//   console.log(error);
// }



const messages = [];

io.on('connection',socket => {
  console.log('Un cliente se ha conectado');
  socket.emit( 'messages', messages );
  socket.on('new-message',(data) => {
    messages.push(data);
      io.sockets.emit('messages', messages);
      console.log(data);
  });
});

// CRUD.createProducto();

app.use("/auth", passport.authenticate("auth-google", {
    
  scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",

  ],
  session: false
  
}))

app.use("/auth", loginRouter);

// try{
//   rutas()
// console.log('Session creada');
// }
// catch (error) {
//   console.log(error);
// }


// app.get("/productos", (req, res) => {
//   path.join(__dirname, './productos.json')

//   res.render("inicio", { productos: jsonProductos });

//   console.log(jsonProductos);
// });

// app.post('/productos', (req, res) => {
//   const producto = {
//     producto: req.body.producto,
//     precio: req.body.precio,
//     info: req.body.info,
//   };
//   datos.addProduct(producto);
//   res.redirect('/productos');
// }
// );
  // app.get("/api/productos", (req, res) => {
  //   if (req.session.admin) {
  //     res.send(Productos);
  //   } else {
  //     res.send("No tienes permiso para ver esta información");
  //     console.log(session.admin);
  //   }
  // }
  // )
  httpServer.listen(3001, function () {console.log("Servidor corriendo en http://localhost:3000");});



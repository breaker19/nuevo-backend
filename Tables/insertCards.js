const { options } = require ("../options/mariaDB");
const knex = require("knex")(options);
const jsonProductos = require('../productos.json');
knex("productosEcommerce")
  .insert(jsonProductos)
  
  .then(() => {
    console.log("los datos se han insertado");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
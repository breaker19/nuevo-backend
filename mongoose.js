const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Productos = require('./controllers/index.js');
CRUD()
async function CRUD (){
    try {
        mongoose.connect('mongodb://localhost:27017/eccommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    console.log('Conectado a MongoDB');
    //create
    const productoNuevo = {
        nombre: 'Celular',
        precio: '$1.000.000',
        info: 'Celular de google',
        image: 'http://www.google.com'
    }
    const producto = new Productos(productoNuevo);
    await producto.save();

    console.log('Producto guardado');
    //read
    const productos = await Producto.find();
    console.log(productos);
    //update
    const productoActualizado = {
        nombre: 'Celular',
        precio: '$1.000.000',
        info: 'Celular de google',
        image: 'http://www.google.com'
    }
    } catch (error) {
        console.log(error);
    }
}

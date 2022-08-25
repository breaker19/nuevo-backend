const fs = require('fs');
const datos = JSON.parse(fs.readFileSync("./productos.json", 'utf-8'));
const path = require('path');
 class Productos

{
    constructor()
{
    this.name = Productos.name;
    this.price = Productos.price;
}

   async  getAll()
{
 try {
    const all = JSON.parse(
        await fs.promises.readFile( `./${ this.name, this.price, this.description }.json` )
    )
    return all
} catch ( err ) {
    console.log( err )
}
}



async addProduct (id)
{
//add product when de form in datos.ejs is submitted
    try {
        const producto = JSON.parse(
            await fs.promises.readFile( `./${ this.name, this.price, this.description }.json` )
        )
        producto.push(id);
        await fs.promises.writeFile( `./${ this.name, this.price, this.description }.json`, JSON.stringify( producto ) )
    }
    catch ( err ) {
        console.log( err )
    }
    
}


getRandom ()
{
    const random = Math.floor(Math.random() * datos.length);
    return datos[random];
}

}
module.exports = Productos;






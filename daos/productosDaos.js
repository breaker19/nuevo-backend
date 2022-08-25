class ProductDAO
{
    constructor(id, nombre, precio, info, image)
    {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.info = info;
        this.image = image;
    }
    getAll()
    {
        return [this.id, this.nombre, this.precio, this.info, this.image];
    }

    getId()
    {
        return this.id;
    }
    getNombre()
    {
        return this.nombre;
    }
    getPrecio()
    {
        return this.precio;
    }
    getInfo()
    {
        return this.info;
    }
    getImage()
    {
        return this.image;
    }

}
module.exports = ProductDAO;
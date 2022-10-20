const ProductDAO = require('./productosDaos');

class productosDaoArchivo extends ProductDAO {
    constructor() {
        super();
        }
    async getAll() {
        return await super.getAll();
    }
}


    module.exports = productosDaoArchivo;
    
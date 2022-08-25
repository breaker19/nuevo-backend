const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    productos: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: 'Producto'
        },
        cantidad: Number
    }],
    total: Number
} 
, {
    timestamps: true
}
);
//create cart model
const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;  

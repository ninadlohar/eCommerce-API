const mongoose = require("mongoose")
const Schema = mongoose.Schema
const productModel = require('../models/productModel');
let CartSchema = new Schema({
    cartId: {
        type: String
    },
    products: [],
    id: String
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart
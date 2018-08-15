const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductModel = new Schema({
    productId: {
        type: String,
        unique: true,
        required: true
    },
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    productViews: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ''
    },
    manufacturer: {
        type: String,
        default: ''
    },
    tags: [String],
    price: {
        type: Number,
        min: 0
    },
    seller: {
        type: String,
        default: '',
    }
})

var Product = mongoose.model('Product', ProductModel);

module.exports = Product
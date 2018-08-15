const response = require('../libs/resposneLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')
const shortId = require('shortid');
const CartModel = require('./../models/cartModel');
const ProductModel = require('./../models/productModel');

let addToCart = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        console.log('Product ID is required')
        let apiResponse = response.generate(true, 'productId is missing', 403, null);
        res.send(apiResponse)
    } else {
        ProductModel.findOne({
            'productId': req.params.productId
        }, (err, result) => {
            if (err) {
                logger.error(err.message, 'Product cannot be fetched from database', 10);
                let apiResponse = response.generate(true, 'Product cannot be fetched from database', 500, null);
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Product Not Found in database', 404, null);
                res.send(apiResponse)
            } else {
                CartModel.findOne({
                    productsIds: req.params.productId
                }, (err, r) => {
                    if (err) {
                        logger.error(err.message, 'Cart cannot be saved', 10);
                        let apiResponse = response.generate(true, 'Cart cannot be saved', 500, null);
                        res.send(apiResponse)
                    } else if (r == null || r == undefined) {
                        cart = new CartModel({
                            productsIds: req.params.productId
                        })
                        cart.save((er, re) => {
                            if (er) {
                                logger.error(er.message, 'Cart cannot be saved', 10)
                                let apiResponse = response.generate(true, 'Cannot be saved in cart', 500, null);
                                res.send(apiResponse)
                            } else {
                                let apiResponse = response.generate(false, 'Added in the cart successfully', 200, re);
                                res.send(apiResponse)
                            }
                        })
                    } else {
                        logger.error('cannot be saved in cart', 'Cart cannot be saved', 5);
                        let apiResponse = response.generate(true, 'Product already in cart', 500, null);
                        res.send(apiResponse);
                    }
                })
            }
        })
    }
}

let viewCart = (req, res) => {
    CartModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'in cart controller: viewCart()', 10);
                let apiResponse = response.generate(true, 'failed to retrive cart details', 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.error('no items found in cart', 'in cart controller: viewCart()', 5);
                let apiResponse = response.generate(true, 'no items found in cart', 404, null);
                res.send(apiResponse);
            } else {
                let apiResponse = response.generate(false, 'successfully items displayed in cart', 200, result);
                res.send(apiResponse);
            }
        })
}

let deleteFromCart = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        let apiResponse = response.generate(true, 'productId is required', 403, null)
        res.send(apiResponse)
    } else {
        CartModel.remove({
            'cartId': req.params.productId
        }, (err, result) => {
            if (err) {
                logger.error(err.message, 'error deleting cart', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Product Removed Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

module.exports = {
    addToCart: addToCart,
    viewCart: viewCart,
    deleteFromCart: deleteFromCart
}
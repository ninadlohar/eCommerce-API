const shortid = require('shortid');
const ProductModel = require('./../models/productModel');
const response = require('../libs/resposneLib');
const check = require('../libs/checkLib');
const logger = require('../libs/loggerLib');

let getAllProducts = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'product controller: getAllProducts()', 10);
                let apiResponse = response.generate(true, 'error retriving products from database', 500, null);
                res.send(apiResponse);
            } else if (check.isEmpty(result)) {
                logger.info('no products found', 'product controller: getAllProducts()', 5);
                let apiResponse = response.generate(true, 'no products found in database', 404, null);
                res.send(apiResponse);
            } else {
                logger.info('all products found', 'product controller: getAllProducts()', 0);
                let apiResponse = response.generate(true, 'all products retrived', 200, result);
                res.send(apiResponse);
            }
        })
}

let createProduct = (req, res) => {
    // if (check.isEmpty(req.body.productName) || check.isEmpty(req.body.category) ||
    //     check.isEmpty(req.body.description) || check.isEmpty(req.body.manufacturer) ||
    //     check.isEmpty(req.body.price) || check.isEmpty(req.params.seller)) {
    //     let apiResponse = response.generate(true, 'required data are missing', 403, null);
    //     res.send(apiResponse);
    // }
    productId = shortid.generate();
    let newProduct = new ProductModel({
        productId: productId,
        productName: req.body.productName,
        description: req.body.description,
        category: req.body.category,
        manufacturer: req.body.manufacturer.toLowerCase(),
        price: req.body.price,
        seller: req.body.seller,
    });

    let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : [];
    newProduct.tags = tags;

    newProduct.save((err, result) => {
        if (err) {
            logger.error('error occured while creating product', 'error occured while creating product', 10);
            let apiResponse = response.generate(true, 'failed to create product', 500, null);
            res.send(apiResponse);
        } else {
            let apiResponse = response.generate(false, 'sucessfully created product', 200, result);
            res.send(apiResponse);
        }
    });
}

let viewProduct = (req, res) => {
    ProductModel.findOne({
        productId: req.params.productId
    }, (err, result) => {
        if (err) {
            logger.error(err.message, 'product controller: viewProduct()', 10);
            let apiResponse = response.generate(true, 'error retriving queried product from database', 500, null);
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            logger.info('no products found', 'product controller: viewProduct()', 5);
            let apiResponse = response.generate(true, 'no products with queried ID found in database', 404, null);
            res.send(apiResponse);
        } else {
            result.productViews += 1;
            result.save(function (err, result) {
                if (err) {
                    res.send(err.message);
                } else {
                    let apiResponse = response.generate(false, 'sucessfully product viewed', 200, result)
                    res.send(apiResponse);
                }
            });
        }
    })
}

let editProduct = (req, res) => {
    if (!req.params.productId) {
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {
        let wholeBody = req.body;
        ProductModel.update({
            productId: req.params.productId
        }, wholeBody, {
            multi: true
        }).exec((err, result) => {
            if (err) {
                logger.error(err.message, 'error occured while fetching data', 10);
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let deleteProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {
        let apiResponse = response.generate(true, 'product id is required', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.remove({
            productId: req.params.productId
        }, (err, result) => {
            if (err) {
                logger.error(err.message, 'cannot retrieve from database', 10)
                let apiResponse = response.generate(true, 'cannot retrieve from database.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Product Not Found in database.', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let productsByManufacturer = (req, res) => {
    ProductModel.find({
        manufacturer: req.params.manufacturer
    }, (err, result) => {
        if (err) {
            logger.error(err.message, 'product controller: productsByManufacturer()', 10);
            let apiResponse = response.generate(true, 'error retriving queried results from database', 500, null);
            res.send(apiResponse);
        } else if (req.params.productId === result.productId) {
            logger.info('no products found', 'product controller: productsByManufacturer()', 5);
            let apiResponse = response.generate(true, 'no products with queried by manufacturer found in database', 404, null);
            res.send(apiResponse);
        } else {
            logger.info('queried product found and deleted', 'product controller: productsByManufacturer()', 0);
            let apiResponse = response.generate(false, 'queried product retrieved by manufacturer', 200, result);
            res.send(apiResponse);
        }
    })
}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    viewProduct: viewProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    productsByManufacturer: productsByManufacturer
}
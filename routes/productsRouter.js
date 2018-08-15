const appConfig = require('../config/appConfig');
const productsController = require('../controllers/productsController');
const auth = require('../middlewares/auth');

let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/eCommerce';

	app.get(baseUrl + '/all', productsController.getAllProducts);
	/**
	 * @api {get} /api/v1/eCommerce/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken is not required.
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product Details Found",
	    "status": 200,
	    "data": [
					{
                        "description": "string",
                        "productViews": number,
                        "category": "string",
                        "manufacturer": "string",
                        "tags": object(type = array),
                        "seller": "string",
                        "review": object(type = array),
                        "productId": "string",
                        "productName": "string",
                        "price": number
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "error retriving products from database",
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl + '/create', auth.isAuthenticated, productsController.createProduct);
	/**
	 * @api {get} /api/v1/eCommerce/create create a new product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken is required(In order for admin to create a new data for product).
	 * @apiParam {String} productName: product name is passed as body parameter
	 * @apiParam {String} description: description of the product passed as a body parameter
	 * @apiParam {String} price: price of the product passed as a body parameter
	 * @apiParam {String} seller: seller of the product passed as a body parameter
	 * @apiParam {String} manufacturer: manufacturer of the product passed as a body parameter	

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "sucessfully created product",
	    "status": 200,
	    "data": [
					{
                        "description": "string",
                        "productViews": number,
                        "category": "string",
                        "manufacturer": "string",
                        "tags": object(type = array),
                        "seller": "string",
                        "_id": "string",
                        "productId": "string",
                        "productName": "string",
                        "price": number,
                        "__v": 0
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": "failed to create product",
        "status": 403,
        "data": null
	   }
	 */

	app.get(baseUrl + '/view/:productId', productsController.viewProduct);
	/**
	 * @api {get} /api/v1/eCommerce/:productId/view create a new product
	 * @apiVersion 0.0.1
	 * @apiGroup view by id
	 *
	 * @apiParam {String} authToken is not required.
	 * @apiParam {String} productId: product Id is passed as body parameter

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "sucessfully product viewed",
	    "status": 200,
	    "data": [
					{
                        "description": "string",
                        "productViews": number,
                        "category": "string",
                        "manufacturer": "string",
                        "tags": object(type = array),
                        "seller": "string",
                        "_id": "string",
                        "productId": "string",
                        "productName": "string",
                        "price": number,
                        "__v": 0
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": "no products with queried ID found in database,
        "status": 404,
        "data": null
	   }
	 */

	app.put(baseUrl + '/edit/:productId', auth.isAuthenticated, productsController.editProduct);
	/**
	 * @api {get} /api/v1/eCommerce/:productId/edit editing a existing product
	 * @apiVersion 0.0.1
	 * @apiGroup edit by id
	 *
	 * @apiParam {String} authToken is required(for admin to edit the product).
	 * @apiParam {String} productId: product Id is passed as body parameter

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "queried product retrieved and successfully edited",
	    "status": 200,
        "data": {
            "n": 1,
            "nModified": 1,
            "ok": 1
                }
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": "no products with queried ID found in database,
        "status": 404,
        "data": null
	   }
	 */

	app.post(baseUrl + '/delete/:productId', auth.isAuthenticated, productsController.deleteProduct);
	/**
	 * @api {get} /api/v1/eCommerce/:productId/delete deleting a existing product
	 * @apiVersion 0.0.1
	 * @apiGroup delete by id
	 *
	 * @apiParam {String} authToken is required(for admin to delete the product).
	 * @apiParam {String} productId: product Id is passed as body parameter

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "queried product retrieved and successfully deleted",
	    "status": 200,
        "data": {
            "n": 1,
            "nModified": 1,
            "ok": 1
                }
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": "no products with queried ID found in database,
        "status": 404,
        "data": null
	   }
	 */

	app.get(baseUrl + '/productsBy/:manufacturer', productsController.productsByManufacturer);
	/**
	 * @api {get} /api/v1/eCommerce/productsBy/:manufacturer finding products by manufacturer
	 * @apiVersion 0.0.1
	 * @apiGroup find by id
	 * @apiParam {String} manufacturer: manufacturer is passed as body parameter

	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "queried product retrieved by manufacturer",
	    "status": 200,
        "data": [
                    {
                        "description": "string",
                        "productViews": number,
                        "category": "string",
                        "manufacturer": "string",
                        "tags": object(type = array),
                        "seller": "string",
                        "_id": "string",
                        "review": object(type = array),
                        "productId": "string",
                        "productName": "string",
                        "price": number,
                        "__v": 0
                    }
                ]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
        "error": true,
        "message": "no products with queried ID found in database,
        "status": 404,
        "data": null
	   }
	 */
}

module.exports = {
	setRouter: setRouter
}
const auth = require('../middlewares/auth');
const cartController = require('../controllers/cartController');
const appConfig = require('../config/appConfig');

let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/cart';

	app.get(baseUrl + '/:productId/addToCart', auth.isAuthenticated, cartController.addToCart);

	/**
	 * @api {get} /api/v1/cart/:productId/addToCart to add to cart
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Products in the cart",
        "status": 200,
        "data": {
			"products": [
				"asdas"
			],
				"_id": "5b743daaaf6195112c8d8d64",
				"id": "_Ok_weUFg",
				"__v": 0
   			}
        }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no product found with associated ID",
	    "status": 500,
	    "data": null
	   }
	 */
	app.get(baseUrl + '/:cartId', auth.isAuthenticated, cartController.viewCart);
	/**
	 * @api {get} /api/v1/:cartId/ to add to cart
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Products in the cart",
        "status": 200,
        "data": {
          "products": [
                "iphone 6s"
            	],
            "id": "N80Ayg6ir"
        }
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no items found in cart",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/:productId/delete', auth.isAuthenticated, cartController.deleteFromCart);
	/**
	 * @api {get} /api/v1/:productId/delete, delete item from current cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "successfully deleted items from in cart",
			"status": 200,
			"data": {
				"products": [
					"asdas"
				],
				"_id": "5b7432e5559c6717a459afc3",
				"id": "_Ok_weUFg",
				"__v": 0
			}
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "no items associated with required ID is found in cart",
	    "status": 404,
	    "data": null
	   }
	 */
}

module.exports = {
	setRouter: setRouter
}
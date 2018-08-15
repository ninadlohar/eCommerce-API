define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/eCommerce/create",
    "title": "create a new product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>is required(In order for admin to create a new data for product).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName:",
            "description": "<p>product name is passed as body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description:",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price:",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "seller:",
            "description": "<p>seller of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer:",
            "description": "<p>manufacturer of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"sucessfully created product\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        \"description\": \"string\",\n                        \"productViews\": number,\n                        \"category\": \"string\",\n                        \"manufacturer\": \"string\",\n                        \"tags\": object(type = array),\n                        \"seller\": \"string\",\n                        \"_id\": \"string\",\n                        \"productId\": \"string\",\n                        \"productName\": \"string\",\n                        \"price\": number,\n                        \"__v\": 0\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"failed to create product\",\n        \"status\": 403,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "create",
    "name": "GetApiV1EcommerceCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/delete,",
    "title": "delete item from current cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"successfully deleted items from in cart\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": {\n\t\t\t\t\"products\": [\n\t\t\t\t\t\"asdas\"\n\t\t\t\t],\n\t\t\t\t\"_id\": \"5b7432e5559c6717a459afc3\",\n\t\t\t\t\"id\": \"_Ok_weUFg\",\n\t\t\t\t\"__v\": 0\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no items associated with required ID is found in cart\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRouter.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productId/delete",
    "title": "deleting a existing product",
    "version": "0.0.1",
    "group": "delete_by_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>is required(for admin to delete the product).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId:",
            "description": "<p>product Id is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"queried product retrieved and successfully deleted\",\n\t    \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n                }\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"no products with queried ID found in database,\n        \"status\": 404,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "delete_by_id",
    "name": "GetApiV1EcommerceProductidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productId/edit",
    "title": "editing a existing product",
    "version": "0.0.1",
    "group": "edit_by_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>is required(for admin to edit the product).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId:",
            "description": "<p>product Id is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"queried product retrieved and successfully edited\",\n\t    \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n                }\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"no products with queried ID found in database,\n        \"status\": 404,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "edit_by_id",
    "name": "GetApiV1EcommerceProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/productsBy/:manufacturer",
    "title": "finding products by manufacturer",
    "version": "0.0.1",
    "group": "find_by_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer:",
            "description": "<p>manufacturer is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"queried product retrieved by manufacturer\",\n\t    \"status\": 200,\n        \"data\": [\n                    {\n                        \"description\": \"string\",\n                        \"productViews\": number,\n                        \"category\": \"string\",\n                        \"manufacturer\": \"string\",\n                        \"tags\": object(type = array),\n                        \"seller\": \"string\",\n                        \"_id\": \"string\",\n                        \"review\": object(type = array),\n                        \"productId\": \"string\",\n                        \"productName\": \"string\",\n                        \"price\": number,\n                        \"__v\": 0\n                    }\n                ]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"no products with queried ID found in database,\n        \"status\": 404,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "find_by_id",
    "name": "GetApiV1EcommerceProductsbyManufacturer"
  },
  {
    "type": "get",
    "url": "/api/v1/:cartId/",
    "title": "to add to cart",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Products in the cart\",\n        \"status\": 200,\n        \"data\": {\n          \"products\": [\n                \"iphone 6s\"\n            \t],\n            \"id\": \"N80Ayg6ir\"\n        }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no items found in cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRouter.js",
    "groupTitle": "get",
    "name": "GetApiV1Cartid"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:productId/addToCart",
    "title": "to add to cart",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Products in the cart\",\n        \"status\": 200,\n        \"data\": {\n\t\t\t\"products\": [\n\t\t\t\t\"asdas\"\n\t\t\t],\n\t\t\t\t\"_id\": \"5b743daaaf6195112c8d8d64\",\n\t\t\t\t\"id\": \"_Ok_weUFg\",\n\t\t\t\t\"__v\": 0\n   \t\t\t}\n        }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"no product found with associated ID\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cartRouter.js",
    "groupTitle": "post",
    "name": "PostApiV1CartProductidAddtocart"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>is not required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        \"description\": \"string\",\n                        \"productViews\": number,\n                        \"category\": \"string\",\n                        \"manufacturer\": \"string\",\n                        \"tags\": object(type = array),\n                        \"seller\": \"string\",\n                        \"review\": object(type = array),\n                        \"productId\": \"string\",\n                        \"productName\": \"string\",\n                        \"price\": number\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error retriving products from database\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "read",
    "name": "GetApiV1EcommerceAll"
  },
  {
    "type": "get",
    "url": "/api/v1/eCommerce/:productId/view",
    "title": "create a new product",
    "version": "0.0.1",
    "group": "view_by_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>is not required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId:",
            "description": "<p>product Id is passed as body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"sucessfully product viewed\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n                        \"description\": \"string\",\n                        \"productViews\": number,\n                        \"category\": \"string\",\n                        \"manufacturer\": \"string\",\n                        \"tags\": object(type = array),\n                        \"seller\": \"string\",\n                        \"_id\": \"string\",\n                        \"productId\": \"string\",\n                        \"productName\": \"string\",\n                        \"price\": number,\n                        \"__v\": 0\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"no products with queried ID found in database,\n        \"status\": 404,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/productsRouter.js",
    "groupTitle": "view_by_id",
    "name": "GetApiV1EcommerceProductidView"
  }
] });

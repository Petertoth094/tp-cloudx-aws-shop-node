// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "product-service",
    "version": "1"
  },
  "paths": {
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get./products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Successful response",
            "schema": {
              "$ref": "#/definitions/ProductList"
            }
          },
          "500": {
            "description": "Something went wrong",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "post": {
        "summary": "createProduct",
        "description": "",
        "operationId": "createProduct.post./products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/CreateProduct"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "schema": {
              "$ref": "#/definitions/Product"
            }
          },
          "400": {
            "description": "Product data is invalid",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          },
          "500": {
            "description": "Something went wrong",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/products/{productId}": {
      "get": {
        "summary": "getProductById",
        "description": "",
        "operationId": "getProductById.get./products/{productId}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "schema": {
              "$ref": "#/definitions/Product"
            }
          },
          "404": {
            "description": "Product not found",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          },
          "500": {
            "description": "Something went wrong",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "CreateProductProps": {
      "title": "CreateProductProps"
    },
    "BasicProduct": {
      "title": "BasicProduct"
    },
    "Stock": {
      "title": "Stock"
    },
    "ProductsStocks": {
      "title": "ProductsStocks"
    },
    "Product": {
      "additionalProperties": false,
      "title": "Product",
      "type": "object"
    },
    "ProductList": {
      "additionalProperties": false,
      "title": "ProductList",
      "type": "object"
    },
    "ErrorResponse": {
      "properties": {
        "message": {
          "title": "ErrorResponse.message",
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ErrorResponse",
      "type": "object"
    }
  },
  "securityDefinitions": {}
};
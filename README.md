# cloud-development-aws-js-course node-app

## Endpoints

---

FE Repo: https://github.com/Petertoth094/tp-cloudx-aws-shop-fe

---

Get getProductList: https://tnqd798sj0.execute-api.eu-west-1.amazonaws.com/products

---

Get getProductById: https://tnqd798sj0.execute-api.eu-west-1.amazonaws.com/products/{productId}

---

POST createProduct - https://tnqd798sj0.execute-api.eu-west-1.amazonaws.com/products

---

Swagger documentation: https://tnqd798sj0.execute-api.eu-west-1.amazonaws.com/swagger

---

Swagger schema: https://tnqd798sj0.execute-api.eu-west-1.amazonaws.com/swagger.json

---

Additional (optional) tasks:

- POST /products lambda functions returns error 400 status code if product data is invalid - Done
- All lambdas return error 500 status code on any error (DB connection, any unhandled error in code) - Done
- All lambdas do console.log for each incoming requests and their arguments - Done
- Use RDS instance instead fo DynamoDB tables. Do not commit your environment variables in serverless.yml to github! - Not implemented
- Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa) - Done

---

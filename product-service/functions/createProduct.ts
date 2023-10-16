import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import {StatusCodes} from 'http-status-codes';
import {ErrorResponse} from '@interfaces/api.types';
import {TransactWriteItemsCommand} from '@aws-sdk/client-dynamodb';
import {docDbClient} from 'database/getDbClient';
import {CreateProductSchema} from '@schema/products-schema';
import {v4} from 'uuid';
import {CreateProduct} from '@interfaces/product.types';
import {marshall} from '@aws-sdk/util-dynamodb';

export const createProduct: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    console.log('Lambda function createProduct request', JSON.stringify(event));

    const {PRODUCTS_TABLE, STOCKS_TABLE} = process.env;

    const parsedBody = JSON.parse(event.body || '{}');

    const validationResult = CreateProductSchema.safeParse(parsedBody);

    if (!validationResult.success) {
      const errorResponse: ErrorResponse = {
        message: 'Product data is invalid',
      };

      return {
        statusCode: StatusCodes.BAD_REQUEST,
        body: JSON.stringify(errorResponse),
      };
    }

    const product: CreateProduct = validationResult.data;
    const productId = v4();

    const transactItems = [
      {
        Put: {
          TableName: PRODUCTS_TABLE,
          Item: marshall({
            id: productId,
            ...product,
          }),
        },
      },
      {
        Put: {
          TableName: STOCKS_TABLE,
          Item: marshall({
            product_id: productId,
            count: 10,
          }),
        },
      },
    ];

    const command = new TransactWriteItemsCommand({
      TransactItems: transactItems,
    });

    await docDbClient.send(command);

    return {
      statusCode: StatusCodes.CREATED,
      body: JSON.stringify({
        message: 'Product created successfully',
        productId,
      }),
    };
  } catch (error: unknown) {
    let message = 'An error occurred while creating the product';

    if (error instanceof Error) {
      message = error.message;
    }

    const errorResponse: ErrorResponse = {message};

    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: JSON.stringify(errorResponse),
    };
  }
};

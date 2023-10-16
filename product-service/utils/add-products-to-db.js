const {BatchWriteCommand} = require('@aws-sdk/lib-dynamodb');
const {mockProducts} = require('@mocks/products.mock');
const {docDbClient} = require('database/getDbClient');

const addProductsToDynamoDB = async () => {
  try {
    //@ts-ignore
    const putRequests = mockProducts.map((product) => ({
      PutRequest: {
        Item: product,
      },
    }));

    const command = new BatchWriteCommand({
      RequestItems: {
        ['AWS_CloudX_Products']: putRequests,
      },
    });

    const data = await docDbClient.send(command);
    console.log('Products were added to your db table', data);
  } catch (error) {
    console.error('Error', error);
  }
};

addProductsToDynamoDB();

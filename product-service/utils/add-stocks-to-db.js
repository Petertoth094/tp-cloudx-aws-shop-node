const {BatchWriteCommand} = require('@aws-sdk/lib-dynamodb');
const {mockStocks} = require('@mocks/stocks.mock');
const {docDbClient} = require('database/getDbClient');

const addStockToDynamoDB = async () => {
  try {
    const putRequests = mockStocks.map((stock) => ({
      PutRequest: {
        Item: stock,
      },
    }));

    const command = new BatchWriteCommand({
      RequestItems: {
        ['AWS_CloudX_Stocks']: putRequests,
      },
    });

    const data = await docDbClient.send(command);
    console.log('Stocks were added to your db table', data);
  } catch (error) {
    console.error('Error', error);
  }
};

addStockToDynamoDB();

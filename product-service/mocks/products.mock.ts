import {v4} from 'uuid';

// used for DynamoDBDocumentClient
export const mockProducts = [
  {
    id: v4(),
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 100,
  },
  {
    id: v4(),
    title: 'Product 2',
    description: 'Description for Product 2',
    price: 200,
  },
  {
    id: v4(),
    title: 'Product 3',
    description: 'Description for Product 3',
    price: 300,
  },
  {
    id: v4(),
    title: 'Product 4',
    description: 'Description for Product 4',
    price: 400,
  },
  {
    id: v4(),
    title: 'Product 5',
    description: 'Description for Product 5',
    price: 500,
  },
];

// used for DynamoDBClient v3
// export const mockProducts = [
//   {
//     id: {S: v4()},
//     title: {S: 'Product 1'},
//     description: {S: 'Description for Product 1'},
//     price: {N: '100'},
//   },
//   {
//     id: {S: v4()},
//     title: {S: 'Product 2'},
//     description: {S: 'Description for Product 2'},
//     price: {N: '200'},
//   },
//   {
//     id: {S: v4()},
//     title: {S: 'Product 3'},
//     description: {S: 'Description for Product 3'},
//     price: {N: '300'},
//   },
//   {
//     id: {S: v4()},
//     title: {S: 'Product 4'},
//     description: {S: 'Description for Product 4'},
//     price: {N: '400'},
//   },
//   {
//     id: {S: v4()},
//     title: {S: 'Product 5'},
//     description: {S: 'Description for Product 5'},
//     price: {N: '500'},
//   },
// ];

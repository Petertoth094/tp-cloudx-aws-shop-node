import {mockProducts} from './products.mock';

export const mockStocks = mockProducts.map((product, index) => ({
  product_id: product.id,
  count: (index + 1) * 25,
}));

// export const mockStocks = mockProducts.map((product, index) => ({
//   product_id: {S: product.id.S},
//   count: {N: ((index + 1) * 25).toString()},
// }));

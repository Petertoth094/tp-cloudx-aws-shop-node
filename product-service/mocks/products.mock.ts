import {Product} from '@interfaces/product.types';

export const mockProducts: Product[] = [
  {
    id: '1001',
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    price: 9.99,
    count: 5,
  },
  {
    id: '1002',
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    price: 12.99,
    count: 7,
  },
  {
    id: '1003',
    title: 'Pulp Fiction',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    price: 11.99,
    count: 3,
  },
  {
    id: '1004',
    title: 'The Dark Knight',
    description:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    price: 14.99,
    count: 6,
  },
  {
    id: '1005',
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    price: 10.99,
    count: 4,
  },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
  };
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'MacBook Air',
    price: 999,
    specs: {
      cpu: 'Apple M1',
      ram: '8GB',
      storage: '256GB',
    },
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    price: 1299,
    specs: {
      cpu: 'Intel i7-1165G7',
      ram: '16GB',
      storage: '512GB',
    },
  },
  {
    id: 3,
    name: 'ThinkPad X1',
    price: 1499,
    specs: {
      cpu: 'Intel i5-1135G7',
      ram: '16GB',
      storage: '1TB',
    },
  },
  {
    id: 4,
    name: 'HP Spectre x360',
    price: 1199,
    specs: {
      cpu: 'Intel i7-1185G7',
      ram: '16GB',
      storage: '512GB',
    },
  },
  {
    id: 5,
    name: 'ASUS ROG Zephyrus',
    price: 1799,
    specs: {
      cpu: 'AMD Ryzen 9 5900HS',
      ram: '32GB',
      storage: '1TB',
    },
  },
];

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Relógio Premium Gold",
    price: 1299.9,
    image: "/relogio-1.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Relógio Classic Black",
    price: 899.9,
    image: "/relogio-2.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Relógio Luxury Silver",
    price: 1599.9,
    image: "/relogio-3.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Relógio Sport Pro",
    price: 749.9,
    image: "/relogio-4.jpg",
    featured: true,
  },
  {
    id: 5,
    name: "Relógio Sport Pro",
    price: 749.9,
    image: "/relogio-4.jpg",
    featured: true,
  },
  {
    id: 6,
    name: "Relógio Sport Pro",
    price: 749.9,
    image: "/relogio-4.jpg",
    featured: true,
  },
  {
    id: 7,
    name: "Relógio Sport Pro",
    price: 749.9,
    image: "/relogio-4.jpg",
    featured: true,
  },
];

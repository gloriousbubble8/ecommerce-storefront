import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "p-101",
    name: "Wireless Headphones",
    description: "Comfortable headphones for everyday listening.",
    price: 2499,
    category: "Electronics",
    inStock: true,
  },
  {
    id: "p-102",
    name: "Everyday Backpack",
    description: "A lightweight backpack for work and travel.",
    price: 1799,
    category: "Accessories",
    inStock: true,
  },
  {
    id: "p-103",
    name: "Desk Lamp",
    description: "A minimal lamp for your workspace.",
    price: 999,
    category: "Home",
    inStock: false,
  },
];

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Brilliant Cut Diamond",
    image: "https://images.unsplash.com/photo-1606312619344-1b7d9d63e6d4?auto=format&fit=crop&w=400&q=80",
    price: 2999,
  },
  {
    id: 2,
    name: "Princess Cut Diamond",
    image: "https://images.unsplash.com/photo-1620211079510-59b9a52e307c?auto=format&fit=crop&w=400&q=80",
    price: 3499,
  },
  {
    id: 3,
    name: "Emerald Cut Diamond",
    image: "https://images.unsplash.com/photo-1614679101665-9d8e3d5c1b2f?auto=format&fit=crop&w=400&q=80",
    price: 2799,
  },
];

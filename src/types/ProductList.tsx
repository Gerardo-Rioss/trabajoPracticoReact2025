import type { Product } from "./Product";
export type ProductList = {
    title: string;
    decription?: string;
    products: Product[];
  };
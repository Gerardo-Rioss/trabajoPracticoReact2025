import axios from "axios";
import type { Product } from "../types/Product";
const API_BASE_URL = "https://fakestoreapi.com";

export const productService = {
  //obtener todos los productos
  getProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  },

  // obtener el producto por su id
  getProductById: async (productId: number) => {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  },
  // Obtener categorías
  getCategories: async (): Promise<string[]> => {
    const response = await axios.get("/products/categories");
    return response.data;
  },
};

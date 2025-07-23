import axios from "axios"
import type { Product } from "../../types/Product";
const API_BASE_URL ="https://fakestoreapi.com";

//obtener todos los productos
export const getProducts = async ():Promise<Product[]>=>{
    const response = await axios.get(`${API_BASE_URL}/products`)
    return response.data;
}

// obtener el producto por su id
export const getProductById =  async (productId:number)=>{
    const {data} = await axios.get(`${API_BASE_URL}/products/${productId}`)
    return data;
}
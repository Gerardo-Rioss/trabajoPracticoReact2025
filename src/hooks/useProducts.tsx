import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";
import type { Product } from "../types/Product";

export function useProducts(){
    return useQuery<Product[]>({
        queryKey:["products"],
        queryFn: getProducts
    })
}
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import type { Product } from "../types/Product";

export function useProducts(){
    return useQuery<Product[]>({
        queryKey:["products"],
        queryFn: api.getProducts
    })
}


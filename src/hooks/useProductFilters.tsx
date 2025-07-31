import type { Product } from "../types/Product";
import type { ProductFilters } from "../types/ProductFilters";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

export const useProductFilters = (products: Product[] | undefined) => {
  const [searchParams] = useSearchParams();
  
  const filters: ProductFilters = {
    search: searchParams.get('search') || '',
    categories: searchParams.getAll('category'),
    minPrice: parseFloat(searchParams.get('minPrice') || "0"),
    maxPrice: parseFloat(searchParams.get('maxPrice') || "1000"),
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      
      const matchesCategory = 
        filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      
      const matchesPrice = 
        product.price >= filters.minPrice && 
        product.price <= filters.maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, filters]);

  return {
    filters,
    filteredProducts,
  };
}; 
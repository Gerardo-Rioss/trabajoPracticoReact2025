import type { Product } from "../types/Product";

export function filterProducts(
  products: Product[],
  search: string,
  selectedCategory: string,
  priceFilter: string
):Product[] {
  return products.filter((product) => {
    const byTitle = product.title.toLowerCase().includes(search.toLowerCase());
    const byCategory =
      !selectedCategory || product.category === selectedCategory;
    let byPrice = true;

    switch (priceFilter) {
      case "Hasta $500":
        byPrice = product.price < 500;
        break;
      case "$500 a $1.000":
        byPrice = product.price >= 500 && product.price <= 1000;
        break;
      case "Mas de $1.000":
        byPrice = product.price > 1000;
        break;
    }
    return byTitle && byCategory && byPrice;
  });
}

export function getCategories(products:Product[]):string[]{
    const categories = products.map((p)=>p.category);
    return[...new Set(categories)]

}
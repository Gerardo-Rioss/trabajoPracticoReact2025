import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};
type ProductList = {
  title: string;
  decription?: string;
  products: Product[];
};

type List = {
  productLists: ProductList[];
};

export default function MainContent({ productLists }: List) {
  return (
    <>
      {productLists.map((productList, index) => {
        return (
          <ProductList key={index} title={productList.title}>
            {productList.products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </ProductList>
        );
      })}
    </>
  );
}

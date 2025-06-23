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

type MainContentProps = {
  lists: ProductList[];
  isInCart: (id: number) => boolean;
  add: (p: Product) => void;
  remove: (id: number) => void;
};

export default function MainContent(props: MainContentProps) {
  const { lists, isInCart, add, remove } = props;
  return (
    <>
      {lists.length===0?(
        <h2>No se encontraron Productos.</h2>
      ):(lists.map((listsItem, index) => {
        return (
          <ProductList key={index} title={listsItem.title}>
            {listsItem.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                inCart={isInCart(product.id)}
                onAdd={() => add(product)}
                onRemove={() => remove(product.id)}
              />
            ))}
          </ProductList>
        );
      }))
      }
    </>
  );
}

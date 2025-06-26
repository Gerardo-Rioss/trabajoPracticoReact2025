import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Main/MainContent.module.css"

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category:string,
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
        <div className={styles.mensaje}>
            <h2>No se encontraron Productos.</h2>
        </div>
        
      ):(lists.map((listsItem, index) => {
        return (
          <ProductList key={index} title={listsItem.title}>
            {listsItem.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
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

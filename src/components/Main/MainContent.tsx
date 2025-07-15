import ProductListComponent from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Main/MainContent.module.css"
import type { ProductList } from "../../types/ProductList";
import type { Product } from "../../types/Product";


type MainContentProps = {
  lists: ProductList[];
};

export default function MainContent(props: MainContentProps) {
  const { lists } = props;
  return (
    <><div className={styles.container}>
      {lists.length===0?(
        <div className={styles.mensaje}>
            <h2>No se encontraron Productos !!!</h2>
        </div>
      ):(lists.map((listsItem, index) => {
        return (
          <ProductListComponent key={index} title={listsItem.title}>
            {listsItem.products.map((product: Product) => (
              <ProductCard product={product}/>
            ))}
          </ProductListComponent>
        );
      }))
      }
    </div>
    </>
  );
}

import ProductListComponent from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Main/MainContent.module.css";
import type { Product } from "../../types/Product";

type MainContentProps = {listProducts: Product[]};

function MainContent({listProducts}: MainContentProps) {
  return listProducts.length===0 ?(
    <div className={styles.emptyContainer}>
        <h2 className={styles.emptyTitle}>No se encontraron productos</h2>
        <p className={styles.emptyMessage}>
          Intente ajustar su búsqueda o filtros
        </p>
      </div>
    ):(
      <main className={styles.container}>
      <ProductListComponent title={"Titulo de seccion"}>
        {listProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListComponent>
    </main>
    )
  
}
export default MainContent;
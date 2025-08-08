import { useProducts } from "../../hooks/useProducts";
import { useProductFilters } from "../../hooks/useProductFilters";
import styles from "./Home.module.css"
import ProductList from "../../components/product/ProductList/ProductList";
import ProductCard from "../../components/product/ProductCard/ProductCard";

function Home() {
  const { data: products, error, isLoading } = useProducts();
  const { filteredProducts } = useProductFilters(products);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error al cargar productos</p>
      </div>
    );
  }

  return filteredProducts.length === 0 ? (
    <div className={styles.emptyContainer}>
      <h2 className={styles.emptyTitle}>No se encontraron productos</h2>
      <p className={styles.emptyMessage}>
        Intente ajustar su búsqueda o filtros
      </p>
    </div>
  ) : (
    <div className={styles.container}>
      <ProductList title={"Todos los productos disponibles..."}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
}


export default Home;



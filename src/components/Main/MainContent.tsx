import ProductListComponent from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../Main/MainContent.module.css";
import type { ProductList } from "../../types/ProductList";
import type { Product } from "../../types/Product";

type MainContentProps = {
  lists: ProductList[];
  isLoading?: boolean;
  error?: string | null;
};

export default function MainContent({
  lists,
  isLoading,
  error,
}: MainContentProps) {
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>Error loading products</h2>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (lists.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2 className={styles.emptyTitle}>No se encontraron productos</h2>
        <p className={styles.emptyMessage}>
          Intente ajustar su búsqueda o filtros
        </p>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      {lists.map((list) => (
        <ProductListComponent key={list.title} title={list.title}>
          {list.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductListComponent>
      ))}
    </main>
  );
}

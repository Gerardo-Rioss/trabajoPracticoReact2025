import { useProducts } from "../../hooks/useProducts";
import { useProductFilters } from "../../hooks/useProductFilters";
import styles from "./Home.module.css"
import ProductList from "../../components/product/ProductList/ProductList";
import ProductCard from "../../components/product/ProductCard/ProductCard";

function Home() {
  
  const { data: products=[], error } = useProducts();
  const {filteredProducts}=useProductFilters(products)
  if (error) return <div>Error al cargar productos</div>;

 return filteredProducts.length === 0 ? (
   <div className={styles.emptyContainer}>
     <h2 className={styles.emptyTitle}>No se encontraron productos</h2>
     <p className={styles.emptyMessage}>
       Intente ajustar su búsqueda o filtros
     </p>
   </div>
 ) : (
   <main className={styles.container}>
     <ProductList title={"Titulo de seccion"}>
       {filteredProducts.map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
     </ProductList>
   </main>
 );
}

export default Home;

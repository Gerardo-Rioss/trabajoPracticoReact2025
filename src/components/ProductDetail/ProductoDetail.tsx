import type { Product } from "../../types/Product";
import type { ProductList } from "../../types/ProductList";
import styles from "./ProductoDetalil.module.css"
type ProductDetailProps = {
  id: number;
  lists: ProductList[];
};
function ProductDetail(props: ProductDetailProps) {
  const { id, lists } = props;

  const findProductById = (): Product | undefined => {
    for (const list of lists) {
      const foundProduct = list.products.find((product) => product.id === id);
      if (foundProduct) {
        return foundProduct;
      }
    }
    return undefined;
  };
  const product = findProductById();
  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1 className={styles.name}>{product.name}</h1>
      <div className={styles.price}>${product.price.toFixed(2)}</div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={styles.image}
        />
      </div>

      <p className={styles.description}>{product.description}</p>

      <div className={styles.meta}>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.id}>ID: {product.id}</span>
      </div>
    </div>
  );
}
export default ProductDetail;
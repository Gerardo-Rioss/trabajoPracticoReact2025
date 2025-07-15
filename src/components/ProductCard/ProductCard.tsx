import styles from "./ProductCard.module.css";
import type { Product } from "../../types/Product";
import { Link } from "react-router";
type ProductCardProps = {
  product: Product;
};
function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.cardHeader}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`}>Ver mas</Link>
      </div>
    </div>
  );
}
export default ProductCard;

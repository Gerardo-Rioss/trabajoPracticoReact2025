import styles from "./ProductCard.module.css";
import type { Product } from "../../types/Product";
import { Link } from "react-router";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className={styles.cardLink}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.image}
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.name}>{product.title}</h3>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

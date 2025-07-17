import type { ProductList } from "../../types/ProductList";
import styles from "./ProductDetail.module.css";
import { useCart } from "../../context/CartContext";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useState } from "react";

type ProductDetailProps = {
  lists: ProductList[];
};

function ProductDetail(props: ProductDetailProps) {
  const { lists } = props;
  const { id } = useParams<{ id: string }>();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const productId = Number(id);
  const product = lists
    .flatMap((list) => list.products)
    .find((p) => p.id === productId);

  const handleCartAction = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
      setShowAddedMessage(false);
    } else {
      addToCart(product);
      setShowAddedMessage(true);
    }
  };

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Producto no encontrado</p>
        <Link to="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.name}</h1>
          <span className={styles.id}>#{product.id}</span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.price}>${product.price.toFixed(2)}</div>

        <div className={styles.actions}>
          {showAddedMessage && inCart ? (
            <div className={styles.addedMessage}>
              Producto agregado al carrito
            </div>
          ) : (
            <button
              onClick={handleCartAction}
              className={inCart ? styles.buttonRemove : styles.buttonAdd}
            >
              {inCart ? "Quitar del carrito" : "Agregar al carrito"}
            </button>
          )}
          <Link to="/" className={styles.continueLink}>
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router";
import type { Product } from "../../types/Product";

function Cart() {
  const { cart, total, removeFromCart, clearCart } = useCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tu Carrito</h1>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <p>Tu carrito está vacío</p>
          <Link to="/" className={styles.link}>
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartContent}>
            {cart.map((product: Product) => (
              <div key={product.id} className={styles.cartItem}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.itemDetails}>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.price}>${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className={styles.buttonRemove}
                    aria-label={`Quitar ${product.name} del carrito`}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.totalContainer}>
              <Link to="/" className={styles.link}>
                Continuar Comprando
              </Link>
              <p className={styles.total}>Total: ${total.toFixed(2)}</p>
            </div>

            <div className={styles.actions}>
              <button onClick={clearCart} className={styles.buttonClear}>
                Vaciar Todo
              </button>
              <Link to="/checkout" className={styles.checkoutLink}>
                Pagar Ahora
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

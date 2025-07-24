import { useCart } from "../../../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router";
import type { CartProduct } from "../../../types/CartContext";

function Cart() {
  const {
    cart,
    total,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

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
            {cart.map((product: CartProduct) => (
              
              <div key={product.id} className={styles.cartItem}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                </div>

                <div className={styles.itemDetails}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.name}>{product.title}</h3>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className={styles.buttonRemove}
                      aria-label={`Quitar ${product.title} del carrito`}
                    >
                      ×
                    </button>
                  </div>

                  <div className={styles.priceRow}>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <div className={styles.quantityContainer}>
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className={styles.quantityButton}
                        aria-label="Reducir cantidad"
                      >
                        -
                      </button>
                      <span className={styles.quantity}>
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className={styles.quantityButton}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                    <p className={styles.subtotal}>
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${(total * 0.95).toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>IVA (5%):</span>
              <span>${(total * 0.05).toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className={styles.actions}>
              <Link to="/" className={styles.continueShopping}>
                ← Continuar Comprando
              </Link>
              <div className={styles.checkoutActions}>
                <button onClick={clearCart} className={styles.buttonClear}>
                  Vaciar Carrito
                </button>
                <Link to="/checkout" className={styles.checkoutButton}>
                  Proceder al Pago
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

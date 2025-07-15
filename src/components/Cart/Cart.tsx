// Si falta instalar react-router-dom, ejecutar: npm install react-router-dom
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import { Link } from "react-router";
import type { Product } from "../../types/Product";

function Cart() {
  const { cart, total, removeFromCart, clearCart } = useCart();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tu carrito de compras</h1>
      {cart.length === 0 ? (
        <div>
          <p>Tu Carrito esta vacio</p>
          <Link to="/">Continuar Comprando</Link>
        </div>
      ) : (
        <div>
          {cart.map((product: Product) => (
            <div key={product.id}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardHeader}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>${product.price.toFixed(2)}</p>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className={styles.buttonRemove}
                >
                  Quitar del carrito
                </button>
              </div>
            </div>
          ))}

          <div>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Pago</Link>
          </div>
        </div>
      )}
    </div>
  );
}

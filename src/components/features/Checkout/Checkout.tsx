import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [totalCheck, setTotalCheck]= useState(0)
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (name.trim() && address.trim() && email.trim()) {
      setTotalCheck(total)      
      clearCart();
      setConfirmed(true);
    }
    setIsSubmitting(false);
  };

  if (confirmed) {
    return (
      <div className={styles.confirmation}>
        <div className={styles.confirmationCard}>
          <h1 className={styles.confirmationTitle}>
            ¡Gracias por tu compra, {name}!
          </h1>
          <div className={styles.confirmationDetails}>
            <p>
              <strong>Dirección de envío:</strong> {address}
            </p>
            <p>
              <strong>Correo electrónico:</strong> {email}
            </p>
          <p className={styles.confirmationTotal}>Total pagado: <strong>${totalCheck.toFixed(2)}</strong> </p>
            <p>
              Te hemos enviado un correo de confirmación con los detalles de tu
              pedido.
            </p>
          </div>
          <Link to="/" className={styles.continueShopping}>
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.cartSummary}>
        <h2 className={styles.sectionTitle}>Resumen de tu compra</h2>
        <ul className={styles.productList}>
          {cart.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <div className={styles.productInfo}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.totalContainer}>
          <span>Total:</span>
          <span className={styles.totalAmount}>${total.toFixed(2)}</span>
        </div>
        <Link to="/" className={styles.link}>
          Continuar comprando
        </Link>
      </div>

      <div className={styles.checkoutForm}>
        <h2 className={styles.sectionTitle}>Información de envío</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.formLabel}>
              Dirección de envío
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={styles.formTextarea}
              required
              rows={4}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Procesando..." : "Confirmar Compra"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

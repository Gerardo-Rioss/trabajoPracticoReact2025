import styles from "./NavCart.module.css";
import { Link } from "react-router";
import { useCart } from "../../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export const NavCart = () => {
  const { cart } = useCart();
  const itemCount = cart.length;

  return (
    <div className={styles.container}>
      <Link
        to="/cart"
        className={styles.cartLink}
        aria-label="Carrito de compras"
      >
        <div className={styles.cartIconContainer}>
          <FaShoppingCart className={styles.cartIcon} />
          {itemCount > 0 && (
            <span className={styles.cartBadge}>{itemCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NavCart;

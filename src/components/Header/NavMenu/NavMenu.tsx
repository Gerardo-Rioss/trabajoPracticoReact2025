import styles from "./NavMenu.module.css";
import { Link } from "react-router";
import { useCart } from "../../../context/CartContext";
export const NavMenu = () => {
  const { total, cart } = useCart();
  return (
    <div className={styles.container}>
      {cart.length != 0 && (
        <div className={styles.total}> Total: ${total.toFixed(2)}</div>
      )}
      <Link to="/cart">
        <div>🛒({cart.length})</div>
      </Link>
    </div>
  );
};
export default NavMenu;

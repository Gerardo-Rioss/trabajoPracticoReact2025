import styles from './NavMenu.module.css'
import { useCart } from '../../../context/CartContext'
export const NavMenu = () => {
  const {total} = useCart();
  return (
    <div className={styles.container}>
      <div>🛒</div>
      <div className={styles.total}> Total: ${total.toFixed(2)}</div>
    </div>
  );
}
export default NavMenu;
import styles from './NavMenu.module.css'
export const NavMenu = () => {
  return (
    <div className={styles.links}>
      <a href="/">Inicio</a>
      <a href="/">Creá tu cuenta</a>
      <a href="/">Ingresá</a>
      <a href="/">Mis compras</a>
      <a href="">🛒</a>
    </div>
  );
}
export default NavMenu;
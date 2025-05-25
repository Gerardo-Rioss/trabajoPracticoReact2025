import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Mercado Libre</div>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar productos, marcas y más..." />
        <button type="submit">Buscar</button>
      </div>
      <div className={styles.links}>
        <a href="/">Inicio</a>
        <a href="/">Categorías</a>
      </div>
    </nav>
  )
}

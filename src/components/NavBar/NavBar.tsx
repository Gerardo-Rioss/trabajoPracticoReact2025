import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logoImagen} src={"LogoMercadoLibre.jpg"} alt="" />
      <div className={styles.search}>
        <input type="text" placeholder="Buscar productos, marcas y más..." />
        <button className={styles.buttonSearch} type="submit">
          Buscar
        </button>
      </div>
      <div className={styles.links}>
        <a href="/">Inicio</a>
        <a href="/">Categorías</a>
      </div>
    </nav>
  );
};

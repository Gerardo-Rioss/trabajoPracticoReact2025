import styles from "./NavBar.module.css";
import { FiSearch } from "react-icons/fi";

export const NavBar = () => {
    return (
        <nav className={styles.navHeader}>
            <div className={styles.navContainer}>

                <div className={styles.navLeftTopArea}>
                    <img
                        className={styles.logoImagen}
                        src={"LogoMercadoLibre.jpg"}
                        alt=""
                    />
                </div>

                <div className={styles.navCenterTopArea}>
                    <div className={styles.search}>
                        <input
                            className={styles.inputSearch}
                            type="text"
                            placeholder="Buscar productos, marcas y más..."
                        />
                        <div className={styles.searchDivider}></div>
                        <button className={styles.buttonSearch} type="submit">
                            <FiSearch className={styles.searchIcon} />
                        </button>
                    </div>
                </div>

                <div className={styles.navRigthBottomArea}>
                    <div className={styles.links}>
                        <a href="/">Inicio</a>
                        <a href="/">Creá tu cuenta</a>
                        <a href="/">Ingresá</a>
                        <a href="/">Mis compras</a>
                    </div>
                </div>

                
                <div className={styles.navCenterBottomArea}></div>
            </div>
        </nav>
    );
};

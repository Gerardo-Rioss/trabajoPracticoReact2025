import styles from "./header.module.css";
import { Link, useSearchParams } from "react-router";
import { updateSearchParam } from "../../utils/searchParams";
import IconButtonWithBadge from "../MaterialComponent/IconButtonWithBadge/IconButtonWithBadge";


export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParams = updateSearchParam(searchParams, "search", e.target.value);
    setSearchParams(newParams);
  };



  return (
    <nav className={styles.navHeader}>
      <div className={styles.navLeftArea}>
        <Link to="/">
          <img
            className={styles.logoImagen}
            src={"LogoMercadoLibre.jpg"}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.navCenterArea}>
        <div className={styles.search}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={searchParams.get("search") || ""}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles.navRigthArea}>
        <IconButtonWithBadge/>
        <Link to="/createProduct">
          <button className={styles.createButton}>🔽 Crear producto</button>
        </Link>

      </div>
    </nav>
  );
};

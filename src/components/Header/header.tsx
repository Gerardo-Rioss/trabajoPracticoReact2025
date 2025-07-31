import styles from "./header.module.css";
import { Link, useSearchParams } from "react-router";
import { updateSearchParam } from "../../utils/searchParams";
import IconButtonWithBadge from "../MaterialComponent/IconButtonWithBadge/IconButtonWithBadge";
import { FiSearch } from "react-icons/fi";


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
        {/* ///// */}
        <div className={styles.search}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={searchParams.get("search") || ""}
            onChange={handleSearchChange}
          />
          {/* <div className={styles.searchDivider}></div>
          <button className={styles.buttonSearch} type="submit">
            <FiSearch className={styles.searchIcon} />
          </button> */}
        </div>
        {/* ///// */}
      </div>
      <div className={styles.navRigthArea}>
        <IconButtonWithBadge></IconButtonWithBadge>
      </div>
    </nav>
  );
};

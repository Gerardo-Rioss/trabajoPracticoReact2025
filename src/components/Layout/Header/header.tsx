import SearchBar from "./SearchBar/SearchBar";
/* import NavCart from "./NavCart/NavCart"; */
import styles from "./header.module.css";
import { Link } from "react-router";
import IconButtonWithBadge from "../../MaterialComponent/IconButtonWithBadge/IconButtonWithBadge";
type NavHeaderProps = {
  setSearch: (searchValue: string) => void;
  search: string;
};

export const NavHeader = (props: NavHeaderProps) => {
  const { setSearch, search } = props;
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
        <SearchBar setSearch={setSearch} search={search} />
      </div>
      <div className={styles.navRigthArea}>
        <IconButtonWithBadge></IconButtonWithBadge>
      </div>
    </nav>
  );
};

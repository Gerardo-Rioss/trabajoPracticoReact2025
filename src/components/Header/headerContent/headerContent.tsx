import SearchBar from "../SearchBar/SearchBar";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./headerContent.module.css";
import { Link } from "react-router";

type NavHeaderProps={
  setSearch: (searchValue:string)=>void,
  search: string,
}

export const NavHeader = (props: NavHeaderProps) => {
  const { setSearch, search}=props
  return (
    <nav className={styles.navHeader}>
      <div className={styles.navLeftTopArea}>
        <Link to="/">
        <img
          className={styles.logoImagen}
          src={"LogoMercadoLibre.jpg"}
          alt=""
        />
        </Link>
      </div>
      <div className={styles.navCenterTopArea}>
        <SearchBar setSearch={setSearch} search={search}/>
      </div>
      <div className={styles.navRigthBottomArea}>
        <NavMenu />
      </div>
      <div className={styles.navCenterBottomArea}>
      
      </div>
      <div className={styles.navRightTopArea}>
        <img
          className={styles.imgNavRightTop}
          src="https://http2.mlstatic.com/D_NQ_779354-MLA82788204133_022025-OO.webp"
          alt="Envío gratis en tu primera compra en Mercado Libre."
        ></img>
      </div>
    </nav>
  );
};

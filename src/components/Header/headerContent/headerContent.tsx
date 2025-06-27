import SearchBar from "../SearchBar/SearchBar";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./headerContent.module.css";


type NavHeaderProps={
  total : number,
  setSearch: (searchValue:string)=>void,
  search: string,
}

export const NavHeader = (props: NavHeaderProps) => {
  const {total, setSearch, search}=props
  return (
    <nav className={styles.navHeader}>
      <div className={styles.navLeftTopArea}>
        <img
          className={styles.logoImagen}
          src={"LogoMercadoLibre.jpg"}
          alt=""
        />
      </div>
      <div className={styles.navCenterTopArea}>
        <SearchBar setSearch={setSearch} search={search}/>
      </div>
      <div className={styles.navRigthBottomArea}>
        <NavMenu total={total}/>
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

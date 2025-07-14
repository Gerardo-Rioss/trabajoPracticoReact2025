import { Outlet } from "react-router";
import { NavHeader } from "../Header/headerContent/headerContent";
import SideBarContent from "../SideBar/SideBarContent";
import { FooterContent } from "../Footer/FooterContent";
import styles from "./Layout.module.css";

type LayoutProps = {
  total: number;
  setSearch: (searchValue: string) => void;
  search: string;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  priceFilter: string;
  setPriceFilter: (v: string) => void;
  categories: string[];
};

function Layout(props:LayoutProps) {
  const {total,setSearch,search,selectedCategory,
    setSelectedCategory,
    priceFilter,
    setPriceFilter,
    categories,} = props
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <NavHeader total={total} setSearch={setSearch} search={search} />
        </div>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
        <div className={styles.sideBar}>
          <SideBarContent
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>
        <div className={styles.footer}>
          <FooterContent />
        </div>
      </div>
    </>
  );
}
export default Layout;

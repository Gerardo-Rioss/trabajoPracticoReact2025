import { Outlet } from "react-router";
import SideBar from "../SideBar/SideBar";
import { FooterContent } from "../Footer/FooterContent";
import styles from "./Layout.module.css";
import { Header } from "../Header/header";


function Layout() {

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.footer}>
          <FooterContent />
        </div>
      </div>
    </>
  );
}
export default Layout;

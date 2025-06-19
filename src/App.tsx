import styles from "./App.module.css";
import { NavHeader } from "./components/Header/NavHeader/NavHeader";
import { FooterContent } from "./components/Footer/FooterContent";
import SideNavContent from "./components/SideBar/SideNavContent";
import MainContent from "./components/Main/MainContent";
import { useEffect, useState } from "react";
/* import { FaEtsy } from "react-icons/fa"; */

type Post = {
  id: number;
  title: string;
  image: string;
};

const API = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch(API, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          data.map((item) => {
            return {
              ...item,
              image:
                "https://png.pngtree.com/background/20250124/original/pngtree-beautiful-natural-scenery-picture-image_15750499.jpg",
            };
          })
        );
      })
      .catch(() => setError("Ocurrio un error obteniendo los datos"))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return "loading";
  }
  if (error) {
    return error;
  }

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <NavHeader />
        </div>
        <div className={styles.mainContent}>
          <MainContent posts={posts} />
        </div>
        <div className={styles.sideNav}>
          <SideNavContent />
        </div>
        <div className={styles.footer}>
          <FooterContent />
        </div>
      </div>
    </>
  );
}
export default App;

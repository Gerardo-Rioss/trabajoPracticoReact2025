import { Link } from "react-router";
import styles from "./NotFound.module.css"

function NotFound (){

    return (
      <div className={styles.container}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/">Volver al Inicio</Link>
      </div>
    );
}
export default NotFound;
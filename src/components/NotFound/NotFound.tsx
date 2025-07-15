import { Link } from "react-router";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.message}>
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.homeLink}>
            Volver al inicio
          </Link>
          <Link to="/contact" className={styles.contactLink}>
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

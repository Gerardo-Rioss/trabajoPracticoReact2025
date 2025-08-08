
import styles from "./FooterContent.module.css";

export const FooterContent = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <h3 className={styles.footerTitle}>
            Trabajo Práctico - Rios Gerardo
          </h3>
          <p className={styles.footerDescription}>
            Aplicación de e-commerce desarrollada con React y TypeScript.
          </p>
        </div>
        <div className={styles.footerLegal}>
          <p className={styles.copyright}>
            © INFORMATORIO - {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
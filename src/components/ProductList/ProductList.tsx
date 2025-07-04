import styles from "./ProductList.module.css";
type ProductListProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function ProductList(props: ProductListProps) {
  const { title, description, children } = props;
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <div className={styles.productContainer}>{children}</div>
    </div>
  );
}
export default ProductList;

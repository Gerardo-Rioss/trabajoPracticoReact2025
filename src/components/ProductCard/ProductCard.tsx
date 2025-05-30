import styles from "./ProductCard.module.css";
type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

function ProductCard(props: ProductCardProps) {
  const { id, name, price, description, image } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.id}>id:{id}</span>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price.toFixed(2)}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.buttonCompra}>Comprar ahora</button>
        <button className={styles.buttonCarrito}>Agregar carrito</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

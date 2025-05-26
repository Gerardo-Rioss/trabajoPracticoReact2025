import style from "./ProductCard.module.css";
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
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={image} alt={name} className={style.image} />
      </div>
      <div className={style.cardContent}>
        <div className={style.cardHeader}>
          <span className={style.id}>id:{id}</span>
          <h3 className={style.name}>{name}</h3>
          <p className={style.price}>${price.toFixed(2)}</p>
          <p className={style.description}>{description}</p>
        </div>
        <button className={style.button}>Comprar</button>
      </div>
    </div>
  );
}
export default ProductCard;

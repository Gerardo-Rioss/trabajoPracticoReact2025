import type { Product } from "../../types/Product";
import type { ProductList } from "../../types/ProductList";
import styles from "./ProductoDetalil.module.css";
import { useCart } from "../../context/CartContext";
import { useParams } from "react-router";
type ProductDetailProps = {
  lists: ProductList[];
};
function ProductDetail(props: ProductDetailProps) {
  const { lists } = props;
  const { id } = useParams<{ id: string }>();
  const { addToCart, removeFromCart, isInCart } = useCart();

  const productId = Number(id);
  const product = lists
    .flatMap((list) => list.products)
    .find((p) => p.id === productId);
  
  if (!product){
     return <p>Producto no encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
      </div>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <p className={styles.description}>{product.description}</p>
      {!isInCart(product.id) ? (
        <button onClick={()=>addToCart(product)} className={styles.buttonAdd}>
          Agregar al Carrito
        </button>
      ) : (
        <button onClick={()=>removeFromCart(product.id)} className={styles.buttonRemove}>
          Quitar del carrito
        </button>
      )}
      <div className={styles.meta}>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.id}>ID: {product.id}</span>
      </div>
    </div>
  );
}
export default ProductDetail;

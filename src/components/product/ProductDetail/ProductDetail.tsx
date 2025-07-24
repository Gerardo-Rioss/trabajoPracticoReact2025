import type { Product } from "../../../types/Product";
import styles from "./ProductDetail.module.css";
import { useCart } from "../../../context/CartContext";
import { useParams } from "react-router";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../services/products";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isInCart } = useCart();

  const { data: product , isLoading, error,} = useQuery<Product>({
    queryKey: ["product",id],
    queryFn:()=> getProductById(Number(id)),
  });
  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;
    
  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Producto no encontrado !!!</p>
        <Link to="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.title}</h1>
          <span className={styles.id}>#{product.id}</span>
        </div>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
        <div className={styles.actions}>
          {inCart ? (
            <div className={styles.addedMessage}>
              Producto agregado al carrito
            </div>
          ) : (
            <button
              onClick={()=>addToCart(product)}
              className={styles.buttonAdd}
            >
              Agregar al carrito
            </button>
          )}
          <Link to="/" className={styles.continueLink}>
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart()
    if (name.trim() && address.trim()) {
      // backend
      setConfirmed(true);
    }
  };
  if (confirmed) {
    return (
      <div>
        <h1>¡Gracias por tu compra, {name}!</h1>
        <p>Tu pedido será enviado a: {address}</p>
        <p>Te enviaremos un correo de confirmación.</p>
        <Link to="/">Volver al Inicio</Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return <p>Tu carrito está vacío. Agrega productos para continuar.</p>;
  }
  return (
    <>
      <h2>Productos en tu carrito:</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h3>Total: ${total}</h3>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Dirección de envío:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <button type="submit">Confirmar Compra</button>
      </form>
    </>
  );
}
export default Checkout;

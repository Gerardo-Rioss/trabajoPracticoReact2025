import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import ProductForm from '../../components/ProductForm/ProductForm';
import type { ProductFormValues } from '../../types/ProductFormValues';
import styles from './CreateProduct.module.css';

interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function CreateProduct() {
  const [createdProduct, setCreatedProduct] = useState<ProductResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (
    values: ProductFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', values);
      console.log('Producto creado con éxito:', response.data);
      setCreatedProduct(response.data);
      setErrorMessage('');
      resetForm();
    } catch (error) {
      console.error('Error al crear el producto:', error);
      setErrorMessage('Ocurrió un error al crear el producto.');
      setCreatedProduct(null);
    }
  };

  const handleAccept = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Crear nuevo producto</h2>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      {!createdProduct ? (
        <ProductForm onSubmit={handleSubmit} />
      ) : (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3 style={{ color: 'green' }}>¡Producto creado exitosamente!</h3>
          <p><strong>ID:</strong> {createdProduct.id}</p>
          <p><strong>Título:</strong> {createdProduct.title}</p>
          <p><strong>Precio:</strong> ${createdProduct.price}</p>
          <p><strong>Categoría:</strong> {createdProduct.category}</p>
          <p><strong>Descripción:</strong> {createdProduct.description}</p>
          <p><strong>Imagen:</strong></p>
          <img
            src={createdProduct.image}
            alt={createdProduct.title}
            style={{ maxWidth: '200px' }}
          />

          <button
            onClick={handleAccept}
            className={styles.buttonAccept}

          >
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
}

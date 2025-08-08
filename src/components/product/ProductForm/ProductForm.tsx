import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";
import type { ProductFormValues } from "../../../types/ProductFormValues";
import { useCategories } from "../../../hooks/useCategories";
import styles from "./ProductForm.module.css";
import { useNavigate } from "react-router";

interface ProductFormProps {
  onSubmit: (
    values: ProductFormValues,
    formikHelpers: FormikHelpers<ProductFormValues>
  ) => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required("El título es requerido"),
  price: Yup.number()
    .typeError("El precio debe ser un número")
    .required("El precio es requerido")
    .positive("El precio debe ser positivo"),
  description: Yup.string().required("La descripción es requerida"),
  category: Yup.string().required("La categoría es requerida"),
  image: Yup.string()
    .url("Debe ser una URL válida")
    .required("La URL de la imagen es requerida"),
});

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const { data: categories } = useCategories();
  const navigate = useNavigate();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Crear Nuevo Producto</h2>
      <Formik
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.productForm}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.formLabel}>
                Título
              </label>
              <Field
                name="title"
                type="text"
                className={styles.formInput}
                placeholder="Ej: Smartphone XYZ"
              />
              <ErrorMessage
                name="title"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="price" className={styles.formLabel}>
                Precio
              </label>
              <div className={styles.priceInputContainer}>
                <span className={styles.currencySymbol}>$</span>
                <Field
                  name="price"
                  type="number"
                  className={`${styles.formInput} ${styles.priceInput}`}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
              <ErrorMessage
                name="price"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.formLabel}>
                Descripción
              </label>
              <Field
                name="description"
                as="textarea"
                className={`${styles.formInput} ${styles.textarea}`}
                placeholder="Describe detalladamente el producto..."
                rows={4}
              />
              <ErrorMessage
                name="description"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category" className={styles.formLabel}>
                Categoría
              </label>
              <Field
                name="category"
                as="select"
                className={`${styles.formInput} ${styles.selectInput}`}
              >
                <option value="">Seleccioná una categoría</option>
                {categories?.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="image" className={styles.formLabel}>
                URL de imagen
              </label>
              <Field
                name="image"
                type="text"
                className={styles.formInput}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              <ErrorMessage
                name="image"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <div className={styles.buttonAccion}>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.spinner}></span>
                ) : (
                  "Crear producto"
                )}
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => navigate("/")}
              >
                Cancelar
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
}

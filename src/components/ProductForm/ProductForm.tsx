import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import type { ProductFormValues } from '../../types/ProductFormValues';
import { useCategories } from '../../hooks/useCategories';
interface ProductFormProps {
  onSubmit: (
    values: ProductFormValues,
    formikHelpers: FormikHelpers<ProductFormValues>
  ) => void;
}

const validationSchema = Yup.object({
  title: Yup.string().required('El título es requerido'),
  price: Yup.number()
    .typeError('El precio debe ser un número')
    .required('El precio es requerido')
    .positive('El precio debe ser positivo'),
  description: Yup.string().required('La descripción es requerida'),
  category: Yup.string().required('La categoría es requerida'),
  image: Yup.string()
    .url('Debe ser una URL válida')
    .required('La URL de la imagen es requerida'),
});

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const { data: categories } = useCategories();
  return (
    <Formik
      initialValues={{
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="title">Título</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="div" />
        </div>

        <div>
          <label htmlFor="price">Precio</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" />
        </div>

        <div>
          <label htmlFor="description">Descripción</label>
          <Field name="description" as="textarea" />
          <ErrorMessage name="description" component="div" />
        </div>

        <div>
          <label htmlFor="category">Categoría</label>
          <Field name="category" as="select">
            <option value="">Seleccioná una categoría</option>
            {categories?.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component="div" />
        </div>

        <div>
          <label htmlFor="image">URL de imagen</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" component="div" />
        </div>

        <button type="submit">Crear producto</button>
      </Form>
    </Formik>
  );
}

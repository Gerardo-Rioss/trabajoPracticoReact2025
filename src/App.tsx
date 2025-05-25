import { NavBar } from './components/NavBar/NavBar'
import ProductCard from './components/ProductCard/ProductCard'
import ProductList from './components/ProductList/ProductList'

function App() {

  return (
    <>
      <NavBar />
      <ProductList title="Prueba">
        <ProductCard
          id={1}
          name="Producto 1"
          description="Descripción del producto 1"
          price={100}
          image="https://noblex.com.ar/media/catalog/product/cache/2afe2f66dc19e81f1bb37499d22783e0/c/o/copa_am_rica-_dk43x5150-_pop_tv_lineal_2024_.jpg"
        />
        <ProductCard
          id={1}
          name="Producto 1"
          description="Descripción del producto 1"
          price={100}
          image="https://noblex.com.ar/media/catalog/product/cache/2afe2f66dc19e81f1bb37499d22783e0/c/o/copa_am_rica-_dk43x5150-_pop_tv_lineal_2024_.jpg"
        />
        <ProductCard
          id={1}
          name="Producto 1"
          description="Descripción del producto 1"
          price={100}
          image="https://noblex.com.ar/media/catalog/product/cache/2afe2f66dc19e81f1bb37499d22783e0/c/o/copa_am_rica-_dk43x5150-_pop_tv_lineal_2024_.jpg"
        />
      </ProductList>
    </>
  );
}

export default App

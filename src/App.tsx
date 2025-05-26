import { NavBar } from './components/NavBar/NavBar'
import ProductCard from './components/ProductCard/ProductCard'
import ProductList from './components/ProductList/ProductList'
import styles from  './App.module.css'

function App() {

  return (
    <div className={styles.container}>
      <NavBar />
      <ProductList title="Inspirado en lo último que viste">
        <ProductCard
          id={1}
          name="Televisor Noblex 43 Pulgadas"
          description=" Televisor Noblex 43 Pulgadas, Smart TV, Full HD, LED, WiFi, HDMI, USB"
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
        <ProductCard
          id={1}
          name="Producto 1"
          description="Descripción del producto 1"
          price={100}
          image="https://noblex.com.ar/media/catalog/product/cache/2afe2f66dc19e81f1bb37499d22783e0/c/o/copa_am_rica-_dk43x5150-_pop_tv_lineal_2024_.jpg"
        />
      </ProductList>
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
    </div>
  );
}

export default App

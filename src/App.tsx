import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./components/product/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import { useProducts } from "./hooks/useProducts";
import { filterProducts, getCategories } from "./utils/filters";

function App() {
  //Estados
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  //Fetch para obtener todos los productos en un customhook
  const { data: products = [], error } = useProducts();
  if (error) return <div>Error al cargar productos</div>;
  // aplica los filtros
  const filteredProducts = filterProducts(
    products,
    search,
    selectedCategory,
    priceFilter
  );
  //obtengo todas las categorias de los product
  const CATEGORIES = getCategories(products);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout
                setSearch={setSearch}
                search={search}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                categories={CATEGORIES}
              />
            }
          >
            <Route
              path="/"
              element={<Home listProducts={filteredProducts} />}
            ></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;

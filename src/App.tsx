/* import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./components/product/ProductDetail/ProductDetail"; */
import { BrowserRouter, Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
/* import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import { useProducts } from "./hooks/useProducts";
import { filterProducts, getCategories } from "./utils/filters"; */

function App() {
  /* const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const { data: products = [], error } = useProducts();
  if (error) return <div>Error al cargar productos</div>;
  const filteredProducts = filterProducts(
    products,
    search,
    selectedCategory,
    priceFilter
  );
  const CATEGORIES = getCategories(products); */

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}   ></Route> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          {/* <Route
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
          </Route> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import { PRODUCT_CATEGORIES } from "./constants/categories";
import { PRODUCTS_DATA } from "./constants/products";

function App() {
  //Estados
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // Filtrar listado por búsqueda, categoría o precio
  const filteredList = PRODUCTS_DATA.map((list) => ({
    ...list,
    products: list.products.filter((product) => {
      const filteredByName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const filteredByCategory =
        selectedCategory === "" || product.category === selectedCategory;
      let filteredByPrice = true;
      if (priceFilter === "Hasta $500") filteredByPrice = product.price < 500;
      else if (priceFilter === "$500 a $1.000")
        filteredByPrice = product.price >= 500 && product.price <= 1000;
      else if (priceFilter === "Mas de $1.000")
        filteredByPrice = product.price > 1000;
      return filteredByName && filteredByCategory && filteredByPrice;
    }),
  })).filter((list) => list.products.length > 0);

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
                categories={PRODUCT_CATEGORIES}
              />
            }
          >
            <Route
              path="/"
              element={<Home filteredList={filteredList} />}
            ></Route>
            <Route
              path="/product/:id"
              element={<ProductDetail lists={filteredList} />}
            ></Route>
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

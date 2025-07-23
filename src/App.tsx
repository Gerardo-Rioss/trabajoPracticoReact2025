import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import type { Product } from "./types/Product";
import { useQuery} from "@tanstack/react-query";
import {getProducts} from "./components/Api/products"


function App() {
  //Estados
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const { data: products =[], isLoading, error,} = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;

  
  const filteredProducts = products.filter((product: Product) => {
    const filteredByName = product.title
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
  });

  function getCategories (products:Product[]){
    const categories = products.map((product)=>product.category)
    const uniqueCategories = [...new Set(categories)]
    return uniqueCategories
  }
  const CATEGORIES = getCategories(products)


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
            {<Route
              path="/product/:id"
              element={<ProductDetail listProducts={filteredProducts} />}
            ></Route>}
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

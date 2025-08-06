import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetail from "./components/product/ProductDetail/ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/product/:id" element={<ProductDetail />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/createProduct" element={<CreateProduct />}></Route>
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

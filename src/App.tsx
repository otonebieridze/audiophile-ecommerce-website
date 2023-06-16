import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Details from "./pages/details/Details";
import ScrollToTop from "./ScrollToTop";
import BlackScreen from "./components/blackScreen/BlackScreen";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./components/footer/Footer";

export const MyContext = createContext<ContextProps | null>(null);

function App() {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        cartProducts,
        setCartProducts,
      }}
    >
      <BrowserRouter>
        {cart && <BlackScreen />}
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

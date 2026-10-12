
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Contact from "./pages/Contact";










export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products  />} />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/login" element={<Login /> } />
         <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      < Footer />
    </BrowserRouter>
  );
}
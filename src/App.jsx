
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Fresh from "./pages/Fresh";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Deals from "./pages/Deals";
import Pharmacy from "./pages/Pharmacy";










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
           <Route path="/Fresh" element={<Fresh />} />
            <Route path="/Grocery" element={<Grocery />} />
            <Route path="/Electronics" element={<Electronics />} />
             <Route path="/Deals" element={<Deals />} />
              <Route path="/Pharmacy" element={<Pharmacy />} />
      </Routes>

      < Footer />
    </BrowserRouter>
  );
}
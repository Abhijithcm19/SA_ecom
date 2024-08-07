import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductCart from "./pages/ProductCart";
import Login from "./pages/Login";
import FooterView from "./components/FooterView";
import ProductsDetails from "./pages/ProductsDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/ProductCart" element={<ProductCart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Products/:id" element={<ProductsDetails />} />
          </Routes>
          <FooterView />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

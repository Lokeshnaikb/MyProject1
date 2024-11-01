import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaCarrot, FaDrumstickBite, FaShoppingCart, FaHistory, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cart from "./Cart";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Home from "./Home";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import GoogleLoginComponent from './GoogleLoginComponent';
import './App.css';

function App() {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <GoogleOAuthProvider clientId="203261730243-60c15e3jus89kkp2jn2bd38ohn5ueh7t.apps.googleusercontent.com">
      <GoogleLoginComponent />
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link">
            <FaHome className="icon" /> MyShop
          </Link>
          <Link to="/Veg" className="nav-link">
            <FaCarrot className="icon" /> Veg
          </Link>
          <Link to="/NonVeg" className="nav-link">
            <FaDrumstickBite className="icon" /> NonVeg
          </Link>
          <div className="cart-wrapper">
            <Link to="/Cart" className="nav-link">
              <FaShoppingCart className="icon" /> Cart
            </Link>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <Link to="/PurchaseHistory" className="nav-link">
            <FaHistory className="icon" /> Purchase History
          </Link>
          <Link to="/AboutUs" className="nav-link">
            <FaInfoCircle className="icon" /> About Us
          </Link>
          <Link to="/ContactUs" className="nav-link">
            <FaPhone className="icon" /> Contact Us
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/NonVeg" element={<NonVeg />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Header from './components/header';
// import Footer from './components/common/footer';

import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
       
    </Router>
  );
};

export default App;

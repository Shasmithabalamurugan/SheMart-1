import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Products from './Components/Products';
import TeaMugs from './Components/TeaMugs';
import Homepage from './Components/Homepage';
import Loginn from './Components/Loginn';
import Register from './Components/Register';
import CartPage from './Components/CartPage'; // Import CartPage
import { CartProvider } from './Components/CartContext'; // Import CartProvider
import Feedback from './Components/Feedback';
import AboutPage from './Components/AboutPage';
import AdminDashboard from './AdminComponents/AdminDashboard';
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/products" element={<Products />} />
            <Route path="/products/drinkware/TeaMugs" element={<TeaMugs />} />
            <Route path="/login" element={<Loginn />} /> 
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/cart" element={<CartPage />} /> {/* Cart Page Route */}
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/users" element={<AdminDashboard />} />
             {/* Cart Page Route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

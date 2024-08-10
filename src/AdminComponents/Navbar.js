import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Components/CartContext'; // Import CartContext
import './Navbar.css'; // Import your CSS file
import logo from '../images/newlogo.png';
function Navbar() {
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/user">User Management</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="nav-icons">
        <FaSearch className="nav-icon" />
       
        <Link to="/login" className="icon-container">
        <FaUser className="nav-icon" />
        </Link>
        <Link to="/cart" className="cart-icon-container">
          <FaShoppingCart className="nav-icon" />
          {cartItemCount > 0 && (
            <span className="cart-item-count">{cartItemCount}</span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

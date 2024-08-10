import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';
import Navbar from './Navbar';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleCheckout = () => {
    // Handle checkout logic here
    alert('Proceeding to checkout!');
  };

  return (
    <div>
      <Navbar/>
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
    </div>
    </div>
  );
};

export default CartPage;

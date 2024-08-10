import React, { useState } from 'react';
import './ProductPopup.css'; // Import the CSS file for styling

const ProductPopup = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="popup-container">
          <img src={product.image} alt={product.title} className="popup-image" />
          <div className="popup-details">
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>Rating: {product.rating}★</p>
            <p>Price: {product.price}</p>
            <div className="popup-quantity">
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
              </label>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;

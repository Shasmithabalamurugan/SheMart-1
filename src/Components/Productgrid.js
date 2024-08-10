import React, { useState, useContext } from 'react'; // Import useState and useContext
import './Productgrid.css';
import ProductPopup from './ProductPopup';
import { useCart } from './CartContext';

import CartContext from './CartContext'; // Import CartContext

const products = [
  // Your product data
  { id: 1, title: 'Handloom green Cotton saree with woven design', category: 'Sarees', rating: 4.4, price: '1299.00', image: 'saree1.webp' },
  { id: 2, title: 'Volta Round Table Lamp In Mango Wood 14 inch', category: 'Table Lamps', rating: 4.3, price: 'Rs 1123.00', image: 'lampp.webp' },
  { id: 6, title: 'Shankh Shaped Terracotta Handpainted Light Holder', category: 'Tea Lights', rating: 4.1, price: 'Rs. 825', image: 'tealight.webp' },
  { id: 7, title: 'Honey Bee Decorative Ceramic Wall Plate ', category: 'Wall Plates', rating: 4.3, price: 'Rs. 1,075', image: 'wallplates.jpg' },
  { id: 12, title: 'Moroccan Essentials Handpainted Ceramic Bathroom Accessory Set Of 4', category: 'Bathroom kits', rating: 4.5, price: 'Rs.1150.00', image: 'bath.webp' },
  { id: 5, title: 'Blue Bliss Hanging Planter Pot With Holder In Iron (14.2 Inch, Handcrafted & Hand-Painted)', category: 'Gardern Decor', rating: 4.5, price: 'Rs. 300', image: 'blue bliss.webp' },
  { id: 3, title: 'Cocunut milk soap 100g Organic Soaps', category: 'Soaps', rating: 4.2, price: 'Rs.192', image: 'soap3.jpg' },
  { id: 4, title: 'Sheesham Wood Round Spice Box With Spoon (7 Compartments)', category: 'Lifestyle', rating: 4.5, price: 'Rs.1071', image: 'kit.webp'},
  { id: 8, title: 'Combo Of Terracotta Handpainted Vases Set Of 3', category: 'Terracotta Vases', rating: 4.5, price: 'Rs.1650.00', image: 'vase.webp' },
  { id: 9, title: 'Vibrant Green Handcrafted Multi-utility Ceramic Storage Jar and Container (Air-Tight, 720 ml)', category: 'Ceramic Collections', rating: 4.3, price: 'Rs. 599', image: 'ceramic.webp' },
  { id: 10, title: 'Peach Handmade Wax Jar Scented Candle (60 Hours Burn Time, Soy Blend, 350 Grams, Reusable Jar)', category: 'Scented Candles', rating: 4.1, price: 'Rs. 549', image: 'candle.webp' },
  { id: 11, title: 'Cheerful Sheep Handmade & Hand Painted Planter Pot In Terracotta (8 Inches)', category: 'Decor', rating: 4.3, price: 'Rs.675', image: 'sheep.webp' },
];


function Productgrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart(); // Use context for cart

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    handleClosePopup();
  };

  return (
    <div>
    
    <div className="product-grid1">
      {products.map(product => (
        <div className="product-card6" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-info3">
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>Rating: {product.rating}★</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
    </div>
  );
}

export default Productgrid;

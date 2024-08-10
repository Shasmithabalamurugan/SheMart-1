import React from 'react';
import './TeaMugs.css';
import Navbar from './Navbar';
import c1 from '../images/c1.webp';
import c2 from '../images/c2.webp';
import c10 from '../images/c10.webp';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.webp';
import c6 from '../images/c6.webp';
import c7 from '../images/c7.webp';
import c8 from '../images/c8.webp';
import c9 from '../images/c9.webp';
import c11 from '../images/c11.webp';


const productss = [
  { id: 1, title: 'River Rims Studio Pottery Glazed Coffee Mugs In Ceramic (Set Of 2)', category: 'Tea Mugs', rating: 4.4, price: '625.00', image: c1 },
  { id: 2, title: 'Crimson Lava Dome Hand Glazed Studio Pottery Ceramic Coffee & Tea Mugs (Set Of 2)', category: 'Tea Mugs', rating: 4.4, price: '699.00', image: c2 },
  { id: 3, title: 'Coral Reef Glazed Studio Pottery Ceramic Tea & Coffee Mugs with Tray (Set of 2, 300 ml, Pink)', category: 'Tea Mugs', rating: 4.4, price: '1299.00', image: c8 },
  { id: 4, title: 'Blues Of Sky Studio Pottery Glazed Coffee Mugs In Ceramic (Set Of 2)', category: 'Tea Mugs', rating: 4.4, price: '799.00', image: c4 },
  { id: 5, title: 'Badamwari Bagheecha Hand-Painted Ceramic Tea & Coffee Mugs (Set of 2 | 240 ML | Microwave Safe)', category: 'Tea Mugs', rating: 4.4, price: '599.00', image: c5 },
  { id: 6, title: 'Cane Heirloom Tea & Coffee Mugs in Terracotta (Set of 2 | 400 ml)', category: 'Tea Mugs', rating: 4.4, price: '759.00', image: c6 },
  { id: 7, title: 'Whispers of Warli Handcrafted Ceramic Tea & Coffee Mug (300 ML | Microwave Safe)', category: 'Tea Mugs', rating: 4.4, price: '399.00', image: c7 },
  { id: 8, title: 'Coral Reef Glazed Studio Pottery Ceramic Tea & Coffee Mugs with Tray (Set of 2, 300 ml, Blue)', category: 'Tea Mugs', rating: 4.4, price: '1299.00', image: c11 },
  { id: 9, title: 'Leaf Sips Hand-Painted & Handglazed Studio Pottery Coffee & Tea Mugs In Ceramic (Set of 2)', category: 'TeaMugs', rating: 4.4, price: '649.00', image: c9 },
  { id: 10, title: 'Cocoa & Fire Carvings Studio Pottery Tea & Coffee Mugs In Ceramic (Set Of 2)', category: 'TeaMugs', rating: 4.4, price: '849.00', image: c10 },
 
];

function TeaMugs() {
  return (
    <div>
      <Navbar/>
    <div className="product-grid1">
      {productss.map(product => (
        <div className="product-card1" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-info1">
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>Rating: {product.rating}★</p>
            <p>{product.price}</p>
            <button onClick={() => (product)} className='Tea'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default TeaMugs;

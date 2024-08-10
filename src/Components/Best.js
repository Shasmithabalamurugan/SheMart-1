import React, { useEffect, useState } from 'react';
import './Best.css';
import Extra from './Extra';

const products = [
  { id: 1, name: 'The Resting Owl Pair Hand-Painted Showpiece In Wood (Set of 2)', image: 't1.webp' },
  { id: 2, name: 'Parrot Collection Wooden Hand Painted Hanging Chime With Bell', image: 't3.webp' },
  { id: 3, name: 'Shades of a Leaf Hand-Painted Terracotta Kullads (Set of 4 | 160 ml)', image: 't4.webp' },
  { id: 4, name: 'The Old Fashioned Hand Glazed Studio Pottery Ceramic Oil Bottle (1000 ML)', image: 't5.webp' },
  { id: 5, name: '13 Inch Terracotta Handpainted Warli Matki Lamp Blue', image: 'lamp.webp' },
  { id: 6, name: 'Maroon colour traditional looking chanderi cotton saree', image: 't7.webp' },
  { id: 7, name: 'Oat Milk Face Wash', image: 't8.webp' },
  { id: 8, name: 'Hand Glazed Dinner Plates With Serving Bowls(10 Pieces | Serving for 4 )', image: 't10.webp' },
];

const Best = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const rows = [
    products.slice(0, 4),
    products.slice(4, 8)
  ];

  return (
    <div className="best-container">
      <h2>Deals of the month</h2>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`trending-products ${visible ? 'visible' : ''}`}
        >
          {row.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Best;

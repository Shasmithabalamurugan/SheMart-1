import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Extra.css';
import home1 from '../images/dining.webp'; 
import a1 from '../images/shop2.webp'; 
import b1 from '../images/decor.webp'; 
import b2 from '../images/garden.webp'; 
import b3 from '../images/shop5.webp'; 
import brass from '../images/brass.webp'
import ceramic from '../images/ceramic.webp'
import wood from '../images/tera.webp'
import cotton from '../images/cotton.jpg'
import steel from '../images/image.png'
import Best from './Best';


const Extra = () => {
  const navigate = useNavigate();
  const categories1 = [
    {
      header: "What are you looking for today?",
      
      items: [
        { image: home1, title: 'Dining', link: '/products/drinkware/TeaMugs' },
        { image: a1, title: 'Lighting',  link: '/Aquasel' },
        { image: b1, title: 'Decor', link: '/badsel' },
        { image: b2, title: 'Garden', link: '/badsel' },
        { image: b3, title: 'Sarees', link: '/badsel' },
        { image: brass, title: 'Kitchenware', link: '/products/drinkware/TeaMugs' },
      ],
    },
    // {
    //   header: 'Shop by Material',
    //   items: [
    //     { image: ceramic, title: 'Ceramic',  link: '/Aquasel' },
    //     { image: b3, title: 'Tissue Cotton', link: '/badsel' },
    //     { image: wood, title: 'Teracotta', link: '/badsel' },
    //     { image: steel, title: 'Wood', link: '/badsel' },
    //   ],
    // },
  ];

  const handleImageClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="categories1">
      {categories1.map((category, index) => (
        <div key={index} className="category-section turf-booking">
          <h2>{category.header}</h2>
          <div className="cards">
            {category.items.map((item, idx) => (
              <Card key={idx} className="category-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="category-card-img"
                    onClick={() => handleImageClick(item.link)}
                  />
                  <div className="overlay">
                    <Card.Body className="category-card-body">
                      <Card.Title className="category-card-title">{item.title}</Card.Title>
                      {item.offer && <Card.Text className="category-card-text">{item.offer}</Card.Text>}
                    </Card.Body>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div>
      <Best/>
      </div>
    
    </div>
  );
};

export default Extra;
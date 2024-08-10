import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="App">
      <div className="card-container">
        <Card 
          image="image-url-1.jpg" 
          title="Move In Day Sale!" 
          description="We've got you covered with everything you need to prepare for your new space."
          backgroundColor="#fbb6c2"
        />
        <Card 
          image="image-url-2.jpg" 
          title="Tapestry Clearance!" 
          description="Find incredible deals on last seasons tapestry styles."
          backgroundColor="#fce48a"
        />
        <Card 
          image="offer.webp" 
          title="More Pillows!" 
          description='In our opinion, there is no such thing as "too many pillows".'
          backgroundColor="#ace9e4"
        />
      </div>
    </div>
  );
}

const Card = ({ image, title, description, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={image} alt={title} className="card-image"/>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services;

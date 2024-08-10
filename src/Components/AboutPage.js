// src/Components/AboutPage.jsx
import React from 'react';
import './AboutPage.css'; // Import the CSS file
import Navbar from './Navbar';
const AboutPage = () => {
  return (
        <div>
        <Navbar/>
      <section className="about-page">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-intro">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/843/773/original/woman-handcrafting-a-bag-video.jpg" alt="About Us" className="about-image" />
          <p className="about-text">
            Welcome to our company! The primary goal is to empower women in rural areas by broadening their market reach, promoting local craftsmanship, and supporting them in achieving financial independence. The website will serve as a bridge between artisans and consumers, facilitating the direct collection and distribution of products from the makers' homes.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-card">
            <h2 className="detail-title">Our Mission</h2>
            <p className="detail-text">
            This initiative not only aims to enhance the business growth of individual entrepreneurs but also contributes to the larger goal of women's empowerment and economic development in village communities.
            </p>
          </div>
          <div className="detail-card">
            <h2 className="detail-title">Our Vision</h2>
            <p className="detail-text">
              We envision a world where people are more connected to nature and make conscious choices about the products they use. Our vision is to be a leading brand in the organic product industry.
            </p>
          </div>
          <div className="detail-card">
            <h2 className="detail-title">Our Values</h2>
            <p className="detail-text">
              Integrity, transparency, and sustainability are at the core of our values. We are committed to ethical practices and maintaining the highest standards in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>
  );
};

export default AboutPage;
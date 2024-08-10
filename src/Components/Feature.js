import React from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './Feature.css';

// Import your product images


const Feature = () => {
  const products = [
    { image: 't1.webp', name: 'Flower Vase' },
    { image: 't1.webp', name: 'Flower Vase' },
    { image: 't1.webp', name: 'Flower Vase' },
    { image: 't1.webp', name: 'Flower Vase' },
    { image: 't1.webp', name: 'Flower Vase' },
    { image: 't1.webp', name: 'Flower Vase' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/product', { state: { scrollToTop: true } });
  };

  return (
    <div className="featured-products-container">
      <h2 className="featured-title">Top Featured Products</h2>
      <div className="products-carousel">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </Slider>
      </div>
      <div className="explore-button-container">
        <button className="explore-button" onClick={handleExploreClick}>
          Explore More Products
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ product, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`product-card ${inView ? 'appear' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <p>{product.name}</p>
    </div>
  );
};

export default Feature;

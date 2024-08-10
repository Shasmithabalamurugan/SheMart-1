import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Navbar from './Navbar';
import Productgrid from './Productgrid';// Import your ProductGrid component

function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Drinkware',
      subItems: [
        
        { name: 'TeaMugs', link: '/products/drinkware/TeaMugs' },
        { name: 'Jugs & Kettles', link: '/dining/drinkware/jugs-kettles' },
        { name: 'Beer Mugs', link: '/dining/drinkware/beer-mugs' },
        { name: 'Kullads', link: '/dining/drinkware/kullads' },
      ],
    },
    {
      name: 'Kitchen Storage',
      subItems: [
        { name: 'Spice Boxes', link: '/dining/kitchen-storage/spice-boxes' },
        { name: 'Oil Bottles', link: '/dining/kitchen-storage/oil-bottles' },
        { name: 'Jars & Containers', link: '/dining/kitchen-storage/jars-containers' },
        { name: 'Tea Boxes', link: '/dining/kitchen-storage/tea-boxes' },
      ],
    },
    {
      name: 'Serveware',
      subItems: [
        { name: 'Dip & Chutney Bowls', link: '/dining/serveware/dip-chutney-bowls' },
        { name: 'Dining Bowl Katoris', link: '/dining/serveware/dining-bowl-katoris' },
        { name: 'Serving Bowls', link: '/dining/serveware/serving-bowls' },
        { name: 'Quarter Plates', link: '/dining/serveware/quarter-plates' },
        { name: 'Serving Trays', link: '/dining/serveware/serving-trays' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    
    
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'Tableware',
      subItems: [
        { name: 'Napkin Holders', link: '/dining/tableware/napkin-holders' },
        { name: 'Coasters', link: '/dining/tableware/coasters' },
        { name: 'Salt & Pepper Shakers', link: '/dining/tableware/salt-pepper-shakers' },
        { name: 'Cutlery Holders', link: '/dining/tableware/cutlery-holders' },
        { name: 'Toothpick Holders', link: '/dining/tableware/toothpick-holders' },
      ],
    },
    {
      name: 'Cutlery',
      subItems: [
        { name: 'Cutlery Serving Set', link: '/dining/cutlery/cutlery-serving-set' },
        { name: 'Forks Set', link: '/dining/cutlery/forks-set' },
        { name: 'Spoons Set', link: '/dining/cutlery/spoons-set' },
        { name: 'Knives Set', link: '/dining/cutlery/knives-set' },
        { name: 'Bottle Opener', link: '/dining/cutlery/bottle-opener' },
      ],
    },
    {
      name: 'More Kitchen & Dining',
      subItems: [
        { name: 'Cutlery', link: '/dining/more-kitchen-dining/cutlery' },
        { name: 'Fruit Baskets', link: '/dining/more-kitchen-dining/fruit-baskets' },
      ],
    },
    {
      name: 'Dining Best Sellers',
      subItems: [
        { name: 'Best Seller 1', link: '/dining/dining-best-sellers/best-seller-1' },
        { name: 'Best Seller 2', link: '/dining/dining-best-sellers/best-seller-2' },
      ],
    },
  ];

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div>
      <Navbar/>
    <div className="products-page">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.name}>
              <div
                className="category-name"
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </div>
              {activeCategory === category.name && (
                <ul className="sub-category-list">
                  {category.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h1>New Collections</h1>
        <Productgrid />
        {/* Include the ProductGrid component */}
      </div>
    </div>
    </div>
  );
}

export default Products;

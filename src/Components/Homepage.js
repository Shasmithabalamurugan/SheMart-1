import React from 'react';
import './Homepage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Extra from './Extra';


const Homepage = () => {
    return (
        <div>
            <Navbar/>
        <div className='row'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="image1.webp" className="image1" alt="Slide 1" />
                            <div className='content'>
                                <h1 className='c1'>Handmade</h1>
                                <h1 className='c2'>Terracotta Vases</h1>
                                <p className='para'>Natural Beauty | Unique Craftsmanship |</p>
                                <p className='para1'>Perfect for Every Decor</p>
                                <button className='SHOPNOW'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="saree2.webp" className="image3" alt="Slide 3" />
                            <div className='content'>
                                <h1 className='c1'>Hand Woven Sarees</h1>
                                <p className='para'>Pure Cotton | Delicate patterns</p>
                                <p className='para1'>Elegant Designs | Embodying Grace</p>
                                <p className='para1'>Unmatchable Comfort</p>
                                <button className='SHOPNOW'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="lampp.webp" className="imageg" alt="Slide 2"/>
                            <div className='content'>
                                <h1 className='c1'>Table Lamps</h1>
                                <p className='para'>Discover Our Handcrafted Collection of</p>
                                <p className='para1'>Table Lamps Elegant Designs | Warm</p>
                                <p className='para1'>Ambience | Perfect for Any Room</p>
                                <button className='SHOPNOW'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="newsoap.jpg" className="image3" alt="Slide 3" />
                            <div className='content'>
                                <h1 className='c1'>Homemade Natural Soaps</h1>
                                <p className='para'>Organic Soaps and Lotions</p>
                                <p className='para1'>Herbal soaps | Lotions | Cleansers</p>
                                <p className='para1'>Serum | Oils</p>
                                <button className='SHOPNOW'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="offer.webp" className="image3" alt="Slide 3" />
                            <div className='content'>
                                <h1 className='c1'>Minimum 50% Off</h1>
                                <p className='para'>Handcrafted Treasures at </p>
                                <p className='para1'>Unbeatable Prices</p>
                                <button className='SHOPNOW'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
            </div>
                </div>
                <div className='new'>

                <Extra/>
                <Footer/>
                </div>

        </div>
        </div>
    );
};

export default Homepage;

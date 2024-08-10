// EcommerceFooter.js
import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';

import './Footer.css'; // Optional custom styles

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    {/* Company Info */}
                    <Col md={3}>
                        <h5>Company</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/about" className="text-light">About Us</Nav.Link>
                            <Nav.Link href="/careers" className="text-light">Careers</Nav.Link>
                            <Nav.Link href="/press" className="text-light">Press</Nav.Link>
                            <Nav.Link href="/privacy" className="text-light">Privacy Policy</Nav.Link>
                        </Nav>
                    </Col>
                    
                    {/* Customer Service */}
                    <Col md={3}>
                        <h5>Customer Service</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/contact" className="text-light">Contact Us</Nav.Link>
                            <Nav.Link href="/faq" className="text-light">FAQ</Nav.Link>
                            <Nav.Link href="/returns" className="text-light">Returns</Nav.Link>
                            <Nav.Link href="/shipping" className="text-light">Shipping Info</Nav.Link>
                        </Nav>
                    </Col>
                    
                    {/* Product Categories */}
                    <Col md={3}>
                        <h5>Shop By Category</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/category/electronics" className="text-light">Electronics</Nav.Link>
                            <Nav.Link href="/category/fashion" className="text-light">Fashion</Nav.Link>
                            <Nav.Link href="/category/home" className="text-light">Home & Kitchen</Nav.Link>
                            <Nav.Link href="/category/toys" className="text-light">Toys & Games</Nav.Link>
                        </Nav>
                    </Col>
                    
                    {/* Newsletter Signup */}
                    <Col md={3}>
                        <h5>Newsletter</h5>
                        <Form>
                            <Form.Group controlId="newsletterEmail">
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                        <div className="mt-3">
                            <h5>Follow Us</h5>
                            <Nav className="justify-content-start">
                                <Nav.Link href="https://facebook.com" className="text-light"><i className="fa fa-facebook"></i></Nav.Link>
                                <Nav.Link href="https://twitter.com" className="text-light"><i className="fa fa-twitter"></i></Nav.Link>
                                <Nav.Link href="https://instagram.com" className="text-light"><i className="fa fa-instagram"></i></Nav.Link>
                                <Nav.Link href="https://linkedin.com" className="text-light"><i className="fa fa-linkedin"></i></Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                        <p>Designed by <a href="https://yourdesignagency.com" className="text-light">Your Design Agency</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

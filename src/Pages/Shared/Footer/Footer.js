import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg py-5'>
            <Container>
                <Row>
                    <Col>
                        <div className='py-3 px-4'>

                            <h5 className='text-white'>Riders</h5>
                            <p>We are Riders team - a team of enthusiastic designers, marketers and developers who are specialized in creating professional premium WordPress themesOur mission is to build user–friendly, clean and modern designs in order to help more users improve their livelihood.</p>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>

                            <h5 className='text-white'>OUR SERVICES</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Products Return</ListGroup.Item>
                                <ListGroup.Item>Accessories</ListGroup.Item>
                                <ListGroup.Item>Wholesale</ListGroup.Item>
                                <ListGroup.Item>Address Store</ListGroup.Item>
                            </ListGroup>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>

                            <h5 className='text-white'>CONTACT INFO</h5>
                            <ul className='p-0 mt-4'>
                                <li className='list-unstyled mb-4'><i className="fas fa-phone-alt me-3"></i>1-677-124-44227</li>
                                <li className='list-unstyled mb-4'><i className="fas fa-map-marker-alt me-3"></i> 184 Main Collins Street</li>
                                <li className='list-unstyled'><i className="far fa-envelope me-3"></i> info@yoursite.com</li>
                            </ul>

                        </div>
                    </Col>
                    <Col>
                        <div className='py-3 px-4'>
                            <h5 className='text-white'>SOCIAL LINKS</h5>
                            <ListGroup horizontal>
                                <ListGroup.Item className='bg-success'><i className="fab fa-twitter"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-primary'><i className="fab fa-facebook-f"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-danger'><i className="fab fa-instagram"></i></ListGroup.Item>
                                <ListGroup.Item className='bg-primary'><i className="fab fa-linkedin-in"></i></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <p className='text-center py-2'>Copyright © 2021 Riders, All rights reserved.</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
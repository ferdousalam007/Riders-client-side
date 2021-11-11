import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Shared/Navigation/Header';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <>
        <Header></Header>
        <div className='bg-light py-5'>
            <Container className='py-5'>
                <h1 className='text-center mb-5'>ALL PRODUCTS</h1>

                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Col key={product._id}>
                            <Card>
                                <Card.Img variant="top" alt="product image" src={product?.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{product?.ProductsTitlle}</Card.Title>
                                    <Card.Text>
                                        {product?.ProductsDescription.slice(0, 120)}...
                                    </Card.Text>
                                    <NavLink
                                        to={`/purchase/${product?._id}`}
                                    ><Button variant="primary"><i className="fas fa-shopping-cart me-2"></i>ORDER NOW</Button>
                                    </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Products;
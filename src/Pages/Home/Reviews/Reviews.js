import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../images/review.jpg';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://limitless-river-82429.herokuapp.com/getReview")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    console.log(reviews)


    return (
        <div className='py-5' style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover" }}>
            <h1>ALL REVIEWS</h1>

            <Container>
                <Row>
                    {reviews?.map(review => <Col xs={6} md={3} key={review?._id}>
                        <Card.Body className='ccard'>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    {review?.comments}
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    <p className='text-warning'>Rating:{review?.rating}</p> <cite title="Source Title">{review?.name}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
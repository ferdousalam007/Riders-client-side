import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Navigation/Header';



const Orderpage = () => {
    const { user } = useAuth();
    let { _id } = useParams();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "pending"
        console.log(data);

        axios.post('https://limitless-river-82429.herokuapp.com/allOrder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('data insert successfully');
                    reset();
                }
            })

        reset();
    }
    const [products, setProducts] = useState({});


    useEffect(() => {
        fetch(`https://limitless-river-82429.herokuapp.com/products/${_id}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <>
            <Header></Header>
            <div className='container'>
                <Row className='py-5'>
                    <Col sm={7}>
                        <Card>
                            <Card.Img variant="top" src={products?.imgUrl} />
                            <Card.Body>
                                <Card.Title>{products?.ProductsTitlle}</Card.Title>
                                <Card.Text>
                                    {products?.ProductsDescription}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={5}>
                        <h1 className="mb-3">PLACE YOUR ORDER</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="mb-3 form-control"  {...register("name")} value={user.displayName} />
                            <input className="mb-3 form-control" {...register("email")} value={user.email} />
                            <input className="mb-3 form-control" type="number" {...register("phone")} placeholder="Enter Your phone number" />
                            <input className="mb-3 form-control" type="text" {...register("address")} placeholder="Enter Your address" />
                            <textarea className="mb-3 form-control"  {...register("description")} placeholder="Description" />
                            <input className='py-2 px-4 bg-primary text-white' type="submit" value="Place Order" />
                        </form>

                    </Col>
                </Row>

            </div>
        </>
    );
};

export default Orderpage;
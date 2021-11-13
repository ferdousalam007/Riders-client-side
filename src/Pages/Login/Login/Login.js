import React, { useState } from 'react';
import { Container, Form, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Navigation/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <>
            <Header></Header>
                <Container className="py-5 w-50">
                    <h1>Already Registered? Please Login</h1>
                    <Row>
                        <Form onSubmit={handleLoginSubmit} className="py-5 " >
                            <Form.Group
                                className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Email</Form.Label>
                                <Form.Control
                                    placeholder="Enter Your Email"
                                    type="email"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Password</Form.Label>
                                <Form.Control
                                    placeholder="Enter Your Password"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                />
                            </Form.Group>
                            <Button type="submit" variant="success">Login</Button>
                          
                            <p>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button className='text-primary fw-bold' variant="text">New User? Please Register</Button>
                                </NavLink>
                            </p>
                            {isLoading && <Spinner animation="border" />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert variant="danger">{authError}</Alert>}
                        </Form>
                        <Button onClick={handleGoogleSignIn} variant="success">Google Sign In</Button>
                    </Row>
                </Container>
                <Footer></Footer>
            </>
        </>
    );
};

export default Login;
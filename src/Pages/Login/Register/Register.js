
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import { NavLink, useHistory } from 'react-router-dom';
// import useAuth from './../../../hooks/useAuth';
import useAuth from '../../../hooks/useAuth';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <Container className="py-5 w-50">
                <Row>
                    <h1>Please Register</h1>
                    {!isLoading && <Form onSubmit={handleLoginSubmit}>
                        <Form.Group
                            className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Password</Form.Label>
                            <Form.Control
                                placeholder="Enter password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control
                                placeholder="Retype Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success">Register</Button>
                        <p><NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text" className='text-primary fw-bold'>Already Registered? Please Login</Button>
                        </NavLink></p>
                    </Form>}
                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert>}



                    {/* <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}> */}
                    {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" /> */}
                    {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" /> */}
                    {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" /> */}
                    {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" /> */}

                    {/* <Button type="submit" variant="success">Register</Button> */}
                    {/* <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink> */}
                    {/* </form>}
                        {isLoading && <Spinner animation="border" />}
                        {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                        {authError && <Alert variant="danger">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid> */}
                </Row>
            </Container>
        </>
    );
};

export default Register;
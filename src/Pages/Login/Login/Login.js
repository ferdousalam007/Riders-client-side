import React, { useState } from 'react';
import { Container, Form, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
                <Container className="py-5 w-50">
                    <h1>Already Registered? Please Login</h1>
                    <Row>
                        <Form onSubmit={handleLoginSubmit} className="py-5 " >
                            <Form.Group
                                className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Name</Form.Label>
                                <Form.Control
                                    type="email"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Your Name</Form.Label>
                                <Form.Control
                                    placeholder="Enter email"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                />
                            </Form.Group>
                            <Button type="submit" variant="success">Login</Button>
                            {/* <p> <NavLink
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink></p> */}
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
            </>



            {/* <Container>
                <Row>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p>------------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="success">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
            {/* </Grid>
                </Row >
            </Container > * /} */}
        </>
    );
};

export default Login;
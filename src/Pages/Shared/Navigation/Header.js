import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top py-4" >
                <Container>
                    <Navbar.Brand >RIDERS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link active">Explore</Link>
                            </li>
                            {user.email ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/Dashboard" className="nav-link active">Dashboard</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <span className="nav-link active fw-bold">{user.displayName}</span>
                                    </li>
                                    <li className="nav-item btn btn-danger py-0 px-4">
                                        <Link onClick={logout} to="/login" className="nav-link active">Logout</Link>
                                    </li>

                                </>

                                :
                                <>
                                    <li className="nav-item btn btn-success py-0 px-4">
                                        <Link to="/login" className="nav-link active">Login</Link>
                                    </li>
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
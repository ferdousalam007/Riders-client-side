import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../images/logout.jpg';
import './LogOut.css';

const Logout = () => {
    const { logout } = useAuth();
    return (
        <div>
            <div className="banner-error" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <h1>LOGOUT</h1>
                        <div className="mx-auto">
                        <Link onClick={logout} to="/login" className="btn btn-danger px-5 py-3">Logout</Link>
                                
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Logout;
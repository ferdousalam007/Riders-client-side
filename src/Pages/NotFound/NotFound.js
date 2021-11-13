import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div className="banner-error" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <h1>404</h1>
                    <div className="mx-auto">
                            <Link to="/home"><button className="btn btn-danger px-5 py-3">Home</button></Link>
                            
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default NotFound;
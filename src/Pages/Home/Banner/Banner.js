import React from 'react';
import "./Banner.css"
import bannerImg from '../../../images/banner.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
        <div className="banner py-100" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="banner-text text-start ">
                            <h4>START TOUR FROM HOME</h4>
                            <h1 className="mb-5">
                             A long journey including the visiting and Enjoy the rides</h1>
                            <Link to="/login"><button className="btn btn-primary px-5 py-3 me-3">Register</button></Link>
                            <Link to="/products"><button className="btn btn-danger px-5 py-3">Explore Products</button></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {/* <img src={bannerImg2} className="img-fluid" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Banner;
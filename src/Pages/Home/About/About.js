import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import whyimg from '../../../images/banner.jpg';

const About = () => {
    return (
        <div className='bg-warning'>
            <div className="container py-5 text-start">
                <div className="row">
                    <div className="col-md-6">
                        <img src={whyimg} className="img-fluid shadow-lg mb-4" alt="" />
                    </div>
                    <div className="col-md-6 pe-5">
                        <h6>WHY CHOSES US</h6>
                        <h1> Fast forward twenty three years and we're still doing what we love </h1>
                        <p>Riders Bicycle  was founded in 1997 by a group of friends who were obsessed with bicycles. With a shared determination and vision, we set out to introduce high performance, stylish and affordable bicycles to the planet.

                            _ putting our passion for design, simplicity and community into every bicycle we create and working day and night at our headquarters to make you fall in love with your daily commute</p>
                        <Link to="/products"><button className="btn btn-primary px-5 py-3">All Products</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
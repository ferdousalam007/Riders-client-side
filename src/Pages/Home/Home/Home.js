import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Navigation/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <Product/>
            <About/>
            <Reviews/>
            <Footer></Footer>

        </div>
    );
};

export default Home;
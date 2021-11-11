import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Navigation/Header';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <Reviews/>
            <Footer></Footer>

        </div>
    );
};

export default Home;
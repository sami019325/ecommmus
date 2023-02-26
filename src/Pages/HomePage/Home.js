import React from 'react';
import Cards from './Component/Cards';
import Carosel from './Component/Carosel';
import Product from './../../Components/Product'
import HomeExtra from './Component/HomeExtra';
const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <div className='md:mt-40'>
                <Cards></Cards>
            </div>
            <div className='my-48'>
                <Product />
            </div>
            <div className='mb-20'>
                <HomeExtra></HomeExtra>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Cards from './Component/Cards';
import Carosel from './Component/Carosel';
import Product from './../../Components/Product'
const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Cards></Cards>
            <Product />
        </div>
    );
};

export default Home;
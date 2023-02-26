import React from 'react';
import Card from '../../Components/Card';
import OrderCarrosel from './OrderCarrosel';

const Order = () => {
    return (
        <div className='pt-16'>
            <OrderCarrosel></OrderCarrosel>
            <div className='mt-20 w-12/12 flex items-center justify-center gap-0'>
                <input type="text" placeholder="Search product" className="input input-bordered input-primary w-full max-w-xs" />
                <button className='btn'>Search</button>
            </div>
            <hr className='hr my-5' />
            <div className='-z-50'>
                <Card />
            </div>
        </div>
    );
};

export default Order;


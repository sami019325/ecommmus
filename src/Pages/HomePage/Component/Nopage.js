import React from 'react';
import nopage from './../../../resources/image-removebg-preview.png'
const Nopage = () => {
    return (
        <div className='pt-40 flex items-center justify-center'>
            <img className='w-10/12' src={nopage} alt="404 page" srcset="" />
        </div>
    );
};

export default Nopage;
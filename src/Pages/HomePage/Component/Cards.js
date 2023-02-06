import React from 'react';
import shippingLogo from './../../../resources/66841.png'
import returnLogo from './../../../resources/3273335.png'
import secureLogo from './../../../resources/81566.png'
import moneyLogo from './../../../resources/4218816-200.png'

const Cards = () => {
    const cardData = [
        { img: shippingLogo, title: 'Free Shipping', description: `We don't have any shipping charge`, bg: 'bg-orange-300' },
        { img: returnLogo, title: 'Easy Return', description: `We have easy return policy`, bg: 'bg-cyan-300' },
        { img: secureLogo, title: 'Secure Payment', description: `Your payment is always secure`, bg: 'bg-lime-300' },
        { img: moneyLogo, title: 'Money Back', description: `We offer money back guarantee`, bg: 'bg-violet-300' },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-auto md:gap-3 md:my-5 md:w-10/12'>
            {
                cardData.map(card => <div className={`${card.bg} flex gap-2 items-center justify-center md:rounded-md p-3`}>
                    <div className='w-4/12'><img className='w-12 h-12' src={card.img} alt="" srcset="" /></div>
                    <div className='w-8/12'>
                        <h1 className='text-lg font-bold'>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cards;
import React, { useEffect, useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Card = () => {
    const [product, setProduct,] = useState([])
    useEffect(() => {
        fetch('carousel.json')
            .then(res => res.json())
            .then(data => console.log(data) + setProduct(data))
    }, [])

    return (
        <div>
            {
                product.map(p => <div className='w-11/12 m-auto my-3 sticky top-20 -z-50'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src={p.img1} alt="Album" /></figure>
                        <div className="card-body w-8/12 flex items-center justify-center">
                            <h2 className="card-title text-2xl md:text-6xl">{p.name}</h2>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;
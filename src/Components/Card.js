import React, { useEffect, useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [product, setProduct,] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => console.log(data) + setProduct(data))
    }, [])
    const notify = () => toast("Item is saved successfully");

    return (
        <div>
            <div className=''>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        product.map(p => <div className='w-11/12 m-auto my-3 '>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src={p.img1} alt="product" className='image-full h-36' /></figure>
                                <div className="card-body h-52">
                                    <h2 className="card-title">{p.name}</h2>
                                    <p>{p.type}</p>
                                    <p className='font-bold'>{p.price + ' $'}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`card/${p._id}`} className="btn btn-ghost">SEE DETAILS</Link>
                                        <button className={` btn btn-ghost rounded-full`} onClick={notify}><FaBookmark></FaBookmark></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
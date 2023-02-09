import React, { useEffect, useState } from 'react';
import { FaBookmark } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [product, setProduct,] = useState([])
    useEffect(() => {
        fetch('Resource.json')
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
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 -z-50'>
                    {
                        product.map(p => <div className='w-11/12 m-auto my-3'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src={p.img1} alt="product" className='image-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{p.name}</h2>
                                    <p>{p.details}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">SEE DETAILS</button>
                                        <button className={` btn rounded-full`} onClick={notify}><FaBookmark></FaBookmark></button>
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
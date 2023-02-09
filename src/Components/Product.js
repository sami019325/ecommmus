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

                {
                    product.map(p => <div className='w-11/12 m-auto my-3 sticky top-20 -z-50'>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src="https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-ghost">See MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Card;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaBookmark } from "react-icons/fa";

const DetailedCard = () => {
    const [product, setProduct] = useState([])
    const [bookmark, setBookmark] = useState(false)
    const [img, setImg] = useState("img2")
    // const image = "img1"
    const params = useParams()
    console.log('params', params.id)
    useEffect(() => {
        fetch(`http://localhost:5000/products/${params.id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data) + console.log('product', product)
            );
    }, [params._id])
    return (
        <div className=' bg-stone-500'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.love-your-home.co.uk/media/wysiwyg/ottilie-sofa-blog.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center bg-white rounded-2xl w-11/12 my-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full  mt-10">
                        <div className='object-contain  p-1 bg-slate-900 w-full h-96'>
                            <img className={`h-full m-auto ${img === 'img1' ? 'block' : 'hidden'}`} src={product.img1} alt="" srcset="" />
                            <img className={`h-full m-auto ${img === 'img2' ? 'block' : 'hidden'}`} src={product.img2} alt="" srcset="" />
                            <img className={`h-full m-auto ${img === 'img3' ? 'block' : 'hidden'}`} src={product.img3} alt="" srcset="" />
                        </div>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <div className='flex gap-2'>
                                <img onClick={() => setImg('img1')} className='w-20 rounded-full border-2 cursor-pointer' src={product.img1} alt="" srcset="" />
                                <img onClick={() => setImg('img2')} className='w-20 rounded-full border-2 cursor-pointer' src={product.img2} alt="" srcset="" />
                                <img onClick={() => setImg('img3')} className='w-20 rounded-full border-2 cursor-pointer' src={product.img3} alt="" srcset="" />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold'>{product.name}</h1>
                                <h2 className='text-xl'>{'Product: ' + product.type}</h2>
                                <h2 className='text-xl'>{'Product: ' + product.price}</h2>
                            </div>
                            <FaBookmark onClick={() => setBookmark(!bookmark)} className={`cursor-pointer text-2xl ${bookmark ? 'text-red-400' : 'text-black'} `}></FaBookmark>
                            <button className="btn btn-primary mt-6">Place Order</button>
                        </div>
                        <h2 className='text-xl mt-4 lg:col-span-2 text-left'>{'Product: ' + product.details}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedCard;
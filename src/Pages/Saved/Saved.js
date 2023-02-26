import React from 'react';

const Saved = () => {
    return (
        <div className='pt-20 block lg:flex w-12/12'>
            <div className="overflow-x-auto w-full lg:w-8/12">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='bg-gray-200 w-full lg:w-4/12 flex flex-col items-center justify-center'>
                <h1 className=' text-4xl'>Order now</h1>
                <p className=' text-2xl'>Total: <span>00</span></p>
                <br />
                <button className='btn btn-primary'>Place order</button>
            </div>
        </div>
    );
};

export default Saved;
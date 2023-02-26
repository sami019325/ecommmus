import React, { useContext } from 'react';
import { SharedContext } from '../SharedPage/SharedPage';
import googleLogo from './../../resources/google.png'
const LogIn = () => {
    const { GoogleSignInConst, logInCall } = useContext(SharedContext);
    const callLogIn = () => {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        logInCall(email, password)

    }
    return (
        <div className='py-20 '>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img src='https://ponderlearning.co.za/wp-content/uploads/2021/07/login.png'
                                className="w-8/12 m-auto"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form>
                                <p className="text-lg m-auto mb-5 font-bold ">Sign in with</p>
                                {/* <image  className='w-12' /> */}
                                <div className="grid h-20 card bg-base-300 rounded-box place-items-center cursor-pointer select-none" onClick={GoogleSignInConst}>
                                    <img src={googleLogo} className='w-12' alt="" srcset="" />
                                </div>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        id="emailInput"
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        id="passwordInput"
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                        >Remember me</label>
                                    </div>
                                    <a href="#!" className="text-gray-800">Forgot password?</a>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="button"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        onClick={callLogIn}>Login</button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?<a
                                            href="#!"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LogIn;
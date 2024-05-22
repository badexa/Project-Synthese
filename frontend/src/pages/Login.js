import React, { useContext, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/');
            fetchUserDetails();
            fetchUserAddToCart();
        }

        if (dataApi.error) {
            toast.error(dataApi.message);
        }
    };

    console.log("data login", data);

    return (
        <section id='login' className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                <div className='flex justify-center mb-4'>
                    <img src={loginIcons} alt='login icons' className='w-20 h-20' />
                </div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-semibold'>Email:</label>
                        <div className='flex items-center bg-gray-100 p-2 rounded-lg'>
                            <input 
                                type='email' 
                                placeholder='Enter email' 
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                className='w-full p-2 outline-none bg-transparent text-gray-700'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-700 font-semibold'>Password:</label>
                        <div className='flex items-center bg-gray-100 p-2 rounded-lg'>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder='Enter password'
                                value={data.password}
                                name='password' 
                                onChange={handleOnChange}
                                className='w-full p-2 outline-none bg-transparent text-gray-700'/>
                            <div className='cursor-pointer text-xl text-gray-600 ml-2' onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='text-right text-red-600 hover:underline mt-2'>
                            Forgot password?
                        </Link>
                    </div>
                    <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform'>
                        Login
                    </button>
                </form>
                <p className='text-center mt-4'>
                    Don't have an account? <Link to={"/sign-up"} className='text-red-600 hover:underline'>Sign up</Link>
                </p>
            </div>
        </section>
    );
}

export default Login;

"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Signup = () => {
    const [eyeOff, setEyeOff] = useState(false);
    const router = useRouter();
    const [postloader, setPostloader] = useState(false);

    const Login = (e) => {
        e.preventDefault();

        setPostloader(true);
        setTimeout(() => {
            // setPostloader(false)
            toast.success('Logged in successfully!');
            router.push("/home");

        }, 1500);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form onSubmit={Login} className='relative w-full h-full  md:w-1/4 md:h-5/6 border rounded-xl flex flex-col items-center pt-8'>
                <h1 className='text-2xl font-semibold'>Signup</h1>
                <div className='w-4/5 h-12 mt-12 border rounded-2xl border-primary-1-hover flex items-center '>
                    {/* <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg> */}
                    <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    <input type="text" className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter your fullname' />
                </div>
                <div className='w-4/5 h-12 mt-4 border rounded-2xl border-primary-1-hover flex items-center '>
                    <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    <input type="email" className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter your email' />
                </div>

                <div className='w-4/5 h-12 mt-4 border rounded-2xl border-primary-1-hover flex items-center '>
                    <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.9965 16H16.0054" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.9955 16H12.0045" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.99451 16H8.00349" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    <input type={eyeOff ? "" : "password"} className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter password' />
                    {
                        !eyeOff ?
                            <i className="ri-eye-off-line" onClick={(e) => { setEyeOff(!eyeOff) }}></i>
                            :
                            <i className="ri-eye-line text-primary-1" onClick={(e) => { setEyeOff(!eyeOff) }}></i>
                    }
                </div>
                <div className='w-4/5 mt-4 flex'>
                    <div className='w-4 h-4 border rounded border-gray-300 flex justify-center items-center'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_282)"><path d="M3.33333 8.00002L6.66666 11.3334L13.3333 4.66669" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_17_282"><rect width="16" height="16" fill="white" /></clipPath></defs></svg></div>
                    <p className='text-xs ms-2 text-gray-700'>I agree to medidoc <span className='text-primary-1'>Terms of Service</span> and <span className='text-primary-1'>Privacy Policy</span></p>

                </div>
                <button type='submit' className='w-4/5 mt-6 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >
                    {
                        postloader ?
                            <div className='loading-circul'></div>
                            :
                            "Sign Up"
                    }
                </button>
                <p className='text-sm text-gray-500 mt-4'>Already have an account ?<a href='/login' className='text-primary-1'> Login</a></p>

            </form>
        </div>
    )
}

export default Signup
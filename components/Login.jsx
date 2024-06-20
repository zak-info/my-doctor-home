"use client"

import React, { useState } from 'react'
import Credentials from './Credentials';
import Image from 'next/image';
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const [eyeOff, setEyeOff] = useState(false);
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
        <form onSubmit={Login} className='relative w-screen h-screen flex flex-col items-center pt-8'>
            <h1 className='text-2xl font-semibold'>Login</h1>
            {/* <Image src={"/images/logo.png"} height={100} width={100} className='absolute -z-10 mt-4 w-2/5 h-40 ' /> */}
            <div className='w-4/5 h-12 mt-12 border rounded-2xl border-primary-1-hover flex items-center '>
                <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#32DEB5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <input type="email" className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter your email' required />
            </div>
            <div className='w-4/5 h-12 mt-4 border rounded-2xl border-primary-1-hover flex items-center '>
                <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#32DEB5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.9965 16H16.0054" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.9955 16H12.0045" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.99451 16H8.00349" stroke="#32DEB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <input type={eyeOff ? "" : "password"} className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter password' required />
                {
                    !eyeOff ?
                        <i className="ri-eye-off-line" onClick={(e) => { setEyeOff(!eyeOff) }}></i>
                        :
                        <i className="ri-eye-line text-primary-1" onClick={(e) => { setEyeOff(!eyeOff) }}></i>
                }
            </div>
            <div className='w-4/5 text-sm text-primary-1 flex justify-end mt-2'><p>forget password ?</p></div>
            <button type='submit' className='w-4/5 mt-6 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >
                {
                    postloader ?
                        <div className='loading-circul'></div>
                        :
                        "Login"
                }
            </button>
            <p className='text-sm text-gray-500 mt-4'>Don't have an account ?<a href='/signup' className='text-primary-1'>  Sign Up</a></p>

            <Credentials />



        </form>
    )
}

export default Login
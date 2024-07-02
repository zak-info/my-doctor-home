"use client"


import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const layout = ({ children }) => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    const last_path = parts[2]
    return (
        <div className=' relative w-screen h-screen flex flex-col md:flex-row md:justify-between '>
        <div className='w-1/5 h-screen hidden md:block'></div>
            <div className='w-full md:w-3/4 md:h-full'>
                {children}
            </div>
            <div className=' absolute h-16 bg-white !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] bottom-0 w-full md:w-1/4 md:h-screen flex md:flex-col md:items-start md:ps-4 md:gap-3 md:justify-start  justify-evenly items-center'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    src="/images/logo.png" className='hidden md:block md:w-1/2 h-32 ms-10 mb-10' />
                <Link href={"/dashboard/doctors"} className={`flex items-end ${last_path == "doctors" ? "text-primary-1" : "text-gray-300"}`}>
                    <i className={`ri-home-line text-2xl  `}></i>
                    <span className='hidden md:block ms-2 font-bold'>Home</span>
                </Link>
                <Link href={"/dashboard/messages"} className={`flex items-end ${last_path == "messages" ? "text-primary-1" : "text-gray-300"}`}>
                    <i className={`ri-mail-line text-2xl `}></i>
                    <span className='hidden md:block ms-2 font-bold'>notification</span>
                </Link>
                <Link href={"/dashboard/calender"} className={`flex items-end ${last_path == "calender" ? "text-primary-1" : "text-gray-300"}`}>
                    <i className={`ri-calendar-line text-2xl`} ></i>
                    <span className='hidden md:block ms-2 font-bold'>calender</span>
                </Link>
                <Link href={"/pharmacy/jjoi"} className={`flex items-end ${last_path == "pharmacy" ? "text-primary-1" : "text-gray-300"}`}>
                    <i className={`ri-store-2-line text-2xl `}></i>
                    <span className='hidden md:block ms-2 font-bold'>pharmacy</span>
                </Link>
            </div>


        </div>
    )
}

export default layout
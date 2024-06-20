"use client"


import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const layout = ({ children }) => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    const last_path = parts[2]
    return (
        <div className=' relative w-screen h-screen'>
            {children}
            <div className=' absolute h-16 bg-white !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] bottom-0 w-full flex justify-evenly items-center'>
                <Link href={"/dashboard/doctors"}>
                    <i className={`ri-home-line text-2xl  ${last_path == "doctors" ? "text-primary-1" : "text-gray-300"}`}></i>
                </Link>
                <Link href={"/dashboard/messages"}>
                    <i className={`ri-mail-line text-2xl ${last_path == "messages" ? "text-primary-1" : "text-gray-300"}`}></i>
                </Link>
                <Link href={"/dashboard/calender"}>
                    <i className={`ri-calendar-line text-2xl ${last_path == "calender" ? "text-primary-1" : "text-gray-300"}`}></i>
                </Link>
                <Link href={"/dashboard/profile"}>
                    <i className={`ri-user-3-line text-2xl ${last_path == "profile" ? "text-primary-1" : "text-gray-300"}`}></i>
                </Link>
            </div>


        </div>
    )
}

export default layout
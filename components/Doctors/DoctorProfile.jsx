"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import Apointment from './Apointment'
import Payment from './Payment'

const DoctorProfile = () => {
    const [section, setSection] = useState("profile")


    return (
        <div className='relative w-screen h-screen flex flex-col  items-center pt-6 overflow-x-hidden'>
            <h1 className='text-xl font-bold'>Doctor Detail</h1>
            <ProfileCard />
            {
                section == "profile" ?
                    <Apointment setSection={setSection} />
                    :
                    <Payment />
            }






        </div>
    )
}

export default DoctorProfile
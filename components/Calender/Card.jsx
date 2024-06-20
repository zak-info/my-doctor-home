import Image from 'next/image'
import React from 'react'

const Card = ({data}) => {
    return (
        <div className='w-5/6 border rounded-lg px-4 mt-6 py-3'>
            <div className='w-full flex justify-between '>
                <div className='flex flex-col'>
                    <span className='text-sm'>{data.name}</span>
                    <span className='text-xs text-gray-400'>{data.job}</span>
                </div>
                <Image src={"/images/"+data?.img} width={100} height={100} className='w-10 h-10' />
            </div>
            <div className='w-full flex items-center mt-6'>
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.932861 5.87778H12.0728" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.27635 8.31846H9.28214" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.50291 8.31846H6.5087" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3.72362 8.31846H3.72941" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.27635 10.7477H9.28214" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.50291 10.7477H6.5087" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3.72362 10.7477H3.72941" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.02729 1.25V3.30674" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3.97847 1.25V3.30674" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14892 2.23706H3.85685C2.02142 2.23706 0.875 3.25952 0.875 5.13895V10.795C0.875 12.704 2.02142 13.7501 3.85685 13.7501H9.14313C10.9843 13.7501 12.125 12.7217 12.125 10.8423V5.13895C12.1308 3.25952 10.9901 2.23706 9.14892 2.23706Z" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <span className='text-xs ms-1'>26/06/2022</span>
                <svg className='ms-4' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.281 7.50024C13.281 10.6934 10.6929 13.2815 7.49976 13.2815C4.30663 13.2815 1.71851 10.6934 1.71851 7.50024C1.71851 4.30712 4.30663 1.71899 7.49976 1.71899C10.6929 1.71899 13.281 4.30712 13.281 7.50024Z" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.64458 9.3393L7.28833 7.93367V4.9043" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <span className='text-xs ms-1'>10:30 AM</span>
                <span className='w-1 h-1 bg-primary-1 rounded-full ms-4'></span>
                <span className='text-xs ms-1'>Confirmed</span>
            </div>
            <div className='w-full flex justify-evenly mt-4'>
                <button className='w-2/5 py-2 bg-secondry-1 rounded-lg'>Cancel</button>
                <button className='w-2/5 py-2 bg-primary-1 text-white rounded-lg'>Reschedule</button>

            </div>


        </div>
    )
}

export default Card
"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import DwaCard from './DwaCard'
import { motion } from 'framer-motion'
import Payment from './Payment'

const PharmacyProfile = () => {
    const [section, setSection] = useState("ph");

    return (
        <div className='w-screen h-screen pt-8 flex flex-col items-center'>
            {
                section == "ph" ?
                    <>
                        <div className='w-full flex'>
                            <Image src={"/images/ph1.svg"} width={1000} height={1000} className='w-1/3 h-20' />
                            <div className='ms-4'>
                                <div className='w-full text-sm  font-bold mt-2'>Laboratory Taleb </div>
                                <div className='w-12 flex mt-2  items-center bg-secondry-1 px-1 rounded'>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70585 6.75675C8.56556 6.89271 8.5011 7.08933 8.53306 7.28217L9.0146 9.94716C9.05523 10.173 8.9599 10.4016 8.77085 10.5322C8.5856 10.6676 8.33914 10.6838 8.1371 10.5755L5.73806 9.32425C5.65465 9.27983 5.56202 9.256 5.46723 9.25329H5.32044C5.26952 9.26087 5.21969 9.27712 5.17419 9.30204L2.7746 10.5592C2.65598 10.6188 2.52165 10.64 2.39002 10.6188C2.06935 10.5582 1.8554 10.2527 1.90794 9.93037L2.39002 7.26537C2.42198 7.07091 2.35752 6.87321 2.21723 6.73508L0.261271 4.83925C0.0976876 4.68054 0.0408126 4.44221 0.115563 4.22716C0.188146 4.01266 0.373396 3.85612 0.597104 3.82091L3.28919 3.43037C3.49394 3.40925 3.67377 3.28466 3.76585 3.1005L4.9521 0.668415C4.98027 0.614248 5.01656 0.564415 5.06044 0.522165L5.10919 0.484248C5.13465 0.456081 5.1639 0.43279 5.1964 0.413831L5.25544 0.392165L5.34752 0.354248H5.57556C5.77923 0.375373 5.95852 0.497248 6.05223 0.679248L7.25419 3.1005C7.34085 3.27762 7.50931 3.40058 7.70377 3.43037L10.3959 3.82091C10.6234 3.85341 10.8135 4.0105 10.8888 4.22716C10.9597 4.44437 10.8985 4.68271 10.7317 4.83925L8.70585 6.75675Z" fill="#32DEB5" /></svg>
                                    <span className='text-primary-1 ms-1 text-xs'>4.7</span>
                                </div>
                                <div className='flex justify-start mt-1 items-center rounded'>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.895844 4.5887C0.895844 2.09711 2.97795 0.083252 5.49646 0.083252C8.02208 0.083252 10.1042 2.09711 10.1042 4.5887C10.1042 5.84425 9.64756 7.00988 8.89599 7.99786C8.06686 9.08766 7.04493 10.0372 5.89464 10.7825C5.63137 10.9547 5.39378 10.9677 5.10484 10.7825C3.94799 10.0372 2.92606 9.08766 2.10403 7.99786C1.35192 7.00988 0.895844 5.84425 0.895844 4.5887ZM3.98022 4.72898C3.98022 5.56366 4.66132 6.22014 5.49646 6.22014C6.33214 6.22014 7.0198 5.56366 7.0198 4.72898C7.0198 3.90079 6.33214 3.21235 5.49646 3.21235C4.66132 3.21235 3.98022 3.90079 3.98022 4.72898Z" fill="#3B4453" /></svg>
                                    <span className='ms-1 text-xs'>800m away</span>
                                </div>

                            </div>
                        </div>

                        <div className='w-4/5 h-12 mt-6 border rounded-full border-primary-1-hover flex items-center '>
                            <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H15.1076V15.1077H0.5V0.5Z" fill="white" /></mask><g mask="url(#mask0_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.80413 1.625C4.39688 1.625 1.62488 4.39625 1.62488 7.8035C1.62488 11.2107 4.39688 13.9827 7.80413 13.9827C11.2106 13.9827 13.9826 11.2107 13.9826 7.8035C13.9826 4.39625 11.2106 1.625 7.80413 1.625ZM7.80413 15.1077C3.77663 15.1077 0.499878 11.831 0.499878 7.8035C0.499878 3.776 3.77663 0.5 7.80413 0.5C11.8316 0.5 15.1076 3.776 15.1076 7.8035C15.1076 11.831 11.8316 15.1077 7.80413 15.1077Z" fill="#ADADAD" /></g><mask id="mask1_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="12" width="5" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9299 12.2803H15.698V16.0413H11.9299V12.2803Z" fill="white" /></mask><g mask="url(#mask1_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1356 16.0413C14.9924 16.0413 14.8484 15.9866 14.7381 15.8771L12.0951 13.2416C11.8754 13.0218 11.8746 12.6656 12.0944 12.4458C12.3134 12.2246 12.6696 12.2261 12.8901 12.4443L15.5331 15.0806C15.7529 15.3003 15.7536 15.6558 15.5339 15.8756C15.4244 15.9866 15.2796 16.0413 15.1356 16.0413Z" fill="#ADADAD" /></g></svg>
                            <input type="text" className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter your desire search' />
                        </div>

                        <div className='w-4/5 flex justify-between p-2 rounded-xl mt-4 bg-secondry-1 '>
                            <div className=''>
                                <div className='w-full text-sm  font-bold mt-2'>Order quickly with prescription  </div>
                                {/* <div className='w-12 flex mt-2  items-center bg-secondry-1 px-1 rounded'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70585 6.75675C8.56556 6.89271 8.5011 7.08933 8.53306 7.28217L9.0146 9.94716C9.05523 10.173 8.9599 10.4016 8.77085 10.5322C8.5856 10.6676 8.33914 10.6838 8.1371 10.5755L5.73806 9.32425C5.65465 9.27983 5.56202 9.256 5.46723 9.25329H5.32044C5.26952 9.26087 5.21969 9.27712 5.17419 9.30204L2.7746 10.5592C2.65598 10.6188 2.52165 10.64 2.39002 10.6188C2.06935 10.5582 1.8554 10.2527 1.90794 9.93037L2.39002 7.26537C2.42198 7.07091 2.35752 6.87321 2.21723 6.73508L0.261271 4.83925C0.0976876 4.68054 0.0408126 4.44221 0.115563 4.22716C0.188146 4.01266 0.373396 3.85612 0.597104 3.82091L3.28919 3.43037C3.49394 3.40925 3.67377 3.28466 3.76585 3.1005L4.9521 0.668415C4.98027 0.614248 5.01656 0.564415 5.06044 0.522165L5.10919 0.484248C5.13465 0.456081 5.1639 0.43279 5.1964 0.413831L5.25544 0.392165L5.34752 0.354248H5.57556C5.77923 0.375373 5.95852 0.497248 6.05223 0.679248L7.25419 3.1005C7.34085 3.27762 7.50931 3.40058 7.70377 3.43037L10.3959 3.82091C10.6234 3.85341 10.8135 4.0105 10.8888 4.22716C10.9597 4.44437 10.8985 4.68271 10.7317 4.83925L8.70585 6.75675Z" fill="#32DEB5" /></svg>
                        <span className='text-primary-1 ms-1 text-xs'>4.7</span>
                    </div>
                    <div className='flex justify-start mt-1 items-center rounded'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.895844 4.5887C0.895844 2.09711 2.97795 0.083252 5.49646 0.083252C8.02208 0.083252 10.1042 2.09711 10.1042 4.5887C10.1042 5.84425 9.64756 7.00988 8.89599 7.99786C8.06686 9.08766 7.04493 10.0372 5.89464 10.7825C5.63137 10.9547 5.39378 10.9677 5.10484 10.7825C3.94799 10.0372 2.92606 9.08766 2.10403 7.99786C1.35192 7.00988 0.895844 5.84425 0.895844 4.5887ZM3.98022 4.72898C3.98022 5.56366 4.66132 6.22014 5.49646 6.22014C6.33214 6.22014 7.0198 5.56366 7.0198 4.72898C7.0198 3.90079 6.33214 3.21235 5.49646 3.21235C4.66132 3.21235 3.98022 3.90079 3.98022 4.72898Z" fill="#3B4453" /></svg>
                        <span className='ms-1 text-xs'>800m away</span>
                    </div> */}
                                <span className='px-2 py-1 rounded-lg bg-primary-1 text-xs mt-4 text-white'>Upload prescription</span>

                            </div>
                            <Image src={"/images/dwa.svg"} width={1000} height={1000} className='w-1/3 h-20 ' />
                        </div>

                        <div className='w-4/5 flex justify-between mt-4'>
                            <span className='text-sm font-bold'>Popular product</span>
                            <span className='text-xs text-primary-1'>see all</span>
                        </div>

                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            <DwaCard data={{ img: "dwa2.svg", name: "panadol", pc: "20 pc", price: "1345 DZD" }} />
                            <DwaCard data={{ img: "dwa3.svg", name: "GAVISCON ", pc: "24 pc", price: "845 DZD" }} />
                            <DwaCard data={{ img: "dwa4.svg", name: "Lmodium ", pc: "20 pc", price: "345 DZD" }} />
                            <DwaCard data={{ img: "dwa3.svg", name: "GAVISCON ", pc: "24 pc", price: "845 DZD" }} />
                            <DwaCard data={{ img: "dwa4.svg", name: "Lmodium ", pc: "20 pc", price: "345 DZD" }} />
                            <DwaCard data={{ img: "dwa2.svg", name: "panadol", pc: "20 pc", price: "1345 DZD" }} />
                        </div>
                    <motion.div  
                        onClick={()=>{setSection("payments")}}
                        initial={{ opacity: 0, y: 180 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className='w-1/2 bg-primary-1 mt-4 py-3 flex justify-center rounded-full font-semibold text-white' >check</motion.div>
                    </>
                    :
                    <>
                    <Payment />
                    </>
            }


        </div>
    )
}

export default PharmacyProfile
"use client"

import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import Guid1 from './Guids/Guid1'
import Guid2 from './Guids/Guid2';
import Guid3 from './Guids/Guid3';
import Guid4 from './Guids/Guid4';
import Guid5 from './Guids/Guid5';
import Guid6 from './Guids/Guid6';

const Home = () => {
    const [order, setOrder] = useState(0);
    return (
        <div className=' w-screen h-screen flex flex-col items-center pt-16'>
            <AnimatePresence mode="wait">
                {
                    order == 0 ?
                        <Guid1 setOrder={setOrder} />
                        :
                        order == 1 ?
                            <Guid2 setOrder={setOrder} />
                            : order == 2 ?
                                <Guid3 setOrder={setOrder} />
                                : order == 3 ?
                                    <Guid4 setOrder={setOrder} />
                                    : order == 4 ?
                                        <Guid5 setOrder={setOrder} />
                                        : order == 5 ?
                                            <Guid6 setOrder={setOrder} />
                                            : null
                }
            </AnimatePresence>
        </div>
    )
}

export default Home
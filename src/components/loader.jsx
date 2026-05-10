"use client"
import React from 'react';


const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-linear-to-r from-[#1c2833] to-[#0a0f1b]  backdrop-blur-xl'>
            <div className='flex flex-col items-center gap-1 animate-pulse'>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                    <img className='w-16' src="https://i.ibb.co.com/tThXTWJ1/Green-Minimalist-Initials-Logo-removebg-preview.png" alt="" />
                </div>
                <h1 className=' uppercase'>Jahid Hasan</h1>
                <p className='text-text-secondary uppercase  tracking-wider text-xs'>Initializing Portfolio</p>

                <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-[loading_1s_linear_infinite]"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
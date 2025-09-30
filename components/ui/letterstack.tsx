"use client"
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { Expand, Minimize } from 'lucide-react'


export const LetterStack = () => {
    const [current, setCurrent] = useState(-1)
  return (
    <div
    style={{
        perspective: "1000px",
        maskImage: "linear-gradient(to bottom, black 70%, transparent 92%)"
    }} 
    className="w-full md:w-[600px] relative h-[400px] items-center justify-center">
        {
            Array.from({length: 3}).map((_, i) => 
                <m.div
                whileHover={{y: current !== i ? -10 : 0}}
                style={{
                    transformStyle: "preserve-3d",
                    bottom: i * -40,
                    transform: `translateZ(${ i * 20}px)`,
                    boxShadow: "2px 2px 12px 2px black",
                    scale: 1 - (4 - i) * 0.055
                }} 
                animate={{
                    scale: i === current ? 1 : 1 - (4 - i) * 0.055,
                    zIndex: i === current ? 20 : 10,
                    bottom: i === current ? 0 :  i * -40,
                    color: i === current ? "#FFFFFF" : "#a1a1a1"
                }}
                transition={{
                    duration: 0.2
                }}
                key={i} className='absolute bg-black border border-gray-600 text-white hover:bg-[#111111] 
                -translate-y-[50%] mx-auto w-full h-[200px] left-0 right-0 cursor-pointer rounded-3xl p-6'>
                    <div className="w-full h-full flex gap-2">
                        <div className='flex flex-col gap-4'>
                            <p>Dear Oliver,</p>
                            <p>I hope you are doing well! I wanted to share my excitement about creating websites
                                 with Framer Motion. Creating smooth and intuitive interactions.
                            </p>
                            
                        </div>
                        <m.div
                        animate={{
                            rotate: current === i ? 15 : 0
                        }} 
                        className="relative w-50 h-20 border-3 border-white">
                            {
                                current !== i ?
                                <div onClick={() => setCurrent(i)} 
                                className='p-1 rounded-full text-black bg-white absolute z-10 -top-3 -right-3'><Expand size={18}/></div> :
                                <div onClick={() => setCurrent(-1)} 
                                className='p-1 rounded-full text-black bg-white absolute z-10 -top-3 -right-3'><Minimize size={18}/></div>
                            }
                            <Image src={"/images.jpeg"} fill alt='profile'/>
                        </m.div>
                    </div>
                </m.div>
            )
        }
    </div>
  )
}

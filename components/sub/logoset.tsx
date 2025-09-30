"use client"
import React from 'react'
import { motion as m } from 'framer-motion'

export const LogoSet = () => {
  return (
    <div className='flex-center gap-2'>
        <div className='bg-black w-8 h-8 text-white flex-center justify-center overflow-hidden rounded-md font-bold relative'>
            Ax
            <m.div initial={{x: -100}} animate={{x: 100}} transition={{repeat: Infinity, duration: 4, ease: "easeIn"}} 
            className='absolute w-1/2 h-full bg-white top-0 blur-[15px]'/>
        </div>
        <div className='flex-center gap-1'>
            <span className='font-bold text-2xl text-transparent bg-clip-text blue-gradient'>AnimateX</span>
            <span className='px-1 py-0 border-2 border-dashed border-col'>Pro</span>
        </div>
    </div>
  )
}

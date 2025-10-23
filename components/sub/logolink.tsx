"use client"
import React from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"/"} className='bg-black w-8 h-8 text-white flex-center justify-center overflow-hidden rounded-md font-bold relative'>
        Ax
        <m.div initial={{x: -100}} animate={{x: 100}} transition={{repeat: Infinity, duration: 4, ease: "easeIn"}} 
        className='absolute w-1/2 h-full bg-white top-0 blur-[15px]'/>
    </Link>
  )
}

export default Logo
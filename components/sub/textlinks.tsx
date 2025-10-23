"use client"
import Link from 'next/link'
import React from 'react'
import { motion as m } from 'framer-motion'

interface props{
    text: string,
    link: string
}

const TextLinks = ({text, link}:props) => {
  return (
    <m.div initial="initial" whileHover="hovers" className='w-fit h-fit pb-[2px] relative'>
          <m.div variants={{
                "initial": {opacity: 0 },
                "hovers": {opacity: 1}
            }} className='absolute bg-linear-90 from-transparent via-[var(--primary)] to-transparent -z-10 w-full h-full'/>
         <Link href={link} className='relative w-fit h-fit'>
            <span className='bg-[var(--secondary)] h-full p-1 text-[14px]'>{text}</span>
        </Link>
    </m.div>
  )
}

export default TextLinks





export const TextLink2 = ({text, link}:props) => {
  return (
    <m.div whileHover="hovered">
       <Link href={link} className='p-2 h-30 border flex-center justify-center bg-radial from-transparent 
          relative from-70% to-blue-300/10 border-col hover:to-blue-300/15 rounded-xl'>
              <m.span variants={{
                "hovered": {y: -7}
              }}>{text}</m.span>
          </Link>
    </m.div>
  )
}

export const TextLink3 = ({text, link}:props) => {
  return (
    <m.div initial="initial" whileHover="hovers" className='w-fit h-fit pb-[2px] relative'>
          <m.div variants={{
                "initial": {opacity: 0 },
                "hovers": {opacity: 1}
            }} className='absolute bg-linear-90 from-transparent via-[var(--primary)] to-transparent -z-10 w-full h-full'/>
         <Link href={link} className='relative w-fit h-fit'>
            <span className='bg-[var(--bg)] h-full p-1 text-[14px]'>{text}</span>
        </Link>
    </m.div>
  )
}
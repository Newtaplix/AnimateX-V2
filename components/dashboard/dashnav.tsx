"use client"
import React from 'react'
import { TextLink3 } from '../sub/textlinks'
import { ThemeToggler } from '../main/ThemeProvider'
import { PrimaryButton } from '../sub/primarybutton'
import { motion as m } from 'framer-motion'
import { Socials } from '../sub/Socials'
import { Sidebar } from 'lucide-react'
import { useNavToggle } from '@/utils/store'

export const DashNav = () => {
  const { setToggle} = useNavToggle()
  return (
    <div className='p-2 flex-center justify-between w-full border-b-1 border-col bg-[var(--bg)] z-60 fixed left-0 top-0'>
         <div className='flex-center gap-2'>
            <div className='bg-black w-8 h-8 text-white flex-center justify-center overflow-hidden rounded-md font-bold relative'>
                Ax
                <m.div initial={{x: -100}} animate={{x: 100}} transition={{repeat: Infinity, duration: 4, ease: "easeIn"}} 
                className='absolute w-1/2 h-full bg-white top-0 blur-[15px]'/>
            </div>
            <div className='md:flex-center hidden md:flex gap-2 '>
            <TextLink3 link='/components' text='Components'/>
            <TextLink3 link='/learn' text='Learn'/>
            <TextLink3 link='#' text='Templates'/>
            </div>
        </div>
        <div className='flex-center'>
            <ThemeToggler/>
            <Sidebar size={20} onClick={setToggle} className='md:hidden'/>
            {/* <PrimaryButton text='Sign Up' type='link' className='p-2 hidden md:flex rounded-full text-[14px] px-4'/> */}
        </div>
    </div>
  )
}

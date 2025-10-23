"use client"
import React from 'react'
import { TextLink3 } from '../sub/textlinks'
import { ThemeToggler } from '../main/ThemeProvider'
import { Sidebar } from 'lucide-react'
import { useNavToggle } from '@/utils/store'
import Logo from '../sub/logolink'

export const DashNav = () => {
  const { setToggle} = useNavToggle()
  return (
    <div className='p-2 flex-center justify-between w-full border-b-1 border-col bg-[var(--bg)] z-60 fixed left-0 top-0'>
         <div className='flex-center gap-2'>
            <Logo/>
            <div className='md:flex-center hidden md:flex gap-2 '>
            <TextLink3 link='/components' text='Components'/>
            <TextLink3 link='/learn' text='Learn'/>
            <TextLink3 link='#' text='Templates'/>
            </div>
        </div>
        <div className='flex-center gap-2'>
            <ThemeToggler/>
            <Sidebar size={25} onClick={setToggle} className='md:hidden cursor-pointer p-1 hover:bg-[var(--secondary-hover)] rounded'/>
            {/* <PrimaryButton text='Sign Up' type='link' className='p-2 hidden md:flex rounded-full text-[14px] px-4'/> */}
        </div>
    </div>
  )
}

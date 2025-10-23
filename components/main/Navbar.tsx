import React from 'react'
import { ThemeToggler } from './ThemeProvider'
import { PrimaryButton } from '../sub/primarybutton'
import TextLinks from '../sub/textlinks'
import Logo from '../sub/logolink'

export const Navbar = () => {
 
  return (
    <div className='fixed top-2 rounded-xl md:rounded-full w-[98%] md:w-full max-w-[800px] flex-center justify-between p-1 border-col border
     mx-auto left-0 right-0 bg-[var(--secondary)] z-60'>
        <div className='flex-center gap-2 pl-2 md:pl-4'>
            <Logo/>
           <div className='md:flex-center hidden md:flex gap-2 '>
           
            <TextLinks link='/components' text='Components'/>
            <TextLinks link='/learn' text='Learn'/>
            <TextLinks link='#' text='Templates'/>
           </div>
        </div>
        <div className='flex-center'>
            <ThemeToggler/>
            <PrimaryButton text='Sign Up' type='link' className='p-2 rounded-full text-[14px] px-4'/>
        </div>
       
    </div>
  )
}

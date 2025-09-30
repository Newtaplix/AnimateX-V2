"use client"
import React from 'react'
import { LogoSet } from '../sub/logoset'
import { ThemeToggler } from '../main/ThemeProvider'
import { Blocks, MousePointer, Text, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import clsx from "clsx"
import { useNavToggle } from '@/utils/store'

export const Sidebar = () => {
    const { isOpen, setToggle} = useNavToggle()
    const links = [
        {
            icon: <Text size={16}/>,
            text: "Documentation"
        },
        {
            icon: <Zap size={16}/>,
            text: "Templates"
        },
        {
            icon: <Blocks size={16}/>,
            text: "Blocks"
        }
    ]

    const components = [
        {
            catergory: "Buttons",
            icon: <MousePointer size={16}/>,
            content: [
                {
                    text: "Gooey",
                    link: "#"
                }
            ]
        }
    ]
  return (
    <div className={clsx('w-70 transition-all duration-400 fixed flex flex-col pt-14 bg-[var(--bg)] left-0 top-0 border-r-1 border-col min-h-screen', 
        isOpen ? "translate-x-0 md:translate-x-0" : "-translate-x-100 md:translate-x-0"
    )}>
        {/* <div className='flex flex-col gap-2 py-2 border-b-1 w-full border-col pt-8'>
            <div className='flex items-center w-full justify-between px-1'>
                <LogoSet/>
                <ThemeToggler/>
            </div>
        </div> */}
        <div className='p-2'>
            {
                links.map((link, i) => 
                    <m.div whileHover="hovered" key={i} className='flex-center text-[14px] gap-2 hover:bg-[var(--secondary-hover)] cursor-pointer p-2 py-1 rounded-md'>
                        {link.icon}
                        <m.span variants={{"hovered": {x : 5}}}>
                           <Link href={'#'}>{link.text}</Link>
                        </m.span>
                    </m.div>
                )
            }
            <div className='mt-2 text-[14px]'>
                {
                    components.map((component, i) => 
                      <div key={i} className='p-2'>
                        <div className='flex-center gap-2'>
                            {component.icon}
                            {component.catergory}
                        </div>
                        <div>
                            {
                                 component.content.map((cont, i) => 
                                    <m.div whileHover="hovered" key={i} 
                                        className='flex-center gap-2 hover:bg-[var(--secondary-hover)] cursor-pointer
                                        p-2 py-1 rounded-md'>
                                            <m.span variants={{"hovered": {x : 5}}}>
                                            <Link href={'#'}>{cont.text}</Link>
                                            </m.span>
                                        </m.div>
                                )
                            }
                        </div>
                      </div>
                    )
                } 
            </div>
        </div>
    </div>
  )
}

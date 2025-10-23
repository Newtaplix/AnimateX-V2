"use client"
import React from 'react'
import { Blocks, Drama, Flower, MousePointer, Text, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import clsx from "clsx"
import { useNavToggle } from '@/utils/store'

interface content{
    link: string,
    tag?: string,
    text: string
}

interface components{
    category: string,
    icon: React.ReactNode,
    content: content[]
}

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
            icon: <Flower size={16}/>,
            text: "Gallery",
            link: "/components/gallery"
        }
    ]

    const components: components[] = [
        {
            category: "Buttons",
            icon: <MousePointer size={16}/>,
            content: [
                {
                    text: "Copy",
                    link: "/components/glimmercopy"
                },
                {
                    text: "Aero Button",
                    link: "/components/aerobutton"
                },
                {
                    text: "Arrow Button",
                    link: "/components/arrow",
                    tag: "Pro"
                }
            ]
        },
        {
            category: "Carousels",
            icon: <Drama size={18}/>,
            content: [
                {
                    text: "Stagger Cards",
                    link: "/components/staggercards",
                    tag: "Pro"
                },
                {
                    text: "Highlight Cards",
                    link: "/components/rotate",
                    tag: "Pro"
                },
                {
                    text: "Canvas",
                    link: "/components/canvas",
                    tag: "Pro"
                },
                {
                    text: "Swift",
                    link: "/components/swift",
                    tag: ""
                }
            ]

        },
        {
            category: "Modals",
            icon: <Blocks size={18}/>,
            content: [
                {
                    text: "Dailog",
                    link: "/components/dailog"
                },
                {
                    text: "Report Bug",
                    link: "/components/bug",
                    tag: "Pro"
                }
            ]

        },
        {
            category: "Cards",
            icon: <Blocks size={18}/>,
            content: [
                {
                    text: "Flip",
                    link: "/components/flip",
                    tag: "Pro"
                }
            ]

        }
    ]
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={setToggle}
        />
      )}
      
      {/* we are trying */}
      <div className={clsx('w-60 transition-all duration-400 fixed flex flex-col pt-14 bg-[var(--bg)] left-0 top-0 border-r-1 border-col min-h-screen z-50', 
          isOpen ? "translate-x-0 md:translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
         
          <div className='p-2'>
            {
                links.map((link, i) => 
                    <Link href={link.link ? link.link : ""} key={i}>
                        <m.div whileHover="hovered" className='flex-center text-[14px] gap-2 hover:bg-[var(--secondary-hover)] 
                        cursor-pointer p-2 py-1 rounded-md'>
                                {link.icon}
                            <m.span variants={{"hovered": {x : 5}}}>
                                {link.text}
                            </m.span>
                        </m.div>
                    </Link>
                )
            }
            <div className='mt-2 text-[14px]'>
                {
                    components.map((component, i) => 
                      <div key={i} className='p-2'>
                        <div className='flex-center gap-2'>
                            {component.icon}
                            {component.category}
                        </div>
                        <div>
                            {
                                 component.content.map((cont, i) => 
                                    <Link href={cont.link} onClick={setToggle} key={i} >
                                        <m.div whileHover="hovered" 
                                            className='flex-center gap-2 hover:bg-[var(--secondary-hover)] cursor-pointer
                                            p-2 py-1 rounded-md'>
                                                <m.span className='flex-center gap-4' variants={{"hovered": {x : 5}}}>
                                                    {cont.text}
                                                    {cont.tag ? <span className='blue-gradient-text text-xs h-fit'>{cont.tag}</span> : ""}
                                                </m.span>
                                        </m.div>
                                    </Link>
                                )
                            }
                        </div>
                      </div>
                    )
                } 
            </div>
        </div>
      </div>
    </>
  )
}

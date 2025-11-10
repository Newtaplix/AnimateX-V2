"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type DialogProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode,
    className?: string ,
    buttonStyle?: string,
    buttonText?: string
}



export const Dailog: React.FC<DialogProps> = ({children, className, buttonStyle, buttonText="Open Dialog"}) => {
    const defaultClass = 'p-4 w-[85%] z-90 md:w-[500px] h-auto bg-white border-1 shadow-2xl shadow-[#e2e2e2] border-gray-400/40 rounded-xl dark:bg-[#0b0b0f] dark:border-gray-900 dark:shadow-black'

    const [isOpen, setIsOpen] = useState(false)

    const dialogVariant:Variants = {
        "hidden": {
            rotateX: 15,
            rotateY: 15
        },
        "visible": {
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const containerVaraint:Variants = {
        "hidden": {opacity: 0},
        "visible": {opacity: 1}
    } 
  return (
    <div>
        <AnimatePresence>
            {
                isOpen &&
                <m.div 
                key="modal"
                variants={containerVaraint} 
                initial="hidden" 
                animate={isOpen && "visible"} 
                exit="hidden"
                style={{
                    perspective: "1000px"
                }}
                className='min-w-screen fixed bg-transparent backdrop-blur-[2px] flex items-center justify-center
                    top-0 left-0 z-80 min-h-screen'>

                    <m.div 
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(50px)"
                    }}
                    variants={dialogVariant}
                    initial="hidden"
                    animate={isOpen && "visible"}
                    exit="hidden"
                    className={cn( defaultClass,
                    className ? className : "")}>
                        <span onClick={() => setIsOpen(false)} className='p-1 rounded-md cursor-pointer 
                        hover:bg-gray-50 absolute top-2 right-2 dark:hover:bg-neutral-800'>
                            <X size={18}/>
                        </span>
                       {children}
                    </m.div>

                </m.div>
            }

             <m.button whileTap={{scale: 0.97}} onClick={() => setIsOpen(true)}
                className={cn('bg-black p-2 rounded-md px-4 cursor-pointer',
                    buttonStyle ? buttonStyle : ""
                )}>
                {buttonText}
            </m.button>
           
        </AnimatePresence>

    </div>
  
  )
}


export const usecasecode = `
import React from 'react'
import { CircleAlert } from 'lucide-react'

export const page = () => {
  return (
    <Dailog buttonStyle='bg-linear-180 cursor-pointer from-blue-300 to-blue-500'>
        <div className='w-full flex flex-col gap-4 items-center justify-center'>
        <CircleAlert size={50} className='text-red-500 rounded-full'/>
        <p className='text-center'>
            You are about to delete the file <span className='text-black dark:text-white'>AnimateX</span>. 
            This action can't be reversed. Type in the file name to confirm.
        </p>
        <input placeholder='AnimateX' className='rounded-md p-1 px-2 w-full dark:bg-[#0b0b0f] dark:text-white
            bg-white outline-2 outline-gray-400/40
            text-black dark:outline-gray-600'/>
        <div className='w-full flex gap-4 items-center justify-end'>
            <button 
                className='p-1 rounded-md px-4 black bg-black text-white dark:bg-white dark:text-black'>
                    Delete</button>
            </div>
        </div>
    </Dailog>
    )
}
`




export const CodeTS = `
"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/app/lib/utils'

type DialogProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode,
    className?: string ,
    buttonStyle?: string,
    buttonText?: string
}



export const Dailog: React.FC<DialogProps> = ({children, className, buttonStyle, buttonText="Open Dialog"}) => {
    const defaultClass = 'p-4 w-[85%] z-90 md:w-[500px] h-auto bg-white border-1 shadow-2xl shadow-[#e2e2e2] border-gray-400/40 rounded-xl dark:bg-[#0b0b0f] dark:border-gray-900 dark:shadow-black'

    const [isOpen, setIsOpen] = useState(false)

    const dialogVariant:Variants = {
        "hidden": {
            rotateX: 15,
            rotateY: 15
        },
        "visible": {
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const containerVaraint:Variants = {
        "hidden": {opacity: 0},
        "visible": {opacity: 1}
    } 
  return (
    <div>
        <AnimatePresence>
            {
                isOpen &&
                <m.div 
                key="modal"
                variants={containerVaraint} 
                initial="hidden" 
                animate={isOpen && "visible"} 
                exit="hidden"
                style={{
                    perspective: "1000px"
                }}
                className='min-w-screen fixed bg-transparent backdrop-blur-[2px] flex items-center justify-center
                    top-0 left-0 z-80 min-h-screen'>

                    <m.div 
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(50px)"
                    }}
                    variants={dialogVariant}
                    initial="hidden"
                    animate={isOpen && "visible"}
                    exit="hidden"
                    className={cn( defaultClass,
                    className ? className : "")}>
                        <span onClick={() => setIsOpen(false)} className='p-1 rounded-md cursor-pointer 
                        hover:bg-gray-50 absolute top-2 right-2 dark:hover:bg-neutral-800'>
                            <X size={18}/>
                        </span>
                       {children}
                    </m.div>

                </m.div>
            }

             <m.button whileTap={{scale: 0.97}} onClick={() => setIsOpen(true)}
                className={cn('bg-black p-2 rounded-md px-4 cursor-pointer',
                    buttonStyle ? buttonStyle : ""
                )}>
                {buttonText}
            </m.button>
           
        </AnimatePresence>

    </div>
  
  )
}

`

export const CodeJS = `
import React, { useState } from 'react'
import { AnimatePresence, motion as m} from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/app/lib/utils'


export const Dailog: React.FC = ({children, className, buttonStyle, buttonText="Open Dialog"}) => {
    const defaultClass = 'p-4 w-[85%] z-90 md:w-[500px] h-auto bg-white border-1 shadow-2xl shadow-[#e2e2e2] border-gray-400/40 rounded-xl dark:bg-[#0b0b0f] dark:border-gray-900 dark:shadow-black'

    const [isOpen, setIsOpen] = useState(false)

    const dialogVariant = {
        "hidden": {
            rotateX: 15,
            rotateY: 15
        },
        "visible": {
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const containerVaraint = {
        "hidden": {opacity: 0},
        "visible": {opacity: 1}
    } 
  return (
    <div>
        <AnimatePresence>
            {
                isOpen &&
                <m.div 
                key="modal"
                variants={containerVaraint} 
                initial="hidden" 
                animate={isOpen && "visible"} 
                exit="hidden"
                style={{
                    perspective: "1000px"
                }}
                className='min-w-screen fixed bg-transparent backdrop-blur-[2px] flex items-center justify-center
                    top-0 left-0 z-80 min-h-screen'>

                    <m.div 
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(50px)"
                    }}
                    variants={dialogVariant}
                    initial="hidden"
                    animate={isOpen && "visible"}
                    exit="hidden"
                    className={cn( defaultClass,
                    className ? className : "")}>
                        <span onClick={() => setIsOpen(false)} className='p-1 rounded-md cursor-pointer 
                        hover:bg-gray-50 absolute top-2 right-2 dark:hover:bg-neutral-800'>
                            <X size={18}/>
                        </span>
                       {children}
                    </m.div>

                </m.div>
            }

             <m.button whileTap={{scale: 0.97}} onClick={() => setIsOpen(true)}
                className={cn('bg-black p-2 rounded-md px-4 cursor-pointer',
                    buttonStyle ? buttonStyle : ""
                )}>
                {buttonText}
            </m.button>
           
        </AnimatePresence>

    </div>
  
  )
}

`
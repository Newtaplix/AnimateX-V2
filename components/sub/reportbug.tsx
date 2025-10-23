"use client"
import { BadgeCheck, Bug, Loader2, X } from 'lucide-react'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { cn } from '@/app/lib/utils'


interface bugprops{
    buttonStyle?: string,
    className?: string,
    children?: React.ReactNode,
    onSubmit?: () => void,
    buttonText?: string | React.ReactNode,
    validationMessage?: string,
    id?: string | number,
    isValid?: boolean,
    isError?: boolean,
    borderRaduis?:number | string ,
    toggleStyle?: string,
    shimmerStyle?: string,
}


export const ReportBug = ({
    toggleStyle,
    buttonStyle,
    shimmerStyle, 
    className, 
    isValid = false, 
    children, 
    isError = false, 
    onSubmit,
    borderRaduis="12px", 
    validationMessage = "Reported Successfully!", 
    id=1, buttonText = <span className='flex gap-2 items-center'><Bug size={18}/>Report a bug</span>}:bugprops) => {
    const [isOpen, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const containerRef = useRef<HTMLFormElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(!containerRef.current) return;
        setWidth(containerRef.current.offsetWidth)
        if(isValid){
            setIsLoading(false)
            setIsDone(true)

           setTimeout(() => {
            setOpen(false)
            setIsDone(false)
            setIsLoading(false)
           }, 3000)
        }
        if(isError){
            setIsLoading(false)
        }
    }, [isValid, isError])

    const handleFormSubmitted = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if(onSubmit){
            onSubmit()
        }
    }

    const textVariant: Variants = {
        "initial": {
            opacity: 0,
            y: 20
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }


  return (
    <div className='mx-auto'>
       {    
            !isOpen ?
             <m.button onClick={() => setOpen(true)} layoutId={`container${id}`} style={{borderRadius: borderRaduis}} 
             className={cn('p-2 px-4 cursor-pointer bg-gray-100 dark:bg-neutral-950', toggleStyle && toggleStyle)}>
                <m.span layoutId={`title${id}`} className='flex items-center gap-2'>{buttonText}</m.span>
            </m.button> 
            
            :

            <m.form layoutId={`container${id}`} ref={containerRef} onSubmit={(e) => handleFormSubmitted(e)}
            style={{borderRadius: borderRaduis}} className={cn('w-full md:w-[500px] overflow-hidden relative p-4 bg-gray-100 dark:bg-neutral-950 h-[300px]',
                className && className
            )}>

                <div className='flex justify-between w-full'>
                    	<m.span layoutId={`title${id}`} className='flex w-fit items-center gap-2'>{buttonText}</m.span>
                        <span className='p-1 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-900' onClick={() => setOpen(false)}>
                            <X size={18}/>
                        </span>
                </div>
                
                {children}


                 <div className='w-full flex justify-end'>
                    <m.button whileTap={{scale: 0.98}} onClick={() => setIsLoading(true)} style={{ pointerEvents: isLoading ? "none" : "visible"}}
                    className={cn('h-9 w-30 items-center justify-center flex rounded-md bg-blue-500 cursor-pointer', buttonStyle && buttonStyle)}>
                       {
                            !isLoading ?
                            <span>Submit</span> :
                            <div className='w-fit'>
                                <m.div animate={{rotate: 360}} transition={{duration: 0.5, repeat: Infinity, ease: "linear"}}>
                                    <Loader2 size={20}/>
                                </m.div>
                            </div>
                       }
                    </m.button>
                 </div>


                {/* blur overlay */}
              
                      <AnimatePresence>
                      {
                            isDone &&
                            <m.div 
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                            className='absolute w-full h-full inset-0 bg-transparent backdrop-blur-[2px]'>
                                <div className='w-full h-full flex flex-col justify-center relative items-center gap-2'>
                                    <m.span variants={textVariant} transition={{delay: 1.1, duration: 0.3}}
                                    initial="initial" animate="animate"><BadgeCheck size={48}/></m.span>
                                    <m.span variants={textVariant} transition={{delay: 1.15, duration: 0.3}}
                                    initial="initial" animate="animate">
                                        {validationMessage}
                                    </m.span>
                                    <m.div 
                                    animate={{opacity: [0,1, 0], x: [-width , 0 ,width + 20]}}
                                    transition={{
                                        duration: 1,
                                        ease: "linear",
                                        delay: 0.4
                                    }}
                                    className={cn('absolute top-0 left-0 w-[55%] rotate-[20] h-full bg-linear-90 from-green-700 to-red-600 blur-3xl',
                                        shimmerStyle && shimmerStyle
                                    )}/>
                                </div>
                            </m.div>
                       } 
                      </AnimatePresence>
            </m.form>
       }
    </div>
  )
}


export const CodeTS = `
"use client"
import { BadgeCheck, Bug, Loader2, X } from 'lucide-react'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { cn } from '@/app/lib/utils'


interface bugprops{
    buttonStyle?: string,
    className?: string,
    children?: React.ReactNode,
    onSubmit?: () => void,
    buttonText?: string | React.ReactNode,
    validationMessage?: string,
    id?: string | number,
    isValid?: boolean,
    isError?: boolean,
    borderRaduis?:number | string ,
    toggleStyle?: string,
    shimmerStyle?: string,
}


export const ReportBug = ({
    toggleStyle,
    buttonStyle,
    shimmerStyle, 
    className, 
    isValid = false, 
    children, 
    isError = false, 
    onSubmit,
    borderRaduis="12px", 
    validationMessage = "Reported Successfully!", 
    id=1, buttonText = <span className='flex gap-2 items-center'><Bug size={18}/>Report a bug</span>}:bugprops) => {
    const [isOpen, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const containerRef = useRef<HTMLFormElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(!containerRef.current) return;
        setWidth(containerRef.current.offsetWidth)
        if(isValid){
            setIsLoading(false)
            setIsDone(true)

           setTimeout(() => {
            setOpen(false)
            setIsDone(false)
            setIsLoading(false)
           }, 3000)
        }
        if(isError){
            setIsLoading(false)
        }
    }, [isValid, isError])

    const handleFormSubmitted = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if(onSubmit){
            onSubmit()
        }
    }

    const textVariant: Variants = {
        "initial": {
            opacity: 0,
            y: 20
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }


  return (
    <div className='mx-auto'>
       {    
            !isOpen ?
             <m.button onClick={() => setOpen(true)} layoutId={\`container$\{id}\`} style={{borderRadius: borderRaduis}} 
             className={cn('p-2 px-4 cursor-pointer bg-gray-100 dark:bg-neutral-950', toggleStyle && toggleStyle)}>
                <m.span layoutId={\`title$\{id}\`} className='flex items-center gap-2'>{buttonText}</m.span>
            </m.button> 
            
            :

            <m.form layoutId={\`container$\{id}\`} ref={containerRef} onSubmit={(e) => handleFormSubmitted(e)}
            style={{borderRadius: borderRaduis}} className={cn('w-full md:w-[500px] overflow-hidden relative p-4 bg-gray-100 dark:bg-neutral-950 h-[300px]',
                className && className
            )}>

                <div className='flex justify-between w-full'>
                    	<m.span layoutId={\`title$\{id}\`} className='flex w-fit items-center gap-2'>{buttonText}</m.span>
                        <span className='p-1 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-900' onClick={() => setOpen(false)}>
                            <X size={18}/>
                        </span>
                </div>
                
                {children}


                 <div className='w-full flex justify-end'>
                    <m.button whileTap={{scale: 0.98}} onClick={() => setIsLoading(true)} style={{ pointerEvents: isLoading ? "none" : "visible"}}
                    className={cn('h-9 w-30 items-center justify-center flex rounded-md bg-blue-500 cursor-pointer', buttonStyle && buttonStyle)}>
                       {
                            !isLoading ?
                            <span>Submit</span> :
                            <div className='w-fit'>
                                <m.div animate={{rotate: 360}} transition={{duration: 0.5, repeat: Infinity, ease: "linear"}}>
                                    <Loader2 size={20}/>
                                </m.div>
                            </div>
                       }
                    </m.button>
                 </div>


                {/* blur overlay */}
              
                      <AnimatePresence>
                      {
                            isDone &&
                            <m.div 
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                            className='absolute w-full h-full inset-0 bg-transparent backdrop-blur-[2px]'>
                                <div className='w-full h-full flex flex-col justify-center relative items-center gap-2'>
                                    <m.span variants={textVariant} transition={{delay: 1.1, duration: 0.3}}
                                    initial="initial" animate="animate"><BadgeCheck size={48}/></m.span>
                                    <m.span variants={textVariant} transition={{delay: 1.15, duration: 0.3}}
                                    initial="initial" animate="animate">
                                        {validationMessage}
                                    </m.span>
                                    <m.div 
                                    animate={{opacity: [0,1, 0], x: [-width , 0 ,width + 20]}}
                                    transition={{
                                        duration: 1,
                                        ease: "linear",
                                        delay: 0.4
                                    }}
                                    className={cn('absolute top-0 left-0 w-[55%] rotate-[20] h-full bg-linear-90 from-green-700 to-red-600 blur-3xl',
                                        shimmerStyle && shimmerStyle
                                    )}/>
                                </div>
                            </m.div>
                       } 
                      </AnimatePresence>
            </m.form>
       }
    </div>
  )
}

`



export const CodeJS = `
import { BadgeCheck, Bug, Loader2, X } from 'lucide-react'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { cn } from '@/app/lib/utils'

export const ReportBug = ({
    toggleStyle,
    buttonStyle,
    shimmerStyle, 
    className, 
    isValid = false, 
    children, 
    isError = false, 
    onSubmit,
    borderRaduis="12px", 
    validationMessage = "Reported Successfully!", 
    id=1, buttonText = <span className='flex gap-2 items-center'><Bug size={18}/>Report a bug</span>}) => {
    const [isOpen, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const containerRef = useRef<HTMLFormElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(!containerRef.current) return;
        setWidth(containerRef.current.offsetWidth)
        if(isValid){
            setIsLoading(false)
            setIsDone(true)

           setTimeout(() => {
            setOpen(false)
            setIsDone(false)
            setIsLoading(false)
           }, 3000)
        }
        if(isError){
            setIsLoading(false)
        }
    }, [isValid, isError])

    const handleFormSubmitted = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if(onSubmit){
            onSubmit()
        }
    }

    const textVariant: Variants = {
        "initial": {
            opacity: 0,
            y: 20
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }


  return (
    <div className='mx-auto'>
       {    
            !isOpen ?
             <m.button onClick={() => setOpen(true)} layoutId={\`container$\{id}\`} style={{borderRadius: borderRaduis}} 
             className={cn('p-2 px-4 cursor-pointer bg-gray-100 dark:bg-neutral-950', toggleStyle && toggleStyle)}>
                <m.span layoutId={\`title$\{id}\`} className='flex items-center gap-2'>{buttonText}</m.span>
            </m.button> 
            
            :

            <m.form layoutId={\`container$\{id}\`} ref={containerRef} onSubmit={(e) => handleFormSubmitted(e)}
            style={{borderRadius: borderRaduis}} className={cn('w-full md:w-[500px] overflow-hidden relative p-4 bg-gray-100 dark:bg-neutral-950 h-[300px]',
                className && className
            )}>

                <div className='flex justify-between w-full'>
                    	<m.span layoutId={\`title$\{id}\`} className='flex w-fit items-center gap-2'>{buttonText}</m.span>
                        <span className='p-1 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-900' onClick={() => setOpen(false)}>
                            <X size={18}/>
                        </span>
                </div>
                
                {children}


                 <div className='w-full flex justify-end'>
                    <m.button whileTap={{scale: 0.98}} onClick={() => setIsLoading(true)} style={{ pointerEvents: isLoading ? "none" : "visible"}}
                    className={cn('h-9 w-30 items-center justify-center flex rounded-md bg-blue-500 cursor-pointer', buttonStyle && buttonStyle)}>
                       {
                            !isLoading ?
                            <span>Submit</span> :
                            <div className='w-fit'>
                                <m.div animate={{rotate: 360}} transition={{duration: 0.5, repeat: Infinity, ease: "linear"}}>
                                    <Loader2 size={20}/>
                                </m.div>
                            </div>
                       }
                    </m.button>
                 </div>


                {/* blur overlay */}
              
                      <AnimatePresence>
                      {
                            isDone &&
                            <m.div 
                            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                            className='absolute w-full h-full inset-0 bg-transparent backdrop-blur-[2px]'>
                                <div className='w-full h-full flex flex-col justify-center relative items-center gap-2'>
                                    <m.span variants={textVariant} transition={{delay: 1.1, duration: 0.3}}
                                    initial="initial" animate="animate"><BadgeCheck size={48}/></m.span>
                                    <m.span variants={textVariant} transition={{delay: 1.15, duration: 0.3}}
                                    initial="initial" animate="animate">
                                        {validationMessage}
                                    </m.span>
                                    <m.div 
                                    animate={{opacity: [0,1, 0], x: [-width , 0 ,width + 20]}}
                                    transition={{
                                        duration: 1,
                                        ease: "linear",
                                        delay: 0.4
                                    }}
                                    className={cn('absolute top-0 left-0 w-[55%] rotate-[20] h-full bg-linear-90 from-green-700 to-red-600 blur-3xl',
                                        shimmerStyle && shimmerStyle
                                    )}/>
                                </div>
                            </m.div>
                       } 
                      </AnimatePresence>
            </m.form>
       }
    </div>
  )
}

`

export const UseCase = `

import React, { useState } from 'react'

export const page = () => {
    const [isValid, setValid] = useState(false)

    const onSubmit = () => {
        setValid(false)
        setTimeout(() => {setValid(true)}, 2000)
    }
  return (
    <ReportBug onSubmit={onSubmit} isValid={isValid}>
        <div className='py-2 mt-4 flex md:flex-row flex-col w-full gap-4 justify-between'>
                
                <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black 
                focus:outline-2 focus:outline-blue-500 border-2 border-gray-200 dark:border-neutral-900 w-[49%]' 
                type='text' placeholder='Name'/>

                <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black border-2 focus:outline-2 focus:outline-blue-500
                border-gray-200 dark:border-neutral-900 w-[49%]' 
                type='email' placeholder='Email'/>

            </div>
        <textarea style={{resize: "none"}} className='px-2 py-1 h-[50%] focus:outline-2 focus:outline-blue-500
        rounded-md bg-gray-50 dark:bg-black border-2 border-gray-200 dark:border-neutral-900 w-[100%]'
            placeholder='Provide details about the issue..'></textarea>
    </ReportBug> 
  )
}

`


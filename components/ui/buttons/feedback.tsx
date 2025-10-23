"use client"
import React, { useState } from 'react'
import { motion as m, AnimatePresence, Variants } from 'framer-motion'
import { CircleCheckBig, Loader } from 'lucide-react'

export const FeedBackButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)


    const variantLoadingAnimation: Variants = {
        "hiddenIcon": {
            y: 20,
            opacity: 0},
        "showIcon": {
            y: 0,
            opacity: 1
        },
        "hiddenText": {
            y: -20,
            opacity: 0
        },
        "showText": {
            y: 0,
            opacity: 1
        }
    }

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => setIsDone(true), 2000)
        setTimeout(() => {
            setIsLoading(false)
            
        }, 4000)
        setTimeout(() => setIsDone(false), 4500)
        setTimeout(() => setIsOpen(false), 4200)
    }


  return (
    <div>
        <AnimatePresence mode='popLayout'>
            {
                !isOpen ?
                <m.button style={{borderRadius: "7px"}} whileTap={{scale: 0.96}} layoutId='block' onClick={() => setIsOpen(true)}
                className='p-2 px-6 bg-white border-3 border-gray-100 shadow-md shadow-[#e2e2e2] cursor-pointer 
                dark:bg-[#0f0f0f] dark:shadow-[#000000] dark:text-white dark:border-gray-950/7'>
                    <m.span initial={{opacity: 0, x: -40}} animate={{x: 0, opacity: 1}} transition={{delay: 0.5}} layoutId='title'>Feedback</m.span>
                </m.button> :
                <m.div layoutId='block' style={{borderRadius: "10px"}} className='bg-gray-50 overflow-hidden dark:bg-[#101010] border-1 border-gray-200 dark:border-[#101010] p-2 w-[95%] relative md:w-[500px]'>

                    {
                        isDone &&
                        <m.div initial={{y: "-100%"}} animate={{y: 0}} exit={{opacity: 0}} transition={{duration: 0.3}}
                        className='absolute top-0 left-0 w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-4 z-20'>
                            <p className='w-[90%] flex flex-col items-center gap-4 text-center'>
                                <CircleCheckBig size={50}/>
                                Thank you for your feedback. Thank you for making us better. Your feedback won't go unnoticed.
                            </p>
                        </m.div> 
                    }
                 
                
                 <div style={{borderRadius: "6px"}} className='w-full overflow-hidden bg-white dark:bg-[#202020] border-1 border-gray-200 dark:border-[#202020] h-full relative'>
                       
                        <div className='w-full h-[200px] relative border-dashed p-2 border-b-1 dark:border-gray-950 border-gray-300'>
                            {
                                !isFocused &&
                                <m.span layoutId='title' className='absolute top-2 left-2 text-gray-400'>Feedback</m.span>
                            }
                            <textarea onFocus={() => setIsFocused(true)} className='p-1 dark:text-white w-full h-full outline-0'>

                            </textarea>
                        </div>
                       
                        <div className='w-full p-2 justify-end flex items-center'>
                        <m.button whileTap={{scale: 0.98}} onClick={handleSubmit} className='bg-linear-180 from-blue-300 cursor-pointer h-10 to-blue-500 min-w-40 flex items-center justify-center
                         rounded-md p-1 px-4 text-white'>
                          <AnimatePresence mode='wait'>
                                {
                                        !isLoading ? 
                                        <m.div variants={variantLoadingAnimation} initial="hiddenText" animate="showText" exit="hiddenText">Send</m.div> :
                                        <m.div variants={variantLoadingAnimation} initial="hiddenIcon" animate="showIcon" exit="hiddenIcon">
                                            <m.div animate={{rotate: 360}} transition={{duration: 0.6, repeat: Infinity, ease: "linear"}}>
                                                <Loader size={20}/>
                                            </m.div>
                                        </m.div>
                                }
                          </AnimatePresence>
                        </m.button>
                    </div>
                 </div>
                    
                </m.div>
            }
        </AnimatePresence>
    </div>
  )
}

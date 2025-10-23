"use client"
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import clsx from 'clsx'
import Image from 'next/image'

type cardProps = HTMLAttributes<HTMLDivElement> & {
    images: string[],
    swiftDelay?: number,
    swiftDuration?: number,
    className?: string,
    backText?: string,
    textStyle?: string
}

export const Swift: React.FC<cardProps> = ({images, textStyle, swiftDelay = 2, backText, swiftDuration = 0.4, className}) => {
    const [ current, setCurrent] = useState(0)
    const total = images.length - 1

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => {
            if(prev >= images.length - 1){
                return 0
            }
            return prev + 1
          })
        }, swiftDelay * 1000)
        
        return () => clearInterval(interval)
    }, [])


    const cardsVariant: Variants = {
        hidden : (i) => (
            i%2 === 0 ? {
                    width: 0, right: 0, left: "auto"} :
                    {
                        width: 0,
                        left: 0, right: "auto" 
                    }
                ),
        show: (i) => (
            i%2 === 0 ? 
            {
            width: 280
        } : {
            width: 280
        }),
        exit: (i) =>  (
           
            i%2 === 0 ?{
            width: 0, 
            left: 0, right: "auto" 
            } : {
                width: 0,
                left: "auto", right: 0
            }
        )
    }

  return (
    <div
    style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
    }}   
    className='w-full relative flex items-center justify-center h-full'>
        <h1 style={{transform: "translateZ(-20px)"}} className={clsx('text-[72px] md:text-[190px] font-bold', textStyle && textStyle)}>
            {backText}
        </h1>
        <div className='w-70 h-80 absolute'>
        <div className='relative w-full h-full overflow-hidden'>
            <AnimatePresence mode='wait'>
                {
                    images.map((image, i) => 
                    current === i &&
                        <m.div
                        variants={cardsVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        custom={i} 
                        key={i} style={{
                            transform: "translateZ(20px)"
                            }} 
                        transition={{
                            duration: swiftDuration,
                            ease: "easeInOut"
                        }}
                        className={`w-full h-full top-0 bottom-0 bg-gray-400 overflow-hidden absolute`}>
                           <Image src={image} className="w-full h-full" width={200} height={400} alt='img'/>
                        </m.div>
                    )
                }
            </AnimatePresence>
        </div>
        </div>
    </div>
  )
}

"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import Image from 'next/image'

interface staggerProps{
    items: string[],
    CardsInView?: number,
    displacement?: number,
    staggerDuration?: number

}

export const StaggerCards = ({displacement=25, staggerDuration=0.05, CardsInView=3, items=[""]}:staggerProps) => {
    
    const numberOfCardPerView= window.innerWidth < 480 ? 1 : CardsInView
    const [borders, setBorders] = useState({start: 0, stop: window.innerWidth < 480 ? 1 : numberOfCardPerView})
    const [current, setCurrent] = useState<string[]>(items.slice(borders.start, borders.stop))
    const [direction, setDirection] = useState("")
  
    const handleForward = () => {
       if(current[current.length - 1] !== items[items.length - 1]){
            setCurrent(items.slice(borders.start + numberOfCardPerView, borders.stop + numberOfCardPerView))
            setBorders((prev) => ({start: prev.start + numberOfCardPerView, stop: prev.stop + numberOfCardPerView}))
       }
    }

    const staggerVaraints: Variants = {
        "initial" : {
            opacity: 0,
            x: direction === "prev" ? -displacement : displacement
        },
        show: (index) => ({
            opacity: 1,
            x: 0,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        }),
        exit: (index) => ({
            opacity: 0,
            x: direction === "prev" ? displacement : -displacement,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        })
    }


    // controls button scale animation
    const buttonVariants: Variants = {
        "tapped": {
            scale: 0.96
        }
    }

    const handleBackward = () => {
        if(current[0] !== items[0]){
            setCurrent(items.slice(borders.start - numberOfCardPerView, borders.stop - numberOfCardPerView))
            setBorders((prev) => ({start: prev.start - numberOfCardPerView, stop: prev.stop - numberOfCardPerView}))
        }
       
    }

    
  return (
    <div className='w-full flex flex-col gap-2'>

        {/* stagger cards */}
       <div className='flex gap-2'>
           <AnimatePresence mode='wait'>
                {
                    current.map((col,i) => 
                       current.includes(col) &&
                        <m.div key={col + i}
                        variants={staggerVaraints}
                        initial="initial"
                        animate="show"
                        exit="exit"
                        custom={i}
                        className='w-full md:flex-1 flex h-80 rounded-md items-center justify-center'>
                           <Image height={320} width={280} alt="image" src={col}>

                           </Image>
                        </m.div>
                    )
                }
           </AnimatePresence>
       </div>


       {/* container containing buttons */}

       <div className='flex w-full gap-6 md:gap-2 items-center justify-center md:justify-end'>
            <m.div variants={buttonVariants} whileTap="tapped" 
            onClick={handleBackward} onMouseEnter={() => setDirection("prev")} 
            className='p-2 rounded-full bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black cursor-pointer'>
                <ChevronLeft/>
            </m.div>
            <m.div variants={buttonVariants} whileTap="tapped" onClick={handleForward} onMouseEnter={() => setDirection("next")} 
            className='p-2 rounded-full  bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black  cursor-pointer'>
                <ChevronRight/>
            </m.div>
       </div>
    </div>
  )
}





export const UseCaseCode = `
import React from 'react'
import { StaggerCards } from './staggercards'

export const page = () => {
    const images = ["/fashion/fas.jpeg", "/fashion/fas1.jpeg", "/fashion/fas2.jpeg",
         "/fashion/fas3.jpeg", "/fashion/fas4.jpeg","/fashion/fas5.jpeg","/fashion/fas6.jpeg","/fashion/fas7.jpeg",
        "/fashion/fas8.jpeg"]
  return (
    <div>
        <StaggerCards CardsInView={3} items={images}/>
    </div>
  )
}
`

export const CodeTS = `
"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import Image from 'next/image'

interface staggerProps{
    items: string[],
    CardsInView?: number,
    displacement?: number,
    staggerDuration?: number

}

export const StaggerCards = ({displacement=25, staggerDuration=0.05, CardsInView=3, items=[""]}:staggerProps) => {
    
    const numberOfCardPerView= window.innerWidth < 480 ? 1 : CardsInView
    const [borders, setBorders] = useState({start: 0, stop: window.innerWidth < 480 ? 1 : numberOfCardPerView})
    const [current, setCurrent] = useState<string[]>(items.slice(borders.start, borders.stop))
    const [direction, setDirection] = useState("")
  
    const handleForward = () => {
       if(current[current.length - 1] !== items[items.length - 1]){
            setCurrent(items.slice(borders.start + numberOfCardPerView, borders.stop + numberOfCardPerView))
            setBorders((prev) => ({start: prev.start + numberOfCardPerView, stop: prev.stop + numberOfCardPerView}))
       }
    }

    const staggerVaraints: Variants = {
        "initial" : {
            opacity: 0,
            x: direction === "prev" ? -displacement : displacement
        },
        show: (index) => ({
            opacity: 1,
            x: 0,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        }),
        exit: (index) => ({
            opacity: 0,
            x: direction === "prev" ? displacement : -displacement,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        })
    }


    // controls button scale animation
    const buttonVariants: Variants = {
        "tapped": {
            scale: 0.96
        }
    }

    const handleBackward = () => {
        if(current[0] !== items[0]){
            setCurrent(items.slice(borders.start - numberOfCardPerView, borders.stop - numberOfCardPerView))
            setBorders((prev) => ({start: prev.start - numberOfCardPerView, stop: prev.stop - numberOfCardPerView}))
        }
       
    }

    
  return (
    <div className='w-full flex flex-col gap-2'>

        {/* stagger cards */}
       <div className='flex gap-2'>
           <AnimatePresence mode='wait'>
                {
                    current.map((col,i) => 
                       current.includes(col) &&
                        <m.div key={col + i}
                        variants={staggerVaraints}
                        initial="initial"
                        animate="show"
                        exit="exit"
                        custom={i}
                        className='w-full md:flex-1 flex h-80 rounded-md items-center justify-center'>
                           <Image height={320} width={280} alt="image" src={col}>

                           </Image>
                        </m.div>
                    )
                }
           </AnimatePresence>
       </div>


       {/* container containing buttons */}

       <div className='flex w-full gap-6 md:gap-2 items-center justify-center md:justify-end'>
            <m.div variants={buttonVariants} whileTap="tapped" 
            onClick={handleBackward} onMouseEnter={() => setDirection("prev")} 
            className='p-2 rounded-full bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black cursor-pointer'>
                <ChevronLeft/>
            </m.div>
            <m.div variants={buttonVariants} whileTap="tapped" onClick={handleForward} onMouseEnter={() => setDirection("next")} 
            className='p-2 rounded-full  bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black  cursor-pointer'>
                <ChevronRight/>
            </m.div>
       </div>
    </div>
  )
}

`

export const CodeJS =`

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion as m} from 'framer-motion'


export const StaggerCards = ({displacement=25, staggerDuration=0.05, CardsInView=3, items=[""]}) => {
    
    const numberOfCardPerView= window.innerWidth < 480 ? 1 : CardsInView
    const [borders, setBorders] = useState({start: 0, stop: window.innerWidth < 480 ? 1 : numberOfCardPerView})
    const [current, setCurrent] = useState<string[]>(items.slice(borders.start, borders.stop))
    const [direction, setDirection] = useState("")
  
    const handleForward = () => {
       if(current[current.length - 1] !== items[items.length - 1]){
            setCurrent(items.slice(borders.start + numberOfCardPerView, borders.stop + numberOfCardPerView))
            setBorders((prev) => ({start: prev.start + numberOfCardPerView, stop: prev.stop + numberOfCardPerView}))
       }
    }

    const staggerVaraints = {
        "initial" : {
            opacity: 0,
            x: direction === "prev" ? -displacement : displacement
        },
        show: (index) => ({
            opacity: 1,
            x: 0,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        }),
        exit: (index) => ({
            opacity: 0,
            x: direction === "prev" ? displacement : -displacement,
            transition:{
                delay: direction === "prev" ? ((numberOfCardPerView - 1) - index) * staggerDuration : index * staggerDuration
            }
        })
    }


    // controls button scale animation
    const buttonVariants = {
        "tapped": {
            scale: 0.96
        }
    }

    const handleBackward = () => {
        if(current[0] !== items[0]){
            setCurrent(items.slice(borders.start - numberOfCardPerView, borders.stop - numberOfCardPerView))
            setBorders((prev) => ({start: prev.start - numberOfCardPerView, stop: prev.stop - numberOfCardPerView}))
        }
       
    }

    
  return (
    <div className='w-full flex flex-col gap-2'>

        {/* stagger cards */}
       <div className='flex gap-2'>
           <AnimatePresence mode='wait'>
                {
                    current.map((col,i) => 
                       current.includes(col) &&
                        <m.div key={col + i}
                        variants={staggerVaraints}
                        initial="initial"
                        animate="show"
                        exit="exit"
                        custom={i}
                        className='w-full md:flex-1 flex h-80 rounded-md items-center justify-center'>
                           <img height={320} width={280} alt="image" src={col}>

                           </img>
                        </m.div>
                    )
                }
           </AnimatePresence>
       </div>


       {/* container containing buttons */}

       <div className='flex w-full gap-6 md:gap-2 items-center justify-center md:justify-end'>
            <m.div variants={buttonVariants} whileTap="tapped" 
            onClick={handleBackward} onMouseEnter={() => setDirection("prev")} 
            className='p-2 rounded-full bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black cursor-pointer'>
                <ChevronLeft/>
            </m.div>
            <m.div variants={buttonVariants} whileTap="tapped" onClick={handleForward} onMouseEnter={() => setDirection("next")} 
            className='p-2 rounded-full  bg-black text-white dark:hover:bg-gray-[#a1a1a1] dark:bg-white dark:text-black  cursor-pointer'>
                <ChevronRight/>
            </m.div>
       </div>
    </div>
  )
}

`
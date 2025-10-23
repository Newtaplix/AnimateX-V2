"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'


interface descripe{
    heading: string,
    description: string
}

interface props{
    images: string[],
    descriptions?: descripe[]
}



export const Rotate = ({images, descriptions}:props) => {
    const [current, setCurrent] = useState(0)
    const TOTAL = images.length

    const handleForward = () => {
        setCurrent((prev) => Math.max(0, prev - 1))
    } 

    const handleBackward = () => {
        setCurrent((prev) => Math.min(TOTAL - 1, prev + 1))
    } 

    const descriptionVariants: Variants = {
        initial: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),
        'animate': {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),

    }

    const buttonVariant = {
        "tapped": {
            scale: 0.97
        }
    }
    
  return (
    <div  className='w-full h-full flex flex-col gap-8 justify-center items-center overflow-hidden'>
        
        {/* parent container this has nothing to do with the animation */}

        <div className='h-full w-full flex items-center justify-center'>

            {/* Container containing cards enables cards to be positioned at the center of the screen */}
            <div
                style={{
                    perspective: "2000px"
                }}
                className='relative my-block w-[65%] h-40 md:w-80 md:h-60 shrink-0 overflow-visible'>
                {
					images.map((img, i) => {

                        const rel = i - current
                        const absRel = Math.abs(rel)
                        const rotateY = Math.max(-50, Math.min(50, -rel * 30))
						const scale = absRel === 0 ? 1 : 1 - Math.min(absRel * 0.1, 0.5)
                        const x = rel * 140 // spread out horizontally
                        const z = 100 - absRel * 80 // depth variance
                        const zIndex = 100 - absRel
					
                        return (

                            // cards 
                            <m.div
                                key={i}
                                className=' w-60 h-40 md:w-80 md:h-60 bottom-0 rounded-md flex items-center justify-center absolute inset-0'
								animate={{ rotateY, scale, x, z }}
								transition={{duration: 0.35}}
                                style={{ transformStyle: 'preserve-3d', zIndex }}
                            >
                                <m.div onClick={() => setCurrent(i)}  whileHover="hovered" className='w-full cursor-pointer h-full relative'>
                                    <Image src={img} fill alt={img}/>
                                   
                                   {/* dark card overlay */}
                                    <AnimatePresence>
                                    {
                                        current !== i &&
                                        <m.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} variants={{
                                            'hovered': {opacity: 0}
                                        }} className="bg-black/50 absolute inset-0 z-10"></m.div>
                                    }
                                    </AnimatePresence>
                                </m.div>
                                
                            </m.div>
                        )
                    })
                }
            </div>
        </div>

        {/* container containing titles and descriptions */}
        <div className='flex items-center justify-center gap-4 md:gap-8'>
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleBackward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronLeft size={20}/>
            </m.div>

           {
                descriptions &&
                <div className='w-50 md:w-60'>
                <AnimatePresence mode='wait'>
                {
                    descriptions.map((des, i) => 
                    current === i &&
                        <m.div variants={descriptionVariants} 
                        initial="initial" 
                        animate="animate"
                        exit="exit"
                        custom={i} 
                        transition={{
                            duration: 0.25,
                            ease: "easeIn"
                        }}
                        key={i} className='flex-col gap-2 text-center'>
                            <h1>{des.heading}</h1>
                            <p>{des.description}</p>
                        </m.div>
                        )
                    }
                    </AnimatePresence>
                </div>
           }

            {/* forward button */}
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleForward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronRight size={20}/>
            </m.div>
        </div>
    </div>
  )
}


export const usecasecode = `
import React from 'react'
import { Rotate } from '@/components/ui/carousels/rotate'
export const page = () => {
  const images = ["/fashion/fas.jpeg", "/fashion/fas1.jpeg", "/fashion/fas2.jpeg",
    "/fashion/fas3.jpeg", "/fashion/fas4.jpeg","/fashion/fas5.jpeg","/fashion/fas6.jpeg","/fashion/fas7.jpeg",
   "/fashion/fas8.jpeg"]

  const descriptions = [
      {
          heading: "Nearly into the Abyst",
          description: "Brown shines brightest"
      },
      {
          heading: "The Legacy",
          description: "Men and Women in black."
      },
      {
          heading: "The Boys",
          description: "Hype hype hype"
      },
      {
          heading: "Movie stars",
          description: "They keep our eyes drawn"
      },
      {
          heading: "Theee Legends",
          description: "Unstoppable"
      },
      {
          heading: "BFFs",
          description: "Sudo friend zone"
      },
      {
          heading: "#Hastag Sleepover",
          description: "We in our PJs"
      },{
          heading: "We love shorts",
          description: "Let those feet shine."
      },
      {
          heading: "Three Musketeers",
          description: "Thy shall save thy princess"
      }
  ]
  return (
    <Rotate images={images} descriptions={descriptions}/>
  )
}

`


export const CodeTS = `
"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'


interface descripe{
    heading: string,
    description: string
}

interface props{
    images: string[],
    descriptions?: descripe[]
}



export const Rotate = ({images, descriptions}:props) => {
    const [current, setCurrent] = useState(0)
    const TOTAL = images.length

    const handleForward = () => {
        setCurrent((prev) => Math.max(0, prev - 1))
    } 

    const handleBackward = () => {
        setCurrent((prev) => Math.min(TOTAL - 1, prev + 1))
    } 

    const descriptionVariants: Variants = {
        initial: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),
        'animate': {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),

    }

    const buttonVariant = {
        "tapped": {
            scale: 0.97
        }
    }
    
  return (
    <div  className='w-full h-full flex flex-col gap-8 justify-center items-center overflow-hidden'>
        
        {/* parent container this has nothing to do with the animation */}

        <div className='h-full w-full flex items-center justify-center'>

            {/* Container containing cards enables cards to be positioned at the center of the screen */}
            <div
                style={{
                    perspective: "2000px"
                }}
                className='relative my-block w-[65%] h-40 md:w-80 md:h-60 shrink-0 overflow-visible'>
                {
					images.map((img, i) => {

                        const rel = i - current
                        const absRel = Math.abs(rel)
                        const rotateY = Math.max(-50, Math.min(50, -rel * 30))
						const scale = absRel === 0 ? 1 : 1 - Math.min(absRel * 0.1, 0.5)
                        const x = rel * 140 // spread out horizontally
                        const z = 100 - absRel * 80 // depth variance
                        const zIndex = 100 - absRel
					
                        return (

                            // cards 
                            <m.div
                                key={i}
                                className=' w-60 h-40 md:w-80 md:h-60 bottom-0 rounded-md flex items-center justify-center absolute inset-0'
								animate={{ rotateY, scale, x, z }}
								transition={{duration: 0.35}}
                                style={{ transformStyle: 'preserve-3d', zIndex }}
                            >
                                <m.div onClick={() => setCurrent(i)}  whileHover="hovered" className='w-full cursor-pointer h-full relative'>
                                    <Image src={img} fill alt={img}/>
                                   
                                   {/* dark card overlay */}
                                    <AnimatePresence>
                                    {
                                        current !== i &&
                                        <m.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} variants={{
                                            'hovered': {opacity: 0}
                                        }} className="bg-black/50 absolute inset-0 z-10"></m.div>
                                    }
                                    </AnimatePresence>
                                </m.div>
                                
                            </m.div>
                        )
                    })
                }
            </div>
        </div>

        {/* container containing titles and descriptions */}
        <div className='flex items-center justify-center gap-4 md:gap-8'>
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleBackward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronLeft size={20}/>
            </m.div>

           {
                descriptions &&
                <div className='w-50 md:w-60'>
                <AnimatePresence mode='wait'>
                {
                    descriptions.map((des, i) => 
                    current === i &&
                        <m.div variants={descriptionVariants} 
                        initial="initial" 
                        animate="animate"
                        exit="exit"
                        custom={i} 
                        transition={{
                            duration: 0.25,
                            ease: "easeIn"
                        }}
                        key={i} className='flex-col gap-2 text-center'>
                            <h1>{des.heading}</h1>
                            <p>{des.description}</p>
                        </m.div>
                        )
                    }
                    </AnimatePresence>
                </div>
           }

            {/* forward button */}
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleForward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronRight size={20}/>
            </m.div>
        </div>
    </div>
  )
}


`

export const CodeJS = `
import React, { useState } from 'react'
import { AnimatePresence, motion as m} from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export const Rotate = ({images, descriptions}) => {
    const [current, setCurrent] = useState(0)
    const TOTAL = images.length

    const handleForward = () => {
        setCurrent((prev) => Math.max(0, prev - 1))
    } 

    const handleBackward = () => {
        setCurrent((prev) => Math.min(TOTAL - 1, prev + 1))
    } 

    const descriptionVariants = {
        initial: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),
        'animate': {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (i) => ({
            filter: "blur(10px)",
            scale: 0.8,
            opacity: 0
        }),

    }

    const buttonVariant = {
        "tapped": {
            scale: 0.97
        }
    }
    
  return (
    <div  className='w-full h-full flex flex-col gap-8 justify-center items-center overflow-hidden'>
        
        {/* parent container this has nothing to do with the animation */}

        <div className='h-full w-full flex items-center justify-center'>

            {/* Container containing cards enables cards to be positioned at the center of the screen */}
            <div
                style={{
                    perspective: "2000px"
                }}
                className='relative my-block w-[65%] h-40 md:w-80 md:h-60 shrink-0 overflow-visible'>
                {
					images.map((img, i) => {

                        const rel = i - current
                        const absRel = Math.abs(rel)
                        const rotateY = Math.max(-50, Math.min(50, -rel * 30))
						const scale = absRel === 0 ? 1 : 1 - Math.min(absRel * 0.1, 0.5)
                        const x = rel * 140 // spread out horizontally
                        const z = 100 - absRel * 80 // depth variance
                        const zIndex = 100 - absRel
					
                        return (

                            // cards 
                            <m.div
                                key={i}
                                className=' w-60 h-40 md:w-80 md:h-60 bottom-0 rounded-md flex items-center justify-center absolute inset-0'
								animate={{ rotateY, scale, x, z }}
								transition={{duration: 0.35}}
                                style={{ transformStyle: 'preserve-3d', zIndex }}
                            >
                                <m.div onClick={() => setCurrent(i)}  whileHover="hovered" className='w-full cursor-pointer h-full relative'>
                                    <img src={img} height="100%" width="100%" alt={img}/>
                                   
                                   {/* dark card overlay */}
                                    <AnimatePresence>
                                    {
                                        current !== i &&
                                        <m.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} variants={{
                                            'hovered': {opacity: 0}
                                        }} className="bg-black/50 absolute inset-0 z-10"></m.div>
                                    }
                                    </AnimatePresence>
                                </m.div>
                                
                            </m.div>
                        )
                    })
                }
            </div>
        </div>

        {/* container containing titles and descriptions */}
        <div className='flex items-center justify-center gap-4 md:gap-8'>
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleBackward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronLeft size={20}/>
            </m.div>

           {
                descriptions &&
                <div className='w-50 md:w-60'>
                <AnimatePresence mode='wait'>
                {
                    descriptions.map((des, i) => 
                    current === i &&
                        <m.div variants={descriptionVariants} 
                        initial="initial" 
                        animate="animate"
                        exit="exit"
                        custom={i} 
                        transition={{
                            duration: 0.25,
                            ease: "easeIn"
                        }}
                        key={i} className='flex-col gap-2 text-center'>
                            <h1>{des.heading}</h1>
                            <p>{des.description}</p>
                        </m.div>
                        )
                    }
                    </AnimatePresence>
                </div>
           }

            {/* forward button */}
            <m.div variants={buttonVariant} whileTap="tapped" onClick={handleForward} className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'>
                <ChevronRight size={20}/>
            </m.div>
        </div>
    </div>
  )
}

`
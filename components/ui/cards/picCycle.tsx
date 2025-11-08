"use client"
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as m, Variants, useAnimation, 
    useMotionValue, useTransform, AnimationDefinition, 
    PanInfo} from 'framer-motion'
import { X } from 'lucide-react'


export const PicCycle = () => {
    const [current, setcurrent] = useState<number | null>(null)
    const controls = useAnimation()
    const containerRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState(0)
    const [currentRotation, setCurrentRotation] = useState(rotation)
    const [width, setWidth] = useState<number>()

    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-360, 360])

    // const spinanimation: AnimationDefinition =
    // {
    //     rotate: 360,
    //     transition: {
    //         duration: 10,
    //         repeat: Infinity,
    //         ease: "linear"
    //     }
    // } 

    // useEffect(() => {
    //     const subscribe = rotate.on("change", (val) => {
    //         setCurrentRotation(rotation + val)
    //     })
    //     return subscribe
    // }, [rotate, rotation])

    // const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info:PanInfo) => {
    //     const rotationChange = (info.offset.x / 200) * 90;
    //     setRotation((prev) => rotationChange + prev)
    // }


    const closeVariant: Variants = {
        "initial" : {
            opacity: 0,
            y: -20,
        },
        "animate": {
            opacity: 1,
            y: 0
        }
    }


  return (
    <m.div 
    drag = "x"
    dragElastic={0.2}
    dragConstraints={{left:0, right: 0}}
    // onDragEnd={handleDragEnd}
    style={{
        x,
        rotate,
        width: 260,
        height: 260,
       
    }}
    className='relative bg-red-600 rounded-full flex items-center justify-center'>
        {
            Array.from({length: 10}).map((_, i) => 
               {
                
                const raduis = 170
                const angle = (2 * i * Math.PI) / 10
                const deg = (angle * 180) / Math.PI + 90

                return(
                  <AnimatePresence>
                    {
                      
                        <m.div 
                            animate={current === i ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1.2
                            } : {
                                x: raduis * Math.cos(angle),
                                y: raduis * Math.sin(angle),
                                rotate: deg,
                                scale: 0.66,
                                opacity: current === null ? 1 : 0
                            }}
                            exit={{opacity: 0}}
                            style={{
                                transform: `translateX(${raduis * Math.cos(angle)}) 
                                translateY(${raduis * Math.sin(angle)})
                                rotate(${deg})
                                `
                            }}
                            transition={{
                                duration: 0.35
                            }}                          
                            className='w-30 absolute rounded-xl bg-gray-300 
                            h-30 flex items-center justify-center overflow-hidden'>
                                <div className='w-full h-full relative flex items-center justify-center'>
                                  <AnimatePresence>
                                  {
                                        current === i &&
                                        <m.div key={i} variants={closeVariant} onClick={() => {
                                            setcurrent(null)
                                           
                                        }} 
                                        animate="animate" initial="initial" exit="initial"
                                        className='p-1 rounded-full bg-gray-400 
                                        hover:bg-gray-600 cursor-pointer absolute top-1 right-1'>
                                            <X size={12}/></m.div>
                                   }
                                  </AnimatePresence>
                                 {
                                    current !== i &&
                                    <div onClick={() => setcurrent(i)} 
                                    className='absolute top-0 left-0 w-full h-full bg-transparent'/>
                                 }
                                   {i}
                                </div>
                        </m.div>
                    }
                  </AnimatePresence>
                   )
               }
            )
        }
    </m.div>
  )
}

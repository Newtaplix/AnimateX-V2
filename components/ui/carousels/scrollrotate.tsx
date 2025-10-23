"use client"
import React, { useRef } from 'react'
import { motion as m, useTransform, useScroll, useMotionValue, MotionValue } from 'framer-motion'

export const ScrollRotate = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({target: containerRef, offset: ["start start", "end center"]})
    const transX = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"])

  return (
    <div ref={containerRef} className="h-[300vh] w-full relative">
        <div style = {{transformStyle: "preserve-3d", perspective: "1000px"}} className='w-full h-[100vh] bg-blue-400 overflow-hidden
         sticky flex items-center top-0 left-0'>
           <m.div 
           style={{x: transX}}
           className='flex w-fit gap-2 items-center'>
                {
                    Array.from({length: 6}).map((_, i) => 
                        <Card key={i} id={i} scrollYProgress={scrollYProgress}/>
                    )
                }
           </m.div>
        </div>
    </div>
  )
}


interface cardprop{
    id: number,
    scrollYProgress: MotionValue
}

const Card = ({id, scrollYProgress}:cardprop) => {
    const rotateY = useTransform(scrollYProgress, [0,0.9 - ((6 - id) * 0.055), 1], ["1.3", "1", "1.3"])
    return (
        <m.div style={{scale: rotateY, z: "50px", transformStyle: "preserve-3d"}} 
        className='w-80 h-60 shrink-0 
        rounded-md bg-amber-400'>
            {id}
        </m.div>
    )
}
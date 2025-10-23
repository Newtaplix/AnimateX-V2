"use client"
import React, { useRef } from 'react'
import { motion as m, MotionValue, useScroll, useTransform } from 'framer-motion'

export const Domino = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({target: containerRef, offset:["start start", "end end"]})
    const sceneScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.3])
  return (
    <div ref={containerRef} className='w-full h-[300vh]' >
       <m.div
       style={{
        perspective: "5000px",
        scale: sceneScale
       }} 
       className='w-full h-[100vh] sticky top-0'>
           {
                Array.from({length: 7}).map((_, i) => 
                    <Card 
                    key={i} 
                    scrollYProgress={scrollYProgress} 
                    length={7}
                    i={i}/>
                )
           }
       </m.div>
       
    </div>
  )
}


interface CardProps{
    i: number,
    scrollYProgress: MotionValue,
    length: number
}


const Card = ({i, scrollYProgress, length}:CardProps) => {

    const reverseredIndex = length - 1 -i
    const step = 0.1
    const scaleDuration = 0.1
    const rotateDuration = 0.085
    const scaleStart = (reverseredIndex) * step
    const scaleEnd = scaleStart + scaleDuration
    const rotateStart = scaleEnd - 0.05
    const rotateEnd = rotateStart + rotateDuration

    const scale = useTransform(scrollYProgress, [scaleStart, scaleEnd], [((i + 1) / length), 1])
    const rotateX = useTransform(scrollYProgress, [rotateStart, rotateEnd], [0, 80])
    const y = useTransform(scrollYProgress, [rotateStart, rotateEnd], [((i + 1) * 5.5), 100])
    const opacity = useTransform(scrollYProgress, [rotateEnd, rotateEnd + 0.05], [1, 0])
    const rotateZ = useTransform(scrollYProgress, [rotateStart, rotateEnd], [-10, 0])
    const baseZ = (i) * 100
    const translateZ = useTransform(scrollYProgress, [rotateStart, rotateEnd], [baseZ, baseZ + 120])
    
    return (
        <m.div key={i}
        style={{
            transformStyle: 'preserve-3d',
            translateZ,
            y,
            scale,
            opacity
            // zIndex: 7 - (i + 1)
        }} 
            className='w-80 h-70 absolute mx-auto top-0 left-0 right-0 translate-y-1/2 '>
             <div className='w-full h-full rounded-md relative'>
                
                {/* shadow container */}
                <m.div
                style={{
                    transform: "translateX(-30%) translateY(130%) scale(0.95)",
                    transformOrigin: "-3% 97%",
                    filter: "blur(2px)",
                    zIndex: 3,
                    rotateZ,
                    rotateX: 75,
                    scale: 0.95
                }} 
                className='bg-black/40 absolute inset-0 ' />

                <m.div style={{
                    transformOrigin: "bottom",
                    zIndex: 4,
                    rotateX
                    }} className='w-full overflow-hidden h-full bg-red-500 shadow-md shadow-[#e2e2e2] absolute left-0 bottom-0 rounded-md'>
                        {i}
                </m.div>

            </div>
        </m.div>
        
    )
}
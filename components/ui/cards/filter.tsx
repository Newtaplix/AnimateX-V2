"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion as m, useAnimation, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'

export const FilterCard = () => {
    const controls = useAnimation()
    const turbRef = useRef<SVGAElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMove = (e:React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        const rec = target.getBoundingClientRect()
        x.set(e.clientX - rec.left);
        y.set(e.clientY - rec.top)
    };

  return (
    <>
    {/* <svg className='absolute hidden'>
        <defs>
            <filter id='blur'>
                <feGaussianBlur in='SourceGraphic' stdDeviation="5">

                </feGaussianBlur>
            </filter>
        </defs>
    </svg> */}

    {/* <svg>
        <defs>
            <filter id='blur'>
                <feDropShadow dx={3} dy={3} floodColor={"black"} stdDeviation="2">

                </feDropShadow>
            </filter>
        </defs>
    </svg> */}

    {/* <svg>
        <defs>
            <filter id='blur'>
                <feTurbulence baseFrequency={0.02} numOctaves={3} result='turb'/>
                <feDisplacementMap in="SourceGraphic" in2={"turb"} scale="10"/>
            </filter>
        </defs>
    </svg> */}

    <svg className="absolute hidden">
        <defs>
            <filter id='blur'>
                <feTurbulence 
                    type="fractalNoise"
                    numOctaves={2}
                    result='turb'
                    seed={2}
                    baseFrequency={0.015}
                    />
                <feDisplacementMap in2={"turb"} in='SourceGraphic' scale="30"/>
            </filter>
        </defs>
    </svg>

    {/* <svg>
        <defs>
            <filter id='blur'>
                <feMorphology operator="dilate" radius='2'/>
            </filter>
        </defs>
    </svg> */}

     {/* <svg>
        <defs>
            <filter id='blur'>
                <feGaussianBlur stdDeviation="4" result='blur'/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in='SourceGraphic'/>
                </feMerge>
            </filter>
        </defs>
    </svg> */}

    
     <m.div
    //  onHoverStart={() => {
    //     controls.start({
    //         baseFrequency: [0.01, 0.04, 0.01],
    //         transition: {
    //                 duration: 5,
    //                 repeat: Infinity,
    //                 ease: "easeInOut"
    //             }})
    //  }}
    //  onHoverEnd={() => {
    //     controls.start({
    //         baseFrequency: 0,
    //         transition: {
    //             duration: 3
    //         }
    //     })
    //  }}
    onMouseMove={(e) => handleMove(e)} className='relative flex items-center justify-center'>
        <Image src={"/demon/nezu.jpeg"} width={200} height={300} alt='image'/>
        <m.div
        style={{
            x, y,
            filter: "url(#blur)"
        }} 
        className="absolute w-16 h-16 pointer-events-none rounded-full"/>
     </m.div>
    </>

       
  )
}


"use client"
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'


interface flipProps{
    subImages: string[],
    mainImage: string,
    mainStyle?: string,
    subStyle?: string,
    flipDuration?: number,
    iniSubSpread?: number,
    finalSubSpread?: number
}

export const Flip = ({subImages=[""], mainStyle, subStyle,
    mainImage, iniSubSpread = 60, finalSubSpread = 150, flipDuration=0.5}:flipProps) => {
    const [raduis, setRaduis] = useState(iniSubSpread)
    return (
        // parent conatiner
   <m.div 
   whileHover={"hovered"} initial="idle" onMouseEnter={() => setRaduis(finalSubSpread)} 
   onMouseLeave={() => setRaduis(iniSubSpread)} 
    className={cn('p-2 w-70 h-90 rounded-md relative', mainStyle && mainStyle)}>

        {/* rotating card */}
        <m.div variants={{
            'hovered': {
                rotateY: 180
            },
            'idle': {
                rotateY: 0
            }
        }} transition={{duration: flipDuration}} 
        style={{
            perspective: "1000px", 
            transformStyle: 'preserve-3d'}} 
        className='absolute bg-transparent inset-2'>
              
              {/* container providing 3d effect for absolute cards */}
          <div style={{transformStyle: "preserve-3d", perspective: "1000px"}} className="w-full h-full relative ">
                <div style={{transformStyle: "preserve-3d", transform: `translateZ(${(subImages.length) * 20}px)`}} 
                className='w-full rounded-md absolute h-full overflow-hidden'>

                    {/* Main image conatiner */}
                    <div className="w-full h-full relative">
                        <Image src={mainImage} fill alt={"img"}/>
                    </div>
                </div>

                {/* sub images */}
               {
                    subImages.map((img, i) => 
                        <m.div
                        animate={{
                            x: raduis * Math.cos((i * 2 * Math.PI) / subImages.length),
                            y: raduis * Math.sin((i * 2 * Math.PI) / subImages.length),
                            z: i * 20
                        }}
                        transition={{
                            duration: flipDuration
                        }}
                        className={cn('top-0 translate-y-1/2 w-30 h-40 left-0 overflow-hidden right-0 mx-auto rounded-md absolute',
                            subStyle && subStyle
                        )}>
                            <div className='h-full w-full relative'>
                                <Image src={img} fill alt={img}/>
                            </div>
                        </m.div>
                    )
               }
          </div>

        </m.div>
   </m.div>
  )
}

export const usecasecode = `

import React from 'react'
import { Flip } from '@/components/ui/cards/flip'

export const page = () => {
   const subImages = ["/demon/muza.jpeg","/demon/nezu.jpeg","/demon/pic1.jpeg", "/demon/pig.jpeg", "/demon/tanjiro.jpeg", "/demon/zenit.jpeg"]
    const mainImage = "/demon/demon.jpeg"
  return (
    <div>
      <Flip subImages={subImages} mainImage={mainImage}/>
    </div>
  )
}

`

export const CodeTS = `
"use client"
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'


interface flipProps{
    subImages: string[],
    mainImage: string,
    mainStyle?: string,
    subStyle?: string,
    flipDuration?: number,
    iniSubSpread?: number,
    finalSubSpread?: number
}

export const Flip = ({subImages=[""], mainStyle, subStyle,
    mainImage, iniSubSpread = 60, finalSubSpread = 150, flipDuration=0.5}:flipProps) => {
    const [raduis, setRaduis] = useState(iniSubSpread)
    return (
        // parent conatiner
   <m.div 
   whileHover={"hovered"} initial="idle" onMouseEnter={() => setRaduis(finalSubSpread)} 
   onMouseLeave={() => setRaduis(iniSubSpread)} 
    className={cn('p-2 w-70 h-90 rounded-md relative', mainStyle && mainStyle)}>

        {/* rotating card */}
        <m.div variants={{
            'hovered': {
                rotateY: 180
            },
            'idle': {
                rotateY: 0
            }
        }} transition={{duration: flipDuration}} 
        style={{
            perspective: "1000px", 
            transformStyle: 'preserve-3d'}} 
        className='absolute bg-transparent inset-2'>
              
              {/* container providing 3d effect for absolute cards */}
          <div style={{transformStyle: "preserve-3d", perspective: "1000px"}} className="w-full h-full relative ">
                <div style={{transformStyle: "preserve-3d", transform: \`translateZ($\{(subImages.length) * 20}px)\`}} 
                className='w-full rounded-md absolute h-full overflow-hidden'>

                    {/* Main image conatiner */}
                    <div className="w-full h-full relative">
                        <Image src={mainImage} fill alt={"img"}/>
                    </div>
                </div>

                {/* sub images */}
               {
                    subImages.map((img, i) => 
                        <m.div
                        animate={{
                            x: raduis * Math.cos((i * 2 * Math.PI) / 6),
                            y: raduis * Math.sin((i * 2 * Math.PI) / 6),
                            z: i * 20
                        }}
                        transition={{
                            duration: flipDuration
                        }}
                        className={cn('top-0 translate-y-1/2 w-30 h-40 left-0 overflow-hidden right-0 mx-auto rounded-md absolute',
                            subStyle && subStyle
                        )}>
                            <div className='h-full w-full relative'>
                                <Image src={img} fill alt={img}/>
                            </div>
                        </m.div>
                    )
               }
          </div>

        </m.div>
   </m.div>
  )
}

`

export const CodeJS = `

import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { cn } from '@/app/lib/utils'


export const Flip = ({subImages=[""], mainStyle, subStyle,
    mainImage, iniSubSpread = 60, finalSubSpread = 150, flipDuration=0.5}) => {
    const [raduis, setRaduis] = useState(iniSubSpread)
    return (
        // parent conatiner
   <m.div 
   whileHover={"hovered"} initial="idle" onMouseEnter={() => setRaduis(finalSubSpread)} 
   onMouseLeave={() => setRaduis(iniSubSpread)} 
    className={cn('p-2 w-70 h-90 rounded-md relative', mainStyle && mainStyle)}>

        {/* rotating card */}
        <m.div variants={{
            'hovered': {
                rotateY: 180
            },
            'idle': {
                rotateY: 0
            }
        }} transition={{duration: flipDuration}} 
        style={{
            perspective: "1000px", 
            transformStyle: 'preserve-3d'}} 
        className='absolute bg-transparent inset-2'>
              
              {/* container providing 3d effect for absolute cards */}
          <div style={{transformStyle: "preserve-3d", perspective: "1000px"}} className="w-full h-full relative ">
                <div style={{transformStyle: "preserve-3d", transform: \`translateZ($\{(subImages.length) * 20}px)\`}} 
                className='w-full rounded-md absolute h-full overflow-hidden'>

                    {/* Main image conatiner */}
                    <div className="w-full h-full relative">
                        <img src={mainImage} width={"100%"} height={"100%"} alt={img}/>
                    </div>
                </div>

                {/* sub images */}
               {
                    subImages.map((img, i) => 
                        <m.div
                        animate={{
                            x: raduis * Math.cos((i * 2 * Math.PI) / 6),
                            y: raduis * Math.sin((i * 2 * Math.PI) / 6),
                            z: i * 20
                        }}
                        transition={{
                            duration: flipDuration
                        }}
                        className={cn('top-0 translate-y-1/2 w-30 h-40 left-0 overflow-hidden right-0 mx-auto rounded-md absolute',
                            subStyle && subStyle
                        )}>
                            <div className='h-full w-full relative'>
                                <img src={img} width={"100%"} height={"100%"} alt={img}/>
                            </div>
                        </m.div>
                    )
               }
          </div>

        </m.div>
   </m.div>
  )
}

`
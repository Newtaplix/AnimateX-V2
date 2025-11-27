"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion as m, useTransform, useMotionValue } from 'motion/react'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { url } from 'inspector'

interface LightCardProps{
   className?: string,
   imageUrl?: string,
   label?: string
}

export const LightCard = ({ className, imageUrl, label}: LightCardProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const parentContainer = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleonMouseMove = (event: React.MouseEvent) => {
        if(!parentContainer.current) return;
        const target = event.target as HTMLElement
        
        const rect = target.getBoundingClientRect();
        const posx = (event.clientX - rect.left)
        const posy = (event.clientY - rect.top)

        x.set(posx)
        y.set(posy)
    }

  return (
    <div ref={parentContainer} 
    onMouseMove={handleonMouseMove} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={cn("w-64 h-40 backdrop-blur-[2px] relative border border-col p-[3px] overflow-hidden rounded-[13px] flex items-center justify-center", className)}>
      <AnimatePresence>
        {isHovered &&
         <m.div key="mimi"
         style={{ x, y,
            backgroundImage: `url("${imageUrl}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: '100%',
            height: '100%',
            filter: "blur(30px)"
          }} exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}

         className='absolute top-2 left-2 w-1/2 h-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none rounded-full -z-10'>
           
         </m.div> 
        }
      </AnimatePresence>
       
      <div className='bg-gray-50/10 dark:bg-black/80 backdrop-blur-3xl flex-col gap-1 rounded-[10px] w-full h-full pointer-events-none flex items-center justify-center'>
         
         <Image 
            src={imageUrl ?? "/icons/photos.png"} 
            alt="Light Card Preview" 
            width={56} 
            height={56} 
            className="rounded-xl"
        />
        <span className='dark:text-white'>{label}</span>
      </div>
    </div>
  )
}

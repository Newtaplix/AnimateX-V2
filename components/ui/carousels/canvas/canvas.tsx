"use client"
import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSpring , motion as m, useMotionValue, useAnimate } from 'framer-motion'
import Image from 'next/image'
import clsx from 'clsx'

interface props{
    images: string[],
    buttonStyles?: string
}

export const CanvasCarousel = ({images=[""], buttonStyles}:props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const [width, setwidth] = useState({parent: 0, card: 0})
    const [count, setcount] = useState(0)
    const [scope, animate] = useAnimate()
    const [high, setHigh] = useState(false)

    const TOTAL = images.length

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0)

    const x = useSpring(motionx, {damping:20, stiffness:100})
    const y = useSpring(motiony, {damping:20, stiffness:100})

    useEffect(() => {
        if(!containerRef.current) return;
        if(!cardRef.current) return;
        setwidth({card: cardRef.current.offsetWidth, parent: containerRef.current.offsetWidth})
    }, [])

    const handleNext = () => {
        if(count < TOTAL - 1){
            animate('.slider', {x: -width.card * (count + 1)}, {duration: 0.4})
            setcount((prev) => prev + 1)
        }
    }

    const handlePrev = () => {
        if(count !== 0){
            animate('.slider', {x: -width.card * (count - 1)}, {duration: 0.4})
            setcount((prev) => prev - 1)
        }
    }

    const Change = () => {
        if(high){
            handleNext()
        }else{
            handlePrev()
        }
    }

    const handleMouseMovement = (e:React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement

        const rec = target.getBoundingClientRect()

        const posx = (e.clientX - rec.left)
        const posy = (e.clientY - rec.top)

        if(posx > width.parent/2){
            setHigh(true)
        }else{
            setHigh(false)
        }

        animate(
            '.cursor-trail',
            {
                rotate: posx > width.parent/2 ? 180 : 0   
            },
            {
                duration: 0.3
            }
        )

        x.set(posx)
        y.set(posy)
       
    }


  return (
    <div ref={scope} className='w-full cursor-pointer rounded-md overflow-hidden relative h-[400px]'>
         
        <m.div 
            ref={containerRef} onMouseMove={(e) => handleMouseMovement(e)} 
            className='w-full h-full overflow-hidden'>
                <m.div className='h-full flex slider'>
                            {
                                images.map((img, i) => 
                                <m.div ref={cardRef} key={i} className='w-full overflow-hidden relative shrink-0 h-full bg-gray-400'>
                                    <Image src={img} fill alt={img}/>
                                </m.div>
                            )
                        }
                </m.div>
                
            <m.div whileTap="tapped" whileHover={"hovered"} initial={"idle"}
            className='w-full h-full bg-transparent absolute top-0' onClick={Change}>
                <m.div 
                    style={{
                        x, y,
                        pointerEvents: "none",
                        translateY: "-50%",
                        translateX: "-50%"
                        
                    }}
                    variants={{
                        "hovered": {
                        opacity: 1
                        },
                        "idle": {
                            opacity: 0,
                            x: 0,
                            y: 0
                        },
                        "tapped": {
                            scale: 0.96
                        }
                    }}
                    className={clsx('w-fit h-fit text-white bg-black p-4 cursor-trail rounded-full absolute',
                        buttonStyles && buttonStyles
                     )}>
                        <ArrowLeft size={23}/>
                    </m.div>
                </m.div>
            </m.div>
        <div className='p-2 px-4 rounded-full mx-auto transparent backdrop-blur-2xl border-gray-100/3 border
         absolute flex items-center justify-center gap-2 bottom-2 left-0 right-0 w-40'>
            {
                Array.from({length: TOTAL}).map((_, i) => 
                    <m.div
                    animate={{
                        width: count === i ? 28 : 0
                    }} 
                    transition={{
                        duration: 0.4
                    }}
                    key={i} className='p-1 bg-white rounded-full'>

                    </m.div>
                )
            }
        </div>
    </div>
  )
}

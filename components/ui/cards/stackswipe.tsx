"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion as m, useMotionValue, useTransform } from 'framer-motion'

export const StackSwipe = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const [current, setCurrent] = useState(-1)
     const images = ["/wall/pic1.jpeg",  "/wall/zoro.jpeg", "/wall/pic2.jpeg", "/wall/pic4.jpeg"]
    useEffect(() => {
        if(!containerRef.current) return;
        setWidth(containerRef.current.offsetWidth)
    }) 

  return (
    <div className="w-120 rounded-xl h-80 bg-red-400 overflow-x-hidden relative">
        {
            images.map((img, i) => 
                <Card i={i} backgroundImage={img} containerWidth={width} setCurrent={setCurrent} current={current}/>
            )
        }
    </div>
  )
}

interface cardProps{
    i: number,
    containerWidth: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    backgroundImage: string
}


const Card = ({i, containerWidth, backgroundImage, setCurrent, current}:cardProps) => {
    const [offset, SetOffSet] = useState(0)
  
    const x = useMotionValue(0)
    
    return(
        <m.div
        onClick={() => setCurrent(i)}
        drag="x"
        dragConstraints = {{right:0 }}
        dragMomentum= {false}
        onDragEnd={() => setCurrent(i)}
        animate={i < current || offset < -50 ? 
            {x:`-${100 - ((i + 1) * 10)}%`} : {}}
        transition={{duration: 0.4}}
        style={{
            x: i * 30,
            zIndex: 4 - i,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        className={`absolute left-0 bg-green-500 border-2 h-full w-[calc(100%-90px)] border-gray-700 rounded-xl`}>
           
        </m.div>

    )
}

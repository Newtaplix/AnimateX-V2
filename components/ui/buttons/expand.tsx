"use client"
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { DragControls, motion as m, useAnimation } from 'framer-motion'

export const ExpandButton = () => {
    const controls = useAnimation()
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const colors = ["green", "yellow", "red", "blue"]

    const randomNumberGenerator = (a:number, b:number) => {
        return Math.floor(Math.random() * (b - a + 1)) + a
    }

    // useEffect(() => {
    //     cons
    // })

  return (
    // <m.button
    // whileHover={"hovered"} initial={"idle"} 
    // className='p-2 cursor-pointer pl-6 flex relative gap-2 items-center overflow-hidden rounded-full px-4 bg-gray-100'>
    //     <m.div
    //     variants={{
    //         'hovered': {
    //             width: "100%",
    //             height: 70,
    //             backgroundColor: "#FFFF00",
    //             x: 0
    //         },
    //         'idle': {
    //             x: 12,
    //             width: 8,
    //             height: 8
    //         }
    //     }} 
    //     transition={{
    //         duration: 0.3
    //     }}
    //     style={{
    //         zIndex: 1
    //     }} 
    //     className='bg-black left-0 w-2 h-2 absolute rounded-full'/>
    //     <span style={{ zIndex: 5 }} className='flex gap-2 items-center relative'>
    //         Expand Button
    //         <m.span
    //         variants={{
    //             'hovered': {
    //                 width: 8,
    //                 opacity: 1,
    //                 x: 0
    //             },
    //             'idle': {
    //                 width: 0,
    //                 opacity: 0,
    //                 x: 3
    //             }
    //         }}
    //         >
    //             <ArrowRight size={18}/>
    //         </m.span>
    //     </span>
    // </m.button>

    <div className='w-60 h-70 rounded-md'>
       {
        colors.map((color, i) => {
            const randomMove = async () => {
                while(true){
                    await controls.start({
                        x: randomNumberGenerator(400 , 200),
                        y: randomNumberGenerator(400, 200),
                        transition: {
                            duration: 2, ease: "easeInOut"
                        }
                    })
                }
            }

            useEffect(() => {
                randomMove()
            })
        
            return(
                <m.div animate={controls} className='w-20 box h-20 rounded-full bg-red-400'/>
            )
        })
       }
    </div>
  )
}

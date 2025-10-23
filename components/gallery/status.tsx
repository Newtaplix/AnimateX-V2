"use client"
import React, { useState } from 'react'
import { Bus, Calendar, CircleDashed, Ellipsis, MapPin, TreePalm } from 'lucide-react'
import { motion as m, AnimatePresence, Variants } from 'framer-motion'


export const Status = () => {
    const [isOpen, setIsOpen] = useState(false)
    const stats = [
        {
            text: "Commuting",
            icon: <Bus size={18}/>
        },
        {
            text: "In a meeting",
            icon: <Calendar size={18}/>
        },
        {
            text: "On my way",
            icon: <MapPin size={18}/>
        },
        {
            text: "On vacationn",
            icon: <TreePalm size={18}/>
        }
    ]

    const TabVariant: Variants = {
        "initial" : {
            opacity: 0,
            filter: "blur(4px)",
            scale: 0.95,
            y: 3
        },
        "display": {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0
        }
    }

    const TextVariant: Variants = {

    }

  return (
    <m.div onClick={() => setIsOpen(!isOpen)} whileTap={{scale: 0.97}}
    className='flex items-center gap-2 p-2 justify-center cursor-pointer rounded-full px-4 bg-gray-50 relative'>
        <CircleDashed size={18}/>
        Status

       <AnimatePresence>
        {
                isOpen &&
                <m.div variants={TabVariant} 
                initial="initial" animate="display" exit="initial"
                className='absolute flex gap-2 w-fit bg-white rounded-full
                p-[4px] border border-gray-100 -top-2 -translate-y-full'>
                    {
                        stats.map((stat, i) => 
                            <m.span whileHover={"show"} initial="hidden" className='p-2 rounded-full bg-gray-100 relative'>
                                {stat.icon}
                            
                                <m.div variants={{
                                    "show": {
                                        filter: "blur(0px)",
                                        opacity: 1
                                    },
                                    "hidden": {
                                        filter: "blur(4px)",
                                        opacity: 0
                                    }}} 
                                className='absolute shrink-0 w-30 flex justify-center 
                                left-0 bg-gray-50 p-2 rounded-full -top-3 -translate-y-full'>
                                    {stat.text}
                                </m.div>
                            </m.span>
                        )
                    }
                    <span className='p-2 rounded-full bg-gray-100'><Ellipsis size={18}/></span>
                </m.div>
            }
       </AnimatePresence>
    </m.div>
  )
}

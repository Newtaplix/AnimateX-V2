"use client"
import React, { useState } from 'react'
import { Smile, Angry } from 'lucide-react'
import { PrimaryButton } from './primarybutton'
import { motion as m } from 'framer-motion'

export const Feedback = () => {
    const [isOpen, setOpen] = useState(false)
    const icons = [
        {
            icon:<Smile size={20}/>,
            stat: "Good"
        },
        {
            icon:<Angry size={20}/>,
            stat: "Bad"
        },
        {
            icon:<Smile size={20}/>,
            stat: "Good"
        }
    ]
  return (
    <m.div 
    style={{
        borderRadius: "20px"
    }}
    animate={{
        height: isOpen ? 222 : 50,
        borderRadius: isOpen ? 20 : 30   
    }}
    className='p-2 rounded-full bg-[var(--secondary)] overflow-hidden mt-5 flex flex-col gap-2
    mx-auto w-80 border border-col'>
        <div className="flex items-center justify-center gap-2">
            <span>Feedback</span>
            <div className="flex-center gap-4">
                {
                    icons.map((icon, i) =>
                        <div key={i} onClick={() => setOpen(true)} className='rounded-full cursor-pointer
                         p-1 hover:bg-[var(--secondary-hover)]'>
                            {icon.icon}
                        </div>
                    )
                }
            </div>
        </div>
        <m.div animate={{opacity: isOpen ? 1 : 0}} transition={{delay: 0.1}} className='flex flex-col items-end gap-2'>
            <textarea className='p-2 rounded-xl border bg-[var(--bg)] h-30 w-full border-col outline-none' placeholder='Message' >

            </textarea>
            <PrimaryButton text='Send' type='button' onClick={() => setOpen(false)}/>
        </m.div>
    </m.div>
  )
}

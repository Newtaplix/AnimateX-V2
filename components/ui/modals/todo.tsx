"use client"
import { AnimatePresence, motion as m } from 'framer-motion'
import { Mic, Paperclip } from 'lucide-react'
import React, { useState } from 'react'

export const Todo = () => {
  const [list, setList] = useState<string[]>([])

  const handleAdd = () => {
    const item = "Added list item"
    setList((prev) => [...prev, item]) 
  }

  const handleDelete = () => {
    setList(list.filter((_, i) => i !== (list.length - 1)))
  }
  const buttonStyles = "p-4 rounded-full bg-white/90 dark:bg-neutral-600/90 text-black dark:text-white"
  const inputStyles = "p-2 rounded-full bg-white/90 dark:bg-neutral-600/90 text-black flex-1 dark:text-white"
  
  

  return (
    <div>
        <div className='w-90 h-[350px] mt-2 bg-blue-300 p-2 justify-end flex-col flex relative gap-2 overflow-hidden rounded-2xl'>
          
          <div className='flex gap-2'>
              <button className={buttonStyles}>
                <Paperclip size={23}/>
              </button>
              <div className={inputStyles}>
                <input placeholder='message'/>

              </div>
              <button className={buttonStyles}>
                <Mic size={23}/>
              </button>
          </div>
        </div>
    </div>
    )  
}




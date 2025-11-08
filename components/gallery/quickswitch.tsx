"use client"
import { ArrowRight, ChevronsUpDown, Image, Images, Sparkle } from 'lucide-react'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'

export const QuickSwitcher = () => {
  const [current, setcurrent] = useState(1)
  const texts = ["Generate Image", "Ask Anything"]
  const inputRef = useRef<HTMLInputElement>(null)
  const [isTyping, setTyping] = useState(false)
  const [text, setText] = useState<string>("")  

  useEffect(() => {
    const input = inputRef.current
    if(!input) return;
    input.focus()
  })

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if(text.length === 0){
      setTyping(false)
    }else{
      setTyping(true)
    }
  }

  const Switch = () => {
    if(current === 1){
      setcurrent(0)
    }else{
      setcurrent(1)
    }
    const text = "Ask Anything"
    console.log(text.split(""))
  }

  const iconVariannt: Variants = {
    "initial": {
      opacity: 0,
      scale: 0.8,
      filter: "blur(4px)",
     
    },
    "animate": {
      opacity :1,
      filter: 0,
      scale: 1,
    
    }}

  const textVariants: Variants = {
    "initial": {
      opacity: 0,
      y: 5,
      filter: "blur(2px)",
      scale: 0.8
    },
    display: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.015
      }
    }),
    "out": {
      scale: 0.8,
      y: 5,
      opacity: 0,
      filter: "blur(2px)",
      transition: {
        delay: 0
      }
    }
  }

  return (
    <div className="w-[95%] md:w-90 items-center bg-gray-200 dark:text-gray-300 dark:bg-neutral-900 h-12 border gap-0.5 rounded-full p-1 border-gray-50 dark:border-neutral-800 flex">
        <m.div onClick={Switch} 
        whileTap={{scale: 0.97}} 
        className='bg-white dark:bg-black cursor-pointer rounded-full flex items-center gap-1 h-full p-2'>
            <AnimatePresence mode='popLayout'>
              {
                 current === 0 ?
                 <m.span 
                 key={"icon1"}
                 initial="initial"
                 animate="animate"
                 exit="initial"
                 variants={iconVariannt}>
                
                  <Images size={20}/></m.span> :
                 <m.span
                 initial="initial"
                 animate="animate"
                 exit="initial"
                 key={"icon2"}
                 variants={iconVariannt}>
                  <Sparkle size={20}/></m.span>
              }
            </AnimatePresence>
            <span className='flex flex-col items-center justify-center'>
                <ChevronsUpDown size={17} className='text-gray-500'/>
            </span>
        </m.div>
        <div className='flex-1 h-full relative flex items-center justify-center'>
         {
            !isTyping &&
             <div 
              className='h-full items-center flex w-full whitespace-pre left-1 absolute'>
                <AnimatePresence mode='popLayout'>
                  {
                      texts.map((text, i) => 
                        current === i &&
                          text.split("").map((l, index) => 
                            <m.span key={`${i} + ${l + index}`} variants={textVariants} 
                            animate="display"
                            exit="out"
                            custom={index}
                            initial="initial" className='text-gray-500'>{l}</m.span>
                          )
                      )
                    }
                </AnimatePresence>
              </div>
              
         }
          <input ref={inputRef} value={text} 
          onChange={(e) => onChange(e)} 
          className='flex-1 w-full outline-none px-1 h-full'/>
        </div>
        
        <div className='p-2 rounded-full bg-white dark:bg-black'>
            <ArrowRight size={18}/>
        </div>

    </div>
  )
}

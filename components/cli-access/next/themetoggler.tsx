"use client"
import React, { useState } from 'react'
import { ThemeProvider , useTheme} from 'next-themes'
import { AnimatePresence, motion as m, Variants } from 'motion/react'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'


interface ThemeToggleProps {
    simple?: boolean
}


export const ThemeWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme='system'
    enableSystem={true}
    disableTransitionOnChange
        >
        {children}
    </ThemeProvider>
  )
}

export const ThemeToggler = ({simple = false}: ThemeToggleProps) => {
  const { theme, setTheme} = useTheme()
  const LightIconVariants: Variants = {
    "hidden": {
      x: -8,
      opacity: 0,
      scale: 0.98
    },
    "visible": {
      x: 0,
      opacity: 1,
      scale: 1
    }

  }

  const DarkIconVariants: Variants = {
    "hidden": {
      x: 8,
      opacity: 0,
      scale: 0.98
    },
    "visible": {
      x: 0,
      opacity: 1,
      scale: 1
    }

  }

  const ThemeControl = () => {
    if(theme === "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  const MakeTransition = () => {
    if(!document.startViewTransition) ThemeControl()
    document.startViewTransition(ThemeControl)
  }

  const ThemeSwitch = () => {
    if(simple){
        ThemeControl()
    }else{
        MakeTransition()
    }
  }
  return (
    <div onClick={ThemeSwitch} 
    className={cn('w-14 p-[1px] flex items-center cursor-pointer bg-gray-50 dark:bg-neutral-800 rounded-full border-2 border-col',
      theme === "dark" ? "flex-row-reverse" : "justify-start"
    )}>
        <m.div layout className='w-6 h-6 rounded-full bg-gray-500 dark:bg-black z-10'/>
        <m.div layout className='w-6 h-6 rounded-full p-[1px] items-center justify-center flex overflow-hidden'>
          <AnimatePresence mode='wait'>
            {
              theme === "dark" ?
              <m.span key={"dark"} 
              variants={DarkIconVariants} 
              transition={{
                duration: 0.2
              }}
              initial={"hidden"} 
              exit={"hidden"} 
              animate="visible"> 
                <Moon size={18}/>
              </m.span>
               :
              <m.span key={"light"} 
              variants={LightIconVariants}
              transition={{
                duration: 0.2
              }} 
              initial={"hidden"} 
              exit={"hidden"} 
              animate="visible">
                <Sun size={18}/>
              </m.span>
            }
          </AnimatePresence>
        </m.div>
    </div>
  )
}



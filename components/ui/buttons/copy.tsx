"use client"
import { motion as m, Variants, AnimatePresence } from 'framer-motion'
import { Check, CircleCheck, Copy } from 'lucide-react'
import React, { HTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils'

type buttonProps = HTMLAttributes<HTMLButtonElement> & {
    className?: string,
    onClick?: () => void,
    iconSize?: number,
    delay?: number,
    animationVariant?: number,
    text?: string
}



export const CopyButton: React.FC<buttonProps> = ({className, onClick, iconSize = 18, delay=2, animationVariant = 1, text
}:buttonProps) => {

    const [Copying, setCopying] = useState(false)

    const HandleCopying = () => {
        setCopying(true)
        setTimeout(() => setCopying(false), delay ? delay * 1000 : 1000)
    }


    const IconVariants: Variants = {
        "initial": {
            opacity: 0,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }
        
    }

    const IconVariants2: Variants = {
        "initial": {
            opacity: 0,
            y: -10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          },
        "initial2": {
            opacity: 0,
            y: 10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate2": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }

    }

    const variant = 
    animationVariant === 1 ? IconVariants 
    : animationVariant === 2 ? IconVariants2 :
     {}


  return (
   <m.button 
   whileTap={{scale: 0.97}}
   onClick={() => {
    HandleCopying()
    if(onClick){
        onClick()}
   }}
   style={
    Copying ?
    { pointerEvents: "none" } : {}
   }
   className={cn('flex gap-2 items-center overflow-hidden p-2 px-6 rounded-full hover:bg-gray-300 hover:dark:bg-neutral-800 cursor-pointer text-black dark:text-white', 
                className && className
   )}>
       <AnimatePresence mode='popLayout'>
            {
                Copying ?
                <m.div key='icon1' variants={variant} initial="initial" animate="animate" exit="initial">
                <Check size={iconSize}/> </m.div>
                :
                <m.div key='icon2' variants={variant} 
                initial={animationVariant === 2 ? "initial2" : "initial"} 
                animate={animationVariant === 2 ? "animate2" : "animate"} 
                exit={animationVariant === 2 ? "initial2" : "initial"}>
                <Copy size={iconSize}/></m.div>
            }
       </AnimatePresence>
       {text}
   </m.button>
  )
}

export const CodeTs = `
"use client"
import { motion as m, Variants, AnimatePresence } from 'framer-motion'
import { CircleCheck, Copy } from 'lucide-react'
import React, { HTMLAttributes, useState } from 'react'
import { cn } from '@/app/lib/utils'

type buttonProps = HTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
    className?: string,
    onClick?: () => void,
    iconSize?: number,
    delay?: number,
    animationVariant?: number,
    text?: string
}



export const CopyButton: React.FC<buttonProps> = ({
   className, onClick, iconSize = 18, delay=2, animationVariant = 1, text
}:buttonProps) => {

    const [Copying, setCopying] = useState(false)

    const HandleCopying = () => {
        setCopying(true)
        setTimeout(() => setCopying(false), delay ? delay * 1000 : 1000)
    }


    const IconVariants: Variants = {
        "initial": {
            opacity: 0,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }
        
    }

    const IconVariants2: Variants = {
        "initial": {
            opacity: 0,
            y: -10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          },
        "initial2": {
            opacity: 0,
            y: 10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate2": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }

    }

    const variant = 
    animationVariant === 1 ? IconVariants 
    : animationVariant === 2 ? IconVariants2 :
     {}


  return (
   <m.button 
   whileTap={{scale: 0.97}}
   onClick={() => {
    HandleCopying()
    if(onClick){
        onClick()}
   }}
   style={
    Copying ?
    { pointerEvents: "none" } : {}
   }
   className={cn('flex gap-2 items-center p-2 px-6 rounded-full hover:bg-gray-300 hover:dark:bg-neutral-800 cursor-pointer bg-gray-200 text-black dark:bg-neutral-900 dark:text-white', 
                className && className
   )}>
       <AnimatePresence mode='popLayout'>
            {
                Copying ?
                <m.div key='icon1' variants={variant} initial="initial" animate="animate" exit="initial">
                <CircleCheck size={iconSize}/> </m.div>
                :
                <m.div key='icon2' variants={variant} 
                initial={animationVariant === 2 ? "initial2" : "initial"} 
                animate={animationVariant === 2 ? "animate2" : "animate"} 
                exit={animationVariant === 2 ? "initial2" : "initial"}>
                <Copy size={iconSize}/></m.div>
            }
       </AnimatePresence>
       {text}
   </m.button>
  )
}

`

export const CodeJs = `
"use client"
import { motion as m, Variants, AnimatePresence } from 'framer-motion'
import { CircleCheck, Copy } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/app/lib/utils'

type buttonProps = React.ComponentPropsWithoutRef<"button"> & {
    className?: string,
    onClick?: () => void,
    iconSize?: number,
    delay?: number,
    animationVariant?: number,
    text?: string
}



export const CopyButton: React.FC<buttonProps> = ({ className, onClick, iconSize = 18, delay=2, animationVariant = 1, text
}) => {

    const [Copying, setCopying] = useState(false)

    const HandleCopying = () => {
        setCopying(true)
        setTimeout(() => setCopying(false), delay ? delay * 1000 : 1000)
    }


    const IconVariants = {
        "initial": {
            opacity: 0,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }
        
    }

    const IconVariants2 = {
        "initial": {
            opacity: 0,
            y: -10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          },
        "initial2": {
            opacity: 0,
            y: 10,
            filter: "blur(3px)",
            scale: 0.8
        },
        "animate2": {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1 ,
            transition: {
                ease: "easeInOut"
            }     
          }

    }

    const variant = 
    animationVariant === 1 ? IconVariants 
    : animationVariant === 2 ? IconVariants2 :
     {}


  return (
   <m.button 
   whileTap={{scale: 0.97}}
   onClick={() => {
    HandleCopying()
    if(onClick){
        onClick()}
   }}
   style={
    Copying ?
    { pointerEvents: "none" } : {}
   }
   className={cn('flex gap-2 items-center p-2 px-6 rounded-full hover:bg-gray-300 hover:dark:bg-neutral-800 cursor-pointer bg-gray-200 text-black dark:bg-neutral-900 dark:text-white', 
                className && className
   )}>
       <AnimatePresence mode='popLayout'>
            {
                Copying ?
                <m.div key='icon1' variants={variant} initial="initial" animate="animate" exit="initial">
                <CircleCheck size={iconSize}/> </m.div>
                :
                <m.div key='icon2' variants={variant} 
                initial={animationVariant === 2 ? "initial2" : "initial"} 
                animate={animationVariant === 2 ? "animate2" : "animate"} 
                exit={animationVariant === 2 ? "initial2" : "initial"}>
                <Copy size={iconSize}/></m.div>
            }
       </AnimatePresence>
       {text}
   </m.button>
  )
}


`

export const usecase = `
import { CopyButton } from '../buttons/copy'

export const page = () => {
    return(
        <CopyButton text="Copy Page"/>
    )
}

`
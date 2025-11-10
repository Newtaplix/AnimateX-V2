"use client"
import { Loader, Loader2 } from 'lucide-react'
import React from 'react'
import { motion as m, AnimatePresence, Variants } from 'motion/react'
import { cn } from '@/app/lib/utils'

const Loader1 = () => {
    return (
        <Loader2 size={20} className='animate-spin'/>
    )
}

const Loading2 = () => {
    return (
        <Loader size={20} className='animate-spin'/>
    )
}

const Loading3 = () => {
    return(
       <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                    initial={{y: 0}}
                    animate={{
                        y: [-3, 3],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                    
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 bg-white m-[3px] rounded-full'/>
                )
            }
       </>
    )
}


const Loading4 = () => {
    return( 
        <>
             {
                Array.from({length: 3}).map((_, i) => 
                    <m.div key={i}
                   
                    animate={{
                        backgroundColor: ["#99a1af","#364153"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: (i + 1) * 0.25,
                        repeatType: "reverse",
                        repeatDelay: 0.26,
                        ease: "linear",
                        
                    }}
                    className='w-2 h-2 m-[3px] rounded-full'/>
                )
            }
        </>
    )
}


interface buttonProps{
    animationVariant?: number,
    text?: React.ReactNode | string,
    loading: boolean,
    onClick?: () => void,
    className?: string
}

export const LoadingButton = ({animationVariant, text="Button", onClick, className, loading }:buttonProps) => {
    const animationVariants: Variants = {
        "childhidden": {
            y: -20,
            opacity: 0
        },
        "childVisible": {
            y: 0,
            opacity: 1
        },
        "iconHidden": {
            opacity: 0,
            y: 20
        },
        "iconVisible": {
            opacity: 1,
            y: 0
        }
    }
   
    const loader = animationVariant === 4 ? <Loading4/> :
    animationVariant === 2 ? <Loading2/> :
    animationVariant === 3 ? <Loading3/> :
    <Loader1/>
  return (
    <m.button whileTap={{scale: 0.98}} onClick={() => {if(onClick){onClick()}}} disabled={loading}

    className={cn('p-2 rounded bg-black overflow-hidden hover:bg-neutral-900 cursor-pointer h-10 text-white px-4 flex items-center justify-center min-w-30',
        loading ? "cursor-not-allowed" : "cursor-pointer", className && className

    )}>
       <AnimatePresence mode='wait'>
            {
                loading ? 
                <m.span key={"icon"} variants={animationVariants} 
                className='w-full h-full flex items-center justify-center'
                initial="iconHidden" animate="iconVisible" exit="iconHidden">{loader}</m.span> 
                
                :

                <m.span variants={animationVariants} key={"child"}
                initial="childhidden" animate="childVisible" exit="childhidden"
                 className='w-full h-full flex items-center justify-center'>
                    {text}
                </m.span>
            }
       </AnimatePresence>
    </m.button>
  )
}
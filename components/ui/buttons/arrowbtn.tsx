"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import clsx from 'clsx'

interface props{
    text?: string,
    onClick?: () => void,
    className?: string,
    bgPrimaryColor?: string,
    bgSecondaryColor?: string,
    textPrimaryColor?: string,
    textSecondaryColor?: string
}

export const ArrowButton = ({
    text="ArrowButton", 
    onClick, 
    bgPrimaryColor="#FFFFFF",
    bgSecondaryColor="#000000", 
    textPrimaryColor="#000000",
    textSecondaryColor="#FFFFFF", 
    className}:props) => {
  
    const [ isHovered, setIsHovered] = useState(false)
  
    return (
    <motion.button layout
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    whileTap={{scale: 0.98}}
    animate = {{
        background : isHovered ? bgSecondaryColor : bgPrimaryColor ,
        color: isHovered ? textSecondaryColor : textPrimaryColor,
    }}
    className={clsx("flex items-center cursor-pointer rounded-md p-2 shrink-0 overflow-hidden gap-2 justify-center",
        className && className
    )}>
        <motion.div
            transition={{duration: 0.3, ease: "linear"}}
            animate={{
                width: isHovered ? 24 : 8, 
                height: isHovered ? 24 : 8,
                background: isHovered ? bgPrimaryColor : bgSecondaryColor ,
                color: isHovered ? textPrimaryColor : textSecondaryColor 

            }}
        className='overflow-hidden rounded-full flex items-center justify-center p-[3px]'>

            {/* Arrow container */}
            <motion.div
            initial={{opacity: 0, rotate: "140deg", x: -50}} 
            animate={{ opacity: isHovered ? 1 : 0, 
                    rotate: isHovered ? "180deg" : "0deg",
                    x: isHovered ? 0 : -50}}
            transition={{
                duration: 0.5
            }}
                >
                <ArrowLeft size={20}/>
            </motion.div>
        </motion.div>

        {/* text */}
        {text}
    </motion.button>
  )
}


export const Code = `
"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import clsx from 'clsx'

interface props{
    text?: string,
    onClick?: () => void,
    className?: string,
    bgPrimaryColor?: string,
    bgSecondaryColor?: string,
    textPrimaryColor?: string,
    textSecondaryColor?: string
}

export const ArrowButton = ({text="ArrowButton", 
    onClick, 
    bgPrimaryColor="#FFFFFF",
    bgSecondaryColor="#000000", 
    textPrimaryColor="#000000",
    textSecondaryColor="#FFFFFF", 
    className}:props) => {
  
    const [ isHovered, setIsHovered] = useState(false)
  
    return (
    <motion.button layout
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    whileTap={{scale: 0.98}}
    animate = {{
        background : isHovered ? bgSecondaryColor : bgPrimaryColor ,
        color: isHovered ? textSecondaryColor : textPrimaryColor,
    }}
    className={clsx("flex items-center cursor-pointer rounded-md p-2 shrink-0 overflow-hidden gap-2 justify-center",
        className && className
    )}>
        <motion.div
            transition={{duration: 0.3, ease: "linear"}}
            animate={{
                width: isHovered ? 24 : 8, 
                height: isHovered ? 24 : 8,
                background: isHovered ? bgPrimaryColor : bgSecondaryColor ,
                color: isHovered ? textPrimaryColor : textSecondaryColor 

            }}
        className='overflow-hidden rounded-full flex items-center justify-center p-[3px]'>

            {/* Arrow container */}
            <motion.div
            initial={{opacity: 0, rotate: "140deg", x: -50}} 
            animate={{ opacity: isHovered ? 1 : 0, 
                    rotate: isHovered ? "180deg" : "0deg",
                    x: isHovered ? 0 : -50}}
            transition={{
                duration: 0.5
            }}
                >
                <ArrowLeft size={20}/>
            </motion.div>
        </motion.div>

        {/* text */}
        {text}
    </motion.button>
  )
}
`

export const CodeJS = `
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import clsx from 'clsx'

export const ArrowButton = ({text="ArrowButton", 
    onClick, 
    bgPrimaryColor="#FFFFFF",
    bgSecondaryColor="#000000", 
    textPrimaryColor="#000000",
    textSecondaryColor="#FFFFFF", 
    className}) => {
  
    const [ isHovered, setIsHovered] = useState(false)
  
    return (
    <motion.button layout
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    whileTap={{scale: 0.98}}
    animate = {{
        background : isHovered ? bgSecondaryColor : bgPrimaryColor ,
        color: isHovered ? textSecondaryColor : textPrimaryColor,
    }}
    className={clsx("flex items-center cursor-pointer rounded-md p-2 shrink-0 overflow-hidden gap-2 justify-center",
        className && className
    )}>
        <motion.div
            transition={{duration: 0.3, ease: "linear"}}
            animate={{
                width: isHovered ? 24 : 8, 
                height: isHovered ? 24 : 8,
                background: isHovered ? bgPrimaryColor : bgSecondaryColor ,
                color: isHovered ? textPrimaryColor : textSecondaryColor 

            }}
        className='overflow-hidden rounded-full flex items-center justify-center p-[3px]'>

            {/* Arrow container */}
            <motion.div
            initial={{opacity: 0, rotate: "140deg", x: -50}} 
            animate={{ opacity: isHovered ? 1 : 0, 
                    rotate: isHovered ? "180deg" : "0deg",
                    x: isHovered ? 0 : -50}}
            transition={{
                duration: 0.5
            }}
                >
                <ArrowLeft size={20}/>
            </motion.div>
        </motion.div>

        {/* text */}
        {text}
    </motion.button>
  )
}
`


export const UseCase = `
"use client"
import React from 'react'
import { ArrowButton } from './arrowbtn'

const Page = () => {

  return (
    <ArrowButton bgPrimaryColor='#e2e2e2' className='shadow-md shadow-gray-100'/>
  )
}

export default Page
`

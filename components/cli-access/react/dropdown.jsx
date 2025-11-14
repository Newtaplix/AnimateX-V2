"use client"
import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion as m, Variants } from 'motion/react'


export const DropDown = ({defaultOption={text: "", value: ""}, stagger, layered=false,
    className, menuStyle, layerStyle, optionStyle, options, smartDirection = false, onChange
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [choosen, setChoosen] = useState(defaultOption)
    const [isHovered, setIsHovered] = useState(-1)
    const triggerRef = useRef(null)
    const menuRef = useRef(null)
    const [direction, setDirection] = useState("down")
        
    useEffect(() => {
       if(onChange){
         onChange(defaultOption.value)
       }
        const handleClickOutside = (event) => {
            if (triggerRef.current && !triggerRef.current.contains(event.target) &&
                menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [triggerRef, menuRef]);
    useEffect(() => {
        if(!isOpen) return;
        if(!triggerRef.current) return;
        if(!menuRef.current) return;

        if(smartDirection){
            const triggerRect = triggerRef.current?.getBoundingClientRect()
            const menuHieght = menuRef.current?.offsetHeight

            const spaceBelow = window.innerHeight - triggerRect.bottom

            const spaceAbove = triggerRect.top

            if(spaceBelow < menuHieght && spaceAbove > menuHieght){
                setDirection("up")
            }else{
                setDirection("down")
            }
        }
        

    }, [isOpen])

    const animationVariant = {
        "initial": {
            opacity: 0,
            scale: 0.97,
            y: direction === "up" ? 15 : -15 ,
            transition: {
                duration: 0.15
            }
        },
        "visible": {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.2,
            }
        }
    } 

    const OptionVariant = {
        "initial": {
            opacity: 0,
            y: 5
           
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: stagger ? i * (0.18 + stagger) : 0
            }          
        })
    } 

  return (
    <m.div ref={triggerRef}  onClick={() => setIsOpen(!isOpen)} 
    className={cn('p-2 rounded-xl flex items-center z-10 cursor-pointer dark:bg-neutral-950 dark:border-neutral-900 dark:border-2 bg-gray-50 relative justify-between px-4 border w-80 border-gray-100',
        className && className
    )}>
        {
            choosen.value === "" ? "Select Option" : choosen.text 
        }
        <ChevronDown size={18} className={cn('transition-transform duration-300', isOpen ? "rotate-180" : "rotate-0")}/>
        <AnimatePresence>
            {
                isOpen && 
                <m.div
                ref={menuRef} 
                variants={animationVariant}
                initial="initial"
                animate="visible"
                exit="initial" 
                className={cn('absolute w-full rounded-xl text-[14px] overflow-hidden left-0 dark:bg-neutral-950 dark:border-neutral-900 dark:border-2 bg-white border border-gray-100',
                    direction === "up" ? "-top-1 -translate-y-full" : "translate-y-full -bottom-1",
                    menuStyle && menuStyle
                )}>
                        {
                            options.map((value, i) => 
                                <m.div variants={OptionVariant} 
                                    onClick={() => {
                                    setChoosen({value: value.value, text: value.text})
                                    onChange && onChange(value.value)
                                }}
                                    initial="initial"
                                    animate="visible"
                                    custom={i} 
                                
                                    onMouseEnter={() => { if(layered){setIsHovered(i)}}}
                                    onMouseLeave={() => setIsHovered(-1)}
                                    key={i} className={cn('p-2 relative',
                                        optionStyle && optionStyle ,
                                        layered ? "hover:bg-none dark:hover:bg-none" : "dark:hover:bg-neutral-900 hover:bg-gray-100"
                                    )}>
                                        {
                                            isHovered === i && layered &&
                                            <m.div layoutId='layer' className={cn('absolute w-full h-full dark:bg-neutral-900 bg-gray-100 -z-10 top-0 left-0',
                                                layerStyle && layerStyle
                                            )}/>
                                        }
                                    {value.text}
                                </m.div>
                            )
                        }
                </m.div>  
            }
        </AnimatePresence>
    </m.div>
  )
}

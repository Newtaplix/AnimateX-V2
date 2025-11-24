
import { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion as m } from 'motion/react'
import { cn } from '../../lib/utils'
import { Moon, Sun } from 'lucide-react'

const ThemeProvider = createContext()
export const ThemeWrapper = ({ children }) => {
    const [theme, setTheme] = useState(() => {
       return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
        const root = document.documentElement;

        if(theme === "dark"){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        if(theme === "dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

    return (
        <ThemeProvider.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeProvider.Provider>
    )
}
export const useTheme = () => {
  const context = useContext(ThemeProvider);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};


export const ThemeToggler = () => {
  
  const { theme, toggleTheme} = useTheme()

  const LightIconVariants = {
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

  const DarkIconVariants = {
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

  // const ThemeControl = () => {
  //   if(theme === "light"){
  //     setTheme("dark")
  //   }else{
  //     setTheme("light")
  //   }
  // }

  const MakeTransition = () => {
    if(!document.startViewTransition) toggleTheme()
    document.startViewTransition(toggleTheme)
  }
  return (
    <div onClick={MakeTransition} 
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

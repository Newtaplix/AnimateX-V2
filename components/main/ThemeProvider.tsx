"use client"
import React, { useState } from 'react'
import { ThemeProvider , useTheme} from 'next-themes'
import { Laptop, Moon, Sun } from 'lucide-react'


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

const themes = [
  {
    icon: <Sun size={18}/>,
    text: "Light",
    theme: "light"
  },
  {
    icon: <Moon size={18}/>,
    text: "Dark",
    theme: "dark"
  },
  {
    icon: <Laptop size={18}/>,
    text: "System",
    theme: "system"
  },

]


export const ThemeToggler = () => {
    const { theme, setTheme} =  useTheme();
    const [isOpen, setOpen] = useState(false)
    return (
        <div onClick={() => setOpen(!isOpen)} 
        className='flex-center justify-center p-2 relative hover:bg-[var(--secondary-hover)] cursor-pointer rounded-full'>
            {theme === "dark" ? <Moon size={18}/> : theme === "light" ? <Sun size={18}/> : <Laptop size={18}/>}
           {
              isOpen &&
              <div className='absolute top-0 translate-y-[30%] right-0 bg-[var(--secondary)] rounded-md border-col border'>
                {
                  themes.map((type, i) => 
                    <div onClick={() => setTheme(type.theme)} key={i} className='flex-center gap-2 p-1 hover:bg-gray-500/6 px-4'>
                      {type.icon}
                      {type.text}
                    </div>
                  )
                }
              </div>
           }
        </div>
    )
}
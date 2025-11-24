
import { createContext, useContext, useState, useEffect } from "react";

const ThemeProvider = createContext()
const ThemeWrapper = ({ children }) => {
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
export const useTheme = () => useContext(ThemeWrapper)



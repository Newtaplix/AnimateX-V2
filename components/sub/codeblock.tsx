"use client"
import React from 'react'
import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

interface props{
    code: string,
    language: string
}

const CodeBlock = ({code, language}:props) => {
    const { theme } = useTheme()
 
  return (
   <Prism language="typescript" style={theme === "dark" ? vscDarkPlus : vs} 
   customStyle={{ padding: "1rem", overflowX: "hidden", height: "auto", 
    overflowY: "hidden", 
    fontSize: "18px",
   fontFamily: '"Fira Code", "JetBrains Mono", monospace'}}>
    {code.trim()}
   </Prism>
  )
}

export default CodeBlock
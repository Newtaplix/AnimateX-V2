"use client"
import React from 'react'
import { motion as m } from 'framer-motion'
import { Loader } from 'lucide-react'

export const ComponentLoader = () => {
  return (
    <m.div animate={{rotate: 360}} transition={{duration: 0.5, repeat:Infinity, ease: "linear"}} ><Loader size={24}/></m.div>
  )
}

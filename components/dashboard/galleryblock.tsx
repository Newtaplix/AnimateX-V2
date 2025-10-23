"use client"
import React from 'react'
import { motion as m } from 'framer-motion'

interface props{
    colspan?: number,
    rowspan?: number,
    component?: React.ReactNode,
    inspiredBy?: string
}

export const GalleryBlock = ({colspan = 1, rowspan = 1, inspiredBy, component}:props) => {
  return (
    <m.div initial="ini" whileHover="display" style={{
        gridColumn: `span ${colspan} / span ${colspan}`,
        gridRow: `span ${rowspan} / span ${rowspan}`

    }}
    className='min-h-[200px] flex justify-center gradient p-2 
    bg-[var(--bg)] border border-col flex-col rounded-2xl w-full'>
      <div className='w-full flex items-center justify-center h-full'>
        {component}
      </div>
      <m.p
      variants={{
        "ini": {
          opacity: 0
        },
        "display": {
          opacity: 1
        }}} 
      className={`text-[14px]`}>
        Inspired by <span className='text-black font-bold'>{inspiredBy}</span></m.p>
            
    </m.div>
  )
}

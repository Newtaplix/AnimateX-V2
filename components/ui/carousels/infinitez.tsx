"use client"
import React, { useEffect } from 'react'
import { motion as m, useAnimationControls} from 'framer-motion'

export const InfiniteZ = () => {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({x: "-50%", transition: {duration: 15, repeat: Infinity, ease: "linear"}})
  }, [])

  return (
    <div className='w-full overflow-hidden'>
        <m.div
        style={{
          perspective: "2500px",
          transformStyle: "preserve-3d"
        }} 
        animate={controls} 
        className='flex w-fit'>
            {
                Array.from({length: 7}).map((_, i) => 
                    <div key={i} 
                      style={{
                        transform: `rotateY(${(i + 1) * 45}deg)`,
                        transformOrigin: "center center"
                      }}
                    className='w-70 shrink-0 h-90 rounded-md bg-gray-400 flex items-center justify-center'>
                      {i}
                    </div>
                )
            }
              {
                Array.from({length: 7}).map((_, i) => 
                    <div key={i} 
                      style={{
                        transform: `rotateY(45deg)`,
                      }}
                    className='w-70 shrink-0 h-90 rounded-md bg-gray-400 flex items-center justify-center'>
                      {i}
                    </div>
                )
            }
        </m.div>
    </div>
  )
}

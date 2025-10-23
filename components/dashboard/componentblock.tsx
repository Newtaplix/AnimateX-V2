import React from 'react'

export const ComponentBlock = ({component}:{component:React.ReactNode}) => {
  return (
    <div className={('p-2 w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col rounded-2xl md:p-4')}>
    <div className='p-2 flex-center gap-2 '>
        <span className='w-3 h-3 rounded-full bg-amber-500'></span>
        <span className='w-3 h-3 rounded-full bg-green-500'></span>
        <span className='w-3 h-3 rounded-full bg-red-500'></span>
    </div>
    <div 
    className='min-h-[300px] md:min-h-[480px] flex-center justify-center gradient p-2 bg-[var(--bg)] border border-col rounded-2xl w-full'>
           {component}
    </div>
</div>
  )
}

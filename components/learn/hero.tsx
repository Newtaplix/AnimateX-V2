import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { GraduationCap } from 'lucide-react'
import { PrimaryButton } from '../sub/primarybutton'

export const LearnHero = () => {
  return (
    <div className='flex-col-center gap-2 justify-center h-screen md:h-[700px] bg-red-400'>
        <SectionPill text="Learn with AnimateX" icon={<GraduationCap size={18}/>}/>
        <h1 className='welcome'>
            Learn ot Create Smooth, Modern Animations with Framer Motion
        </h1>
        <p>Master modern web animations with Framer Motion. From simple transitions to advanced interactions, 
            our step by step guides and examples make it easy to bring ideas to life.
        </p>
        <PrimaryButton text='Get Started'/>
    </div>
  )
}

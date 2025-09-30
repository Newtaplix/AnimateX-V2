import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { Drama } from 'lucide-react'
import Image from 'next/image'
import { Socials } from '../sub/Socials'
import { Feedback } from '../sub/feedback'

export const AboutMe = () => {
  return (
    <div>
        <div className='center-container p-2'>
            <div className='w-full p-2 md:w-[80%] mx-auto'>
                <SectionPill text='About Me' icon={<Drama size={18}/>}/>
                <h1 className="px-2 section-head">Know about the Creator of AnimateX</h1>
                <div className='bg-[var(--secondary)] p-4 rounded-xl border border-col w-full md:w-[60%] mx-auto mt-4'>
                    <p>
                        Hi, Im Newton a software engineering student and frontend developer passionate about crafting smooth, engaging
                        web experiences. I built AnimateX both Pro and V1 to make animations easier, faster and more accessible for developers everywhere.
                    </p>
                    <Socials/>
                </div>
                <Feedback/>
            </div>
        </div>
    </div>
  )
}

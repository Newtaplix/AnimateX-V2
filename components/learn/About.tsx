import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { BadgeQuestionMark } from 'lucide-react'
import { PrimaryButton } from '../sub/primarybutton'

export const About = () => {
  return (
    <div className='center-container'>
        <div className='w-[95%] md:w-[80%] mx-auto p-2'>
            <SectionPill text="Wondering what you'll learn" icon={<BadgeQuestionMark size={18}/>}/>
            <h2 className='section-head'>What you will learn.</h2>
            <p className='text-center mt-4 w-full'>
                In this lesson block you'll learn how to build smooth, fluid and interaction animations with framer motion.
                From biggner levels using framer motion props like a pro, to intermediate using framer motion's hooks to bring your
                 imagination to life.
            </p>
            <div className='grid grid-cols-1 gap-2 mt-4 md:grid-cols-3 w-full'>
                {
                    Array.from({length: 6}).map((_, i) => 
                        <div key={i} className='w-full h-50 md:w-80 md:h-60 border border-col rounded-[8px] p-[4px] bg-[var(--secondary)]'>
                            <div className='w-full h-full gradient rounded-[6px] bg-[var(--bg)]'>

                            </div>
                        </div>
                    )
                }
            </div>

            <div className='flex flex-col items-center justify-center gap-2 mt-16'>
                <h2 className='section-head'>You excited? Let's get cooking</h2>
                <PrimaryButton text='Get Started'/>
            </div>

        </div>
    </div>
  )
}

import { About } from '@/components/learn/About'
import { LearnHero } from '@/components/learn/hero'
import { Footer } from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import React from 'react'


const LearnPage = () => {
  return (
    <div className='flex flex-col gap-16'>
        <Navbar/>
        <LearnHero/>
        <About/>
        <Footer/>
    </div>
  )
}

export default LearnPage
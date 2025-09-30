import { TextLink2 } from '@/components/sub/textlinks'
import Link from 'next/link'
import React from 'react'

const ComponentsPage = () => {
  const buttons = [
    {
      text: "Arrow",
      link: "#"
    },
    {
      text: "Gooey",
      link: "#"
    },
    {
      text: "Send",
      link: "#"
    },
    {
      text: "Melting",
      link: "#"
    }
  ]
  return (
    <div>
       <div className='flex flex-col gap-4'>
          <div className='border-b-1 border-col text-left pb-2'>
              <span className='section-head'>
                  Buttons
              </span>
          </div>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {
                buttons.map((button, i) => 
                 <TextLink2 link={button.link} text={button.text} key={i}/>
                )
              }
          </div>
       </div>
    </div>
  )
}

export default ComponentsPage
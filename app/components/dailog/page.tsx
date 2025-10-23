"use client"
import React, { useState } from 'react'
import PageLayout from '@/components/dashboard/PageLayout'
import { Dailog, CodeTS, CodeJS, usecasecode } from '@/components/ui/buttons/dailog'
import { CircleAlert } from 'lucide-react'

const DailogPage = () => {

  

    const component = {
      
        features: [
          "Backdrop blur providing user focus on the dialog",
          "Smooth entrance and fade animations"
        ],
        props: [
          {
            prop: "children",
            default: "None",
            description: "React children for the dialog eg Forms"
          },
          {
            prop: "className",
            default: "None",
            description: "Customise your dialog styles to fit your project"
          },
          {
            prop: "buttonStyle",
            default: "None",
            description: "Styles the button"
          },
          {
            prop: "buttonText",
            default: "Open Dialog",
            description: "Text showing on the button"
          }

        ]
      }

  return (
    <PageLayout 
        title='Dailog'
        description='Dailog component with blur backdrop'
        type='Free' 
        codejs={CodeJS}
        codets={CodeTS}
        usecasecode={usecasecode}
        props={component.props}
        features={component.features} 
        component={
          <Dailog buttonStyle='bg-linear-180 cursor-pointer from-blue-300 to-blue-500'>
                  <div className='w-full flex flex-col gap-4 items-center justify-center'>
                    <CircleAlert size={50} className='text-red-500 rounded-full'/>
                    <p className='text-center'>
                        You are about to delete the file <span className='text-black dark:text-white'>AnimateX</span>. 
                        This action can't be reversed. Type in the file name to confirm.
                    </p>
                    <input placeholder='AnimateX' className='rounded-md p-1 px-2 w-full dark:bg-[#0b0b0f] dark:text-white
                      bg-white outline-2 outline-gray-400/40
                      text-black dark:outline-gray-600'/>
                    <div className='w-full flex gap-4 items-center justify-end'>
                        <button 
                            className='p-1 rounded-md px-4 black bg-black text-white dark:bg-white dark:text-black'>
                                Delete</button>
                    </div>
                </div>
            </Dailog>
        }/>
  )
}

export default DailogPage
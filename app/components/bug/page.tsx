"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import React, { useState } from 'react'
import { ReportBug, CodeJS, CodeTS, UseCase } from '@/components/sub/reportbug'
import { Space } from '@/components/ui/heros/space'


const ReportBugPage = () => {
    const [isValid, setValid] = useState(false)

    const onSubmit = () => {
        setValid(false)
        setTimeout(() => {setValid(true)}, 2000)
    }

    const component = {
        block: 
        <ReportBug onSubmit={onSubmit} isValid={isValid}>
            <div className='py-2 mt-4 flex md:flex-row flex-col w-full gap-4 justify-between'>
                    
                    <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black 
                    focus:outline-2 focus:outline-blue-500 border-2 border-gray-200 dark:border-neutral-900 w-[49%]' 
                    type='text' placeholder='Name'/>

                    <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black border-2 focus:outline-2 focus:outline-blue-500
                     border-gray-200 dark:border-neutral-900 w-[49%]' 
                    type='email' placeholder='Email'/>

                </div>
            <textarea style={{resize: "none"}} className='px-2 py-1 h-[50%] focus:outline-2 focus:outline-blue-500
            rounded-md bg-gray-50 dark:bg-black border-2 border-gray-200 dark:border-neutral-900 w-[100%]'
                placeholder='Provide details about the issue..'></textarea>
        </ReportBug> 
        ,
        features: [
          "Easily customizable with props",
            "Smooth icon entrance and exit"
        ],
   
        props: [
          {
            prop: "children",
            default: "none",
            description: "Put in the content inputs"
            },
            {
                prop: "isError",
                default: "false",
                description: "Determines if there was an error while submitting form"
                },
            {
                prop: "isValid",
                default: "false",
                description: "Validates form submission trigerring animation sequence."
            },
            {
                prop: "className",
                default: "none",
                description: "Freely style the form block to fit your project"
            },
            {
                prop: "borderRaduis",
                default: "none",
                description: "Rounded corner to both toggler and form"
            },
            {
                prop: "children",
                default: "12px",
                description: "Put in the content inputs"
            },
            {
                prop: "toggleStyle",
                default: "none",
                description: "Freely style the initial button on screen"
            },
            {
                prop: "shimmerStyle",
                default: "none",
                description: "Style the radiant backgroud. This should be used to modify colors."
            },
            {
                prop: "validationMessage",
                default: "Reported Successfully",
                description: "Final message at the end of the animation"
            },
            {
                prop: "id",
                default: "1",
                description: "In a case where multiple components are to be rendered on thesame page a unique key sould be provided to each"
            },
            {
                prop: "buttonText",
                default: "<span><Bug size={18}/>Report a bug</span>",
                description: "Text shown on button and form title"
            },
            {
                prop: "onSubmit",
                default: "none",
                description: "Function executed once the form is submitted"
            },
            {
                prop: "buttonStyle",
                default: "none",
                description: "Style the form submit button"
                },
        ]
      }

      const sections = [
        {
            id:0,
            title: "Preview"
        },
        {
            id:2,
            title: "Installation"
        },
        {
            id:3,
            title: "Props"
        },
        {
            id:4,
            title: "Report Bug"
        }
      ]

  return (
    <PageLayout 
    title='Report Bug'
    description='Form component with smooth transiton on valid submission.'
    type='Pro' 
    codejs={CodeJS}
    codets={CodeTS}
    usecasecode={UseCase}
    props={component.props}
    features={component.features} 
    sections={sections}
    component={component.block}/>
  )
}

export default ReportBugPage
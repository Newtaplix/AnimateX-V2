"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import React, { useState } from 'react'
import { ReportBug, CodeJS, CodeTS, UseCase } from '@/components/sub/reportbug'
import { Space } from '@/components/ui/heros/space'
import { SignaturePad } from '@/components/ui/modals/sign'

const ReportBugPage = () => {
    const [isValid, setValid] = useState(false)

    const onSubmit = () => {
        setValid(false)
        setTimeout(() => {setValid(true)}, 2000)
    }

    const component = {
        block: <SignaturePad/>
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
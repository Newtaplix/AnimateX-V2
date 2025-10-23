import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { ArrowButton, CodeJS, Code, UseCase } from '@/components/ui/buttons/arrowbtn'
import { FilterCard } from '@/components/ui/cards/filter'

const FeedbackPage = () => {
    const component = {
        block: <ArrowButton bgPrimaryColor='#e2e2e2' className='shadow-md shadow-gray-100'/>,
        features: [
          "Easily customizable with props",
            "Smooth color transition"
        ],
        props: [
          {
            prop: "text",
            default: "ArrowButton",
            description: "Text Shown on button"
          },
          {
            prop: "onClick",
            default: "None",
            description: "Define button click function."
          },
          {
            prop: "bgPrimaryColor",
            default: "#FFFFFF",
            description: "Determines initial color of button."
          },
          {
            prop: "bgSecondaryColor",
            default: "#000000",
            description: "Determines button secondary color on hover."
          },
          {
            prop: "textPrimaryColor",
            default: "#000000",
            description: "Determines text primary color on hover."
          },
          {
            prop: "textSecondaryColor",
            default: "#FFFFFF",
            description: "Determines text secondary color on hover."
          },
          {
            prop: "className",
            default: "None",
            description: "Style the button as desired"
          }
        ]
      }

  return (
    <PageLayout 
    title='Arrow Button'
    description='Button color trans with icon interaction'
    type='Pro' 
    codejs={CodeJS}
    codets={Code}
    usecasecode={UseCase}
    props={component.props}
    features={component.features} 
    component={
        // component.block
        <FilterCard/>
    }/>
  )
}

export default FeedbackPage
import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { CopyButton, CodeJs, CodeTs, usecase } from '@/components/ui/buttons/copy'
import { title } from 'process'

const GlimmerPage = () => {
    const component = {
        block: 
        <CopyButton text='Copy Page'>
        </CopyButton>,
        features: [
          "Easily customizable with props",
          "Blur effect giving that smooth effect",
          "Smooth transitions",
          "Theme support"
        ],
        props: [
          {
            prop: "className",
            default: "None",
            description: "Style the button with tialwind styles"
          },
          {
            prop: "delay",
            default: "2",
            description: "Controls the delay between ion transition."
          },
          {
            prop: "animationVaraint",
            default: "1",
            description: "Switch between animations 1 or 2."
          }
        ]
      }

    const variants = [
      {
        prop: "animationVaraint = 2",
        component: <CopyButton animationVariant={2} text="Copy Page"/>
      }
    ]

    const sections = [
      {
        id: 1,
        title: "Component"
      },
      {
        id: 2,
        title: "Variant 2"
      },
      {
        id:3,
        title: "Using"
      },
      {
        id:4,
        title: "Props"
      },
      
    ]
    return (
    <PageLayout 
    title='Copy Button'
    description='Copy button with icon transition.'
    type='Free' 
    codejs={CodeJs}
    codets={CodeTs}
    usecasecode={usecase}
    variants={variants}
    props={component.props}
    features={component.features} 
    sections={sections}
    component={component.block}/>
  )
}

export default GlimmerPage

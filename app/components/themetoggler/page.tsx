"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { DropDown, code, codejs, usecase } from '@/components/ui/inputs/dropdown'
import { ThemeToggler } from '@/components/ui/buttons/theme'

const ThemeTogglerPage = () => {
    const [text, setText] = React.useState("")
     const values = [
        {value: "velocity", text: "Velocity"},
        {value: "accelerating", text: "Acceleration"},
        {value: "animatex", text: "AnimateX"}
    ]
    const component = {
        block: <ThemeToggler/>,
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
            description: "Style the button with tailwind styles"
          },
          {
            prop: "stagger",
            default: "0",
            description: "Controls the delay between each option's animation."
          },
          {
            prop: "layered",
            default: "false",
            description: "Enables layered hover effect on options."
          },
          {
            prop: "smartDirection",
            default: "false",
            description: "Automatically adjusts the dropdown direction based on available space."
          },
          {
            prop: "options",
            default: "[]",
            description: "Array of options to be displayed in the dropdown."
          },
          {
            prop: "onChange",
            default: "() => {}",
            description: "Callback function that gets called when an option is selected."
          },
          {
            prop: "defaultOption",
            default: "{text: '', value: ''}",
            description: "Sets the default option displayed when no option is selected."
          },
          {
            prop: "menuStyle",
            default: "{}",
            description: "Custom styles for the dropdown menu."
          },
          {
            prop: "optionStyle",
            default: "{}",
            description: "Custom styles for each dropdown option."
          },
          {
            prop: "layerStyle",
            default: "{}",
            description: "Custom styles for the layered hover effect."
          }
        ]
      }

    const variants = [
      {
        prop: "stagger = 0.025",
        component: <DropDown options={values} stagger={0.021} defaultOption = {{text: "Message", value: "love"}} />
      },
      {
        prop: "smartDirection = true",
        component: <DropDown options={values} smartDirection defaultOption = {{text: "Message", value: "love"}} />
      }
      ,
       {
        prop: "layered = true",
        component: <DropDown options={values} layered defaultOption = {{text: "Message", value: "love"}} />
      }
    ]

    const sections = [
      {
        id: 0,
        title: "Preview"
      },
      {
        id: 1,
        title: "Variant 2"
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
      },
      
    ]
    return (
    <PageLayout 
    title='DropDown'
    description='Drop down menu component with smooth animations and customizable options.'
    type='Free' 
    codejs={codejs}
    codets={code}
    installCode='npx animatex-pro add dropdown'
    usecasecode={usecase}
    variants={variants}
    props={component.props}
    features={component.features} 
    sections={sections}
    component={component.block}/>
  )
}

export default ThemeTogglerPage

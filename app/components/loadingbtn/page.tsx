"use client"
import PageLayout from '@/components/dashboard/PageLayout'
import { LoadingButton , codejs, codets, usecase} from '@/components/ui/buttons/loadingButton'
import { useState } from 'react'

const LoadingButtonPage = () => {
    const [loading, setIsLoading] = useState(false)
     const demo = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 5000)
    }
    const component = {
        block: <LoadingButton loading={loading} onClick={demo}/> ,
        features: [
          "Easily customizable with props",
            "Smooth icon entrance and exit"
        ],
        props: [
          {
            prop: "text",
            default: "Button",
            description: "Text Shown on button"
          },
          {
            prop: "onClick",
            default: "None",
            description: "Define button click function."
          },
          {
            prop: "animationVariant",
            default: "1",
            description: "Define the button loading animation."
          },
          {
            prop: "className",
            default: "None",
            description: "Style the button as desired"
          }
        ]
      }

    const variants = [
        {
            prop: "animationVaraint = 2",
            component: <LoadingButton loading={loading} onClick={demo} animationVariant={2}/>
        },
         {
            prop: "animationVaraint = 3",
            component: <LoadingButton loading={loading} onClick={demo} animationVariant={3}/>
        },
         {
            prop: "animationVaraint = 4",
            component: <LoadingButton loading={loading} onClick={demo} animationVariant={4}/>
        },
    ]

  return (
    <PageLayout 
    title='Loading Button'
    description='Smooth button with loading animation on click.'
    type='Free' 
    codejs={codejs}
    codets={codets}
    installCode="npm add LoadingButton"
    usecasecode={usecase}
    props={component.props}
    variants={variants}
    features={component.features} 
    component={component.block}/>
  )
}

export default LoadingButtonPage
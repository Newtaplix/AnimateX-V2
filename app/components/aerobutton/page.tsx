import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { AeroButton, CodeJS,  Code, UseCase} from '@/components/ui/buttons/aerobutton'

const FeedbackPage = () => {
    const component = {
        block: <AeroButton/> ,
        features: [
          "Easily customizable with props",
            "Smooth icon entrance and exit"
        ],
        props: [
          {
            prop: "text",
            default: "AeroButton",
            description: "Text Shown on button"
          },
          {
            prop: "onClick",
            default: "None",
            description: "Define button click function."
          },
          {
            prop: "primaryCol",
            default: "#007BFF",
            description: "Determines initial color of button."
          },
          {
            prop: "gradientCol",
            default: "#FF4B91",
            description: "Gradient color that swopes in on hover"
          },
          {
            prop: "className",
            default: "None",
            description: "Style the button as desired"
          },
          {
            prop: "icon",
            default: "<Send fill='white' size={24} />",
            description: "Icon that swipes in on hover"
          }
        ]
      }

  return (
    <PageLayout 
    title='Aero Button'
    description='Smooth button animation with icon takeoff on click'
    type='Free' 
    codejs={CodeJS}
    codets={Code}
    usecasecode={UseCase}
    props={component.props}
    features={component.features} 
    component={component.block}/>
  )
}

export default FeedbackPage
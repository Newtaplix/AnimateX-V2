import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { CopyButton } from '@/components/ui/buttons/copy'
import { FeedBackButton } from '@/components/ui/buttons/feedback'

const FeedbackPage = () => {
    const component = {
        block: <FeedBackButton/>,
        features: [
          "Easily customizable with props",
          "Responsive on all screens",
          "Light stagger animation giving that fluid effect",
          "Theme support"
        ],
        props: [
          {
            prop: "items",
            default: "None",
            description: "Array containing the image urls"
          },
          {
            prop: "staggerDuration",
            default: "0.05",
            description: "Controls the delay between images."
          },
          {
            prop: "displacement",
            default: "25",
            description: "Controls how far the image moves along the X axis"
          },
          {
            prop: "CardsInView",
            default: "3",
            description: "Determines the number of cards displayed in view."
          }

        ]
      }

  return (
    <PageLayout 
    title='Stagger Cards'
    description='Smooth cards transition with stagger effects to give that fluid effect.'
    type='Pro' 
    codejs={""}
    codets={""}
    usecasecode={""}
    props={component.props}
    features={component.features} 
    component={component.block}/>
  )
}

export default FeedbackPage
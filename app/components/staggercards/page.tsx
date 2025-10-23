import React from 'react'
import PageLayout from '@/components/dashboard/PageLayout'
import { StaggerCards, CodeTS, CodeJS, UseCaseCode } from '@/components/ui/staggercards'

const PaginationPage = () => {
    const images = ["/fashion/fas.jpeg", "/fashion/fas1.jpeg", "/fashion/fas2.jpeg",
         "/fashion/fas3.jpeg", "/fashion/fas4.jpeg","/fashion/fas5.jpeg","/fashion/fas6.jpeg","/fashion/fas7.jpeg",
        "/fashion/fas8.jpeg"]
    const component = {
        block: <StaggerCards CardsInView={3} items={images}/>,
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
        codejs={CodeJS}
        codets={CodeTS}
        usecasecode={UseCaseCode}
        props={component.props}
        features={component.features} 
        component={component.block}/>
  )
}

export default PaginationPage
import PageLayout from '@/components/dashboard/PageLayout'
import { Domino } from '@/components/ui/carousels/domino'
import { ExpandButton } from '@/components/ui/buttons/expand'
import React from 'react'

const DominoPage = () => {
  const component = {
    block: <ExpandButton/>,
    features: [
      "Slide y displacement giving a fluid effect.",
      "Responsive on all screens",
      "Theme support"
    ],
    props: [
      {
        prop: "Cards",
        default: "None",
        description: "Determines the cards to be in the stack"
      }
    ]
  }
  return (
    <div>
        <PageLayout 
        title='Letter Stack'
        description='Smooth letter cards interaction'
        type='Pro' 
        codejs=''
        codets=''
        usecasecode=''
        props={component.props}
        features={component.features} 
        component={component.block}/>
    </div>
  )
}

export default DominoPage


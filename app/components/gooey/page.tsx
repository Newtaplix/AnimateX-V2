import PageLayout from '@/components/dashboard/PageLayout'
import { LetterStack } from '@/components/ui/letterstack'
import React from 'react'

const GooeyPage = () => {
  const component = {
    block: <LetterStack/>,
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
        component={<p>Text</p>}/>
    </div>
  )
}

export default GooeyPage
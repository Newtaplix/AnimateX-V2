import PageLayout from '@/components/dashboard/PageLayout'
import React from 'react'
import { StackSwipe } from '@/components/ui/cards/stackswipe'
const StackSwipePage = () => {
    const images = [
        "/wall/pic1.jpeg",  "/wall/zoro.jpeg", "/wall/pic2.jpeg", "/wall/pic4.jpeg", "/wall/pic6.jpeg",
        "/wall/pic7.jpeg","/wall/pic3.jpeg"]
  const component = {

    features: [
      "Floating button providing real motion",
      "Responsive on all screens",
      "Button customisable with props"
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
        component={<StackSwipe/>}/>
    </div>
  )
}

export default StackSwipePage
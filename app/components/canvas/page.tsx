import PageLayout from '@/components/dashboard/PageLayout'
import { CanvasCarousel } from '@/components/ui/carousels/canvas/canvas'
import React from 'react'

const CanvasCarouselPage = () => {
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
        component={<CanvasCarousel images={images}/>}/>
    </div>
  )
}

export default CanvasCarouselPage
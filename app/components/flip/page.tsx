import PageLayout from '@/components/dashboard/PageLayout'
import { Flip, CodeJS, CodeTS, usecasecode } from '@/components/ui/cards/flip'
import React from 'react'

const FlipPage = () => {
    const subImages = ["/demon/muza.jpeg","/demon/nezu.jpeg","/demon/pic1.jpeg", "/demon/pig.jpeg", "/demon/tanjiro.jpeg", "/demon/zenit.jpeg"]
    const mainImage = "/demon/demon.jpeg"
  const component = {

    features: [
      "Props customisation",
      "Smooth 3d rotation"
    ],
    props: [
      {
        prop: "subImages",
        default: "None",
        description: "Array of images behind the mainImage"
      },
      {
        prop: "mainImage",
        default: "None",
        description: "Main image displayed"
      },
      {
        prop: "subStyle",
        default: "None",
        description: "Enables you to style the subImages control width & height"
      },
      {
        prop: "mainStyle",
        default: "None",
        description: "Enables you to style the mainImage control width & height"
      },
      {
        prop: "flipDuration",
        default: "0.5",
        description: "Controls the rotation speed"
      },
      {
        prop: "iniSpread",
        default: "60",
        description: "Controls the initail spacing between subcards"
      },
      {
        prop: "finalSpread",
        default: "150",
        description: "Controls the final spacing between subcards"
      }
    ]
  }
  const sections = [
    {
        id:0,
        title: "Preview"
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
    }
  ]
  return (
    <div>
        <PageLayout 
        title='Flip Card'
        description='Smooth 3d card flip'
        type='Pro' 
        codejs={CodeJS}
        codets={CodeTS}
        usecasecode={usecasecode}
        props={component.props}
        sections={sections}
        features={component.features} 
        component={<Flip subImages={subImages} mainImage={mainImage} mainStyle='rounded-xs'/>}/>
    </div>
  )
}

export default FlipPage
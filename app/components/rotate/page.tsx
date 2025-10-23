import React from 'react'
import PageLayout from '@/components/dashboard/PageLayout'
import { Rotate, CodeJS, CodeTS, usecasecode } from '@/components/ui/carousels/rotate'

const RotatePage = () => {
  const images = ["/fashion/fas.jpeg", "/fashion/fas1.jpeg", "/fashion/fas2.jpeg",
    "/fashion/fas3.jpeg", "/fashion/fas4.jpeg","/fashion/fas5.jpeg","/fashion/fas6.jpeg","/fashion/fas7.jpeg",
   "/fashion/fas8.jpeg"]

  const descriptions = [
      {
          heading: "Nearly into the Abyst",
          description: "Brown shines brightest"
      },
      {
          heading: "The Legacy",
          description: "Men and Women in black."
      },
      {
          heading: "The Boys",
          description: "Hype hype hype"
      },
      {
          heading: "Movie stars",
          description: "They keep our eyes drawn"
      },
      {
          heading: "Theee Legends",
          description: "Unstoppable"
      },
      {
          heading: "BFFs",
          description: "Sudo friend zone"
      },
      {
          heading: "#Hastag Sleepover",
          description: "We in our PJs"
      },{
          heading: "We love shorts",
          description: "Let those feet shine."
      },
      {
          heading: "Three Musketeers",
          description: "Thy shall save thy princess"
      }
  ]

    const component = {
        block: <Rotate images={images} descriptions={descriptions}/>,
        features: [
          "Tip: If adding descriptions make sure the array is in alignment with the images.",
          "Easily customizable with props",
          "Responsive on all screens",
          "Slight Y rotation giving that 3d effect.",
          "Theme support"
        ],
        props: [
          {
            prop: "images",
            default: "None",
            description: "Array containing the image urls"
          },
          {
            prop: "descriptions",
            default: "None",
            description: "Array containig descriptions with types {heading & description}."
          }
        ]
      }

  return (
    <PageLayout 
        title='Highlight Cards'
        description='Cards carousel with rotations and image highlights.'
        type='Pro' 
        codejs={CodeJS}
        codets={CodeTS}
        usecasecode={usecasecode}
        props={component.props}
        features={component.features} 
        component={component.block}/>
  )
}

export default RotatePage


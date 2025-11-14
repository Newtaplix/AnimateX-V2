import PageLayout from '@/components/dashboard/PageLayout'
import { Swift } from '@/components/ui/carousels/swift'
import FloatingTestimonials from '@/components/ui/backgrounds/fadingImage'
const InfiniteZPage = () => {
    const images = ["/demon/demon.jpeg", "/demon/muza.jpeg", "/demon/nezu.jpeg",
      "/demon/pig.jpeg", "/demon/tanjiro.jpeg","/demon/pic1.jpeg", 
      "/demon/zenit.jpeg"]
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
        component={
        // <Swift images={images} backText='Anime'/>
        <FloatingTestimonials/>
        }/>
    </div>
  )
}

export default InfiniteZPage
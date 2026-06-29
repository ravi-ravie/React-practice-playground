import React from 'react'
import ScrolledCards from '../ScrolledCards'
import UpperImg from '../UpperImg'
import {ArrowUpRight} from 'lucide-react'

const MainContent = () => {
  const yogaBenefits = [
  {
    benefit: "Improved Flexibility",
    view: "View Video",
    img: "https://images.unsplash.com/photo-1697060598741-7ca9b696febb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
  {
    benefit: "Stress Reduction",
    view: "View Video",
    img: "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
  {
    benefit: "Better Posture",
    view: "View Video",
    img: "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
  {
    benefit: "Enhanced Balance",
    view: "View Video",
    img: "https://images.unsplash.com/photo-1599744423264-76df84e91758?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
  {
    benefit: "Increased Strength",
    view: "View Video",
    img: "https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
  {
    benefit: "Mindful Breathing",
    view: "View Video",
    img: "https://images.unsplash.com/photo-1667586733515-bf0bacbf325b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: ArrowUpRight,
  },
];

  return (
    <div className='grid grid-rows-2 mt-8 pb-14 gap-5 h-full'>
      <UpperImg />
        
      <ScrolledCards yogaBenefits={yogaBenefits} />
      
    </div>
  )
}

export default MainContent
import { useState } from 'react'
// import './App.css'
import HeroSection from './screen/HeroSection'
import { PopularCourses } from './components/PopularCourses'
import { Tutorials } from './components/Tutorials'
import { Statistics } from './components/Statistics'
import { Footer } from './components/Footer'
import HowItsWorks from './components/HowItsWorks'
import PricingPlans from './components/PricingPlans'
import { FAQ } from './components/Faq'
import TutorialSection from './components/TutorialSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    <Tutorials/>
    <Statistics/>
    <PopularCourses/>
    <HowItsWorks/>
    <PricingPlans/>
    <TutorialSection/>
    <FAQ/>
    <Footer/>

    
    </>
  )
}

export default App

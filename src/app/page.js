import NavBar from '@/components/NavBar'
import React from 'react'
import Hero from './home/Hero'
import Features from './home/Features'
import HowItWorks from './home/HowItWorks'
import Testimonials from './home/Testimonials'
import Designed from './home/Designed'
import Pricing from './home/Pricing'
import MobileApp from './home/MobileApp'

import Footer from '@/components/Footer'
import AchevieMents from './home/AchevieMents'
import Addittional from './home/Addittional'
import CustomersSaying from './home/CustomersSaying'
 export const metadata = {
  title: "Home - LastingSales", 
};
const page = () => {
 
  return (
  <>
    <NavBar/>
    <Hero/>
    <Designed/>
    <HowItWorks/>
    <Testimonials/>
    <Addittional/>
    <Features/>
    <MobileApp/>
    <AchevieMents/>
    <CustomersSaying/>
    <Pricing/>
    <Footer/>
    
  </>
  )
}

export default page
import NavBar from '@/components/NavBar'
import React from 'react'
import Hero from './home/Hero'
import Features from './home/Features'
import HowItWorks from './home/HowItWorks'
import Testimonials from './home/Testimonials'
import Pricing from './home/Pricing'
import Footer from '@/components/Footer'

const page = () => {
  return (
  <>
    <NavBar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <Testimonials/>
    <Pricing/>
    <Footer/>
  </>
  )
}

export default page
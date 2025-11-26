'use client';
import NavBar from '@/components/NavBar'
import React, { useEffect } from 'react'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Designed from './Designed'
import Pricing from './Pricing'
import MobileApp from './MobileApp'
import Footer from '@/components/Footer'
import AchevieMents from './AchevieMents'
import Addittional from './Addittional'
import CustomersSaying from './CustomersSaying'
import Video from './Video'
import { gtag, fbPixel } from "@/lib/analytics"

export const metadata = {
  title: "Home - LastingSales", 
};

const HomePage = () => {
  useEffect(() => {
    gtag.event({
      action: "home_page_visit",
      category: "navigation",
      label: "Landing Page"
    });

    fbPixel.event("ViewContent", {
      content_name: "Home Page",
      content_category: "Landing"
    });
  }, []);

  return (
    <>
      <NavBar/>
      <Hero/>
      <Designed/>
        <Video/>
      <HowItWorks/>
      <Testimonials/>
      <Addittional/>
      <Features/>
    <MobileApp/>
      <AchevieMents/>
      <CustomersSaying/>
      {/* <Pricing/> */}
      <Footer/>
    </>
  )
}

export default HomePage

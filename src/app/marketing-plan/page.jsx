import Image from 'next/image'
import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <NavBar/>
      <div className="relative w-full h-[80vh]">
        <Image
          src="/7-2.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            <span style={{ color: '#FF8B07' }}>Generate Leads, Close Deals,</span>
            <br />
            <span style={{ color: '#FF8B07' }}>Dominate Your Market</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl leading-relaxed" style={{ color: '#2D3441' }}>
            We provide a smart marketing plan with powerful CRM tools
            <br />
            to drive quality leads and empower your team to close deals faster.
          </p>
          
          <button 
            className="px-8 py-4 text-white text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
            style={{ backgroundColor: '#FF8B07' }}
          >
            Get Your Marketing Plan
          </button>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Page
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../../../public/hero.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Are you tired of{' '}
              <span className="text-emerald-600">Following Up</span>{' '}
              <span className="text-gray-900">Leads?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              The AI-powered solution for service businesses to capture, 
              qualify, and convert leads — instantly
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/try-free">
                <button 
                  className="text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: '#059574' }}
                >
                  Try it free
                </button>
              </Link>
              
              <Link href="/book-call">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book a Call
                </button>
              </Link>
              
              <Link href="/user-guide">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
                  User Guide
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Image 
                src={HeroImage} 
                alt="AI-powered lead management dashboard with Leadly robot assistant" 
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
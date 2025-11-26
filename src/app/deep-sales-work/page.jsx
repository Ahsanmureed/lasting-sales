'use client'

import React from 'react'
import Image from 'next/image'
import bg from '../../../public/1209.jpg'
import img from '../../../public/Whisk_3e1dab55128dfba9b784ebf98f5eb804dr.jpeg'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <NavBar/>
      
      {/* Hero Section with Background Image */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bg}
            alt="Background"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-28 md:py-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg" style={{ color: '#009966' }}>
            DeepSalesWork
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white drop-shadow-lg">
            The Art of Smarter Selling
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Selling isn't about more calls or messages. It's about knowing deeply your customers, their timing, their world.
            <br />
            <br />
            That's what <span className="font-bold" style={{ color: '#FF8200' }}>#DeepSalesWork</span> is all about.
          </p>
        </div>
      </div>

      {/* What Is DeepSalesWork Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                What Is DeepSalesWork?
              </h2>
              
              <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">Most sellers chase leads.</span>
                  <br />
                  <span className="font-semibold" style={{ color: '#FF8200' }}>Deep sellers understand people.</span>
                </p>
                
                <p>
                  <span style={{ color: '#FF8200' }}>#DeepSalesWork</span> is our philosophy of sales at <span style={{ color: '#009966' }}>LastingSales CRM</span> where human understanding meets data intelligence.
                </p>
                
                <p className="font-semibold text-gray-900">
                  It's not about volume; it's about depth.
                </p>
                
                <p>
                  It's how top performers consistently exceed their quotas by focusing on the right people, at the right time, in the right way.
                </p>
                
                <p>
                  Deep sellers do more research, use real insights, and engage with purpose and they're <span style={{ color: '#FF8200' }}>2x more likely</span> to hit their targets.
                </p>
              </div>
              
              <div className="pt-6">
                <button 
                  className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#009966' }}
                  onClick={() => window.open('https://live.lastingsales.com/en/register', '_blank')}
                >
                  Start Your DeepSalesWork Journey → Try LastingSales Free
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src={img}
                alt="DeepSalesWork Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Deep vs Shallow Sales Divide Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#009966' }}>
            The Deep vs. Shallow Sales Divide
          </h2>
          
          {/* Comparison Image */}
          <div className="mb-16">
            <img 
              src="/Gráfico Tabla Comparativa Minimalista Beige (1).png"
              alt="Deep vs Shallow Sales Comparison"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <blockquote className="text-2xl md:text-3xl text-center italic text-gray-700 leading-relaxed">
              "Although we use the term artificial intelligence, nothing about the buyer-seller relationship should be artificial."
            </blockquote>
            <p className="text-xl text-center mt-6 font-semibold text-gray-900">
              — Barney Brown, AWS Global Sales Enablement
            </p>
          </div>

          {/* 3 Habits Section */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#009966' }}>
              The 3 Habits of Deep Sales Teams
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              We distilled the essence of top performers into three timeless habits.
              <br />
              And at LastingSales, these habits are built right into your workflow.
            </p>

            {/* Habit 1 */}
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#009966' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#009966' }}>
                1. Prioritize High-Potential Accounts
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-3">
                <span className="font-semibold">Don't waste effort chasing every lead.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                DeepSalesWork helps you uncover accounts with real intent using behavior data, AI scoring, and past engagement.
              </p>
            </div>

            {/* Habit 2 */}
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#FF8200' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FF8200' }}>
                2. Build Key Buyer Relationships
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-3">
                <span className="font-semibold">Deep selling isn't about automation; it's about empathy.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Connect through channels that feel natural WhatsApp, calls, personalized messages and keep every conversation in one view.
              </p>
            </div>

            {/* Habit 3 */}
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#009966' }}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#009966' }}>
                3. Find Hidden Allies & Timely Intel
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-3">
                <span className="font-semibold">Use Leadly and AI insights to detect the right time to reach out.</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                No spam. No guesswork. Just perfect timing.
              </p>
            </div>

            {/* DeepSalesWork + AI */}
            <div className="text-center mb-12">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                DeepSalesWork + AI = <span style={{ color: '#FF8200' }}>Human Intelligence</span>
              </p>
            </div>

            {/* Green Box CTA */}
            <div className="p-10 rounded-lg shadow-xl text-center" style={{ backgroundColor: '#009966' }}>
              <p className="text-2xl md:text-3xl font-bold text-white">
                The deeper your knowledge, the higher your impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Technology Section with Background */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Whisk_da962ec69f54d728bb44c0f21d1c5566dr.jpeg"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6 drop-shadow-lg">
              Technology shouldn't replace human connection — it should strengthen it.
            </p>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-lg">
              That's why LastingSales CRM uses AI to help you sell with more meaning, not more effort.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#009966' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#009966' }}>
                Smart Recommendations
              </h3>
              <p className="text-gray-800">
                Know who's most likely to buy next.
              </p>
            </div>

            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#FF8200' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FF8200' }}>
                Auto Follow-Ups
              </h3>
              <p className="text-gray-800">
                Personalized, timely, never robotic.
              </p>
            </div>

            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#009966' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#009966' }}>
                Engagement Insights
              </h3>
              <p className="text-gray-800">
                See when and how leads interact.
              </p>
            </div>

            <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: '#FF8200' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FF8200' }}>
                Lead Scoring
              </h3>
              <p className="text-gray-800">
                Focus on the deals that matter most.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              AI + DeepSalesWork = <span style={{ color: '#FF8200' }}>Sales Superpowers Unlocked</span>.
            </p>
          </div>

          <div className="text-center">
            <button 
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:scale-105 shadow-xl cursor-pointer"
              style={{ backgroundColor: '#FF8200' }}
              onClick={() => window.open('https://live.lastingsales.com/en/register', '_blank')}
            >
              See How DeepSalesWork Powers Our CRM → Explore LastingSales Features
            </button>
          </div>
        </div>
      </div>

      {/* The Human Side Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8" style={{ color: '#009966' }}>
            The Human Side of Deep Sales
          </h2>
          
          <p className="text-xl md:text-2xl text-center text-gray-800 mb-6 leading-relaxed">
            Buyers today crave one thing above all else — <span className="font-bold" style={{ color: '#FF8200' }}>trust</span>.
          </p>

          <p className="text-xl text-center text-gray-800 mb-12">
            Deep sales isn't just about strategy; it's about character.
          </p>

          <p className="text-xl text-center text-gray-900 font-semibold mb-12">
            According to 500+ B2B buyers, here's what matters most:
          </p>

          {/* Buyer Insights */}
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4" style={{ borderLeftColor: '#009966' }}>
              <p className="text-2xl font-bold mb-2" style={{ color: '#009966' }}>41%</p>
              <p className="text-lg text-gray-800">
                say: "Show a clear understanding of our business."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4" style={{ borderLeftColor: '#FF8200' }}>
              <p className="text-2xl font-bold mb-2" style={{ color: '#FF8200' }}>44%</p>
              <p className="text-lg text-gray-800">
                say: "Reach out when I'm actually considering something."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4" style={{ borderLeftColor: '#009966' }}>
              <p className="text-2xl font-bold mb-2" style={{ color: '#009966' }}>36%</p>
              <p className="text-lg text-gray-800">
                say: "Be transparent and trustworthy."
              </p>
            </div>
          </div>

          <p className="text-xl text-center text-gray-800 mb-10 leading-relaxed">
            That's what <span style={{ color: '#FF8200' }}>#DeepSalesWork</span> enables — authentic, well-timed, trustworthy selling powered by LastingSales.
          </p>

          <div className="text-center">
            <button 
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:scale-105 shadow-xl cursor-pointer"
              style={{ backgroundColor: '#009966' }}
              onClick={() => window.open('https://live.lastingsales.com/en/register', '_blank')}
            >
              Join the Deep Sales Movement → Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* The Future of Selling Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                The Future of Selling Is Deep
              </h2>
              
              <div className="space-y-5 text-lg text-gray-800 leading-relaxed">
                <p className="text-xl font-semibold">
                  Only <span style={{ color: '#FF8200' }}>18% of sellers</span> today practice true deep sales.
                </p>
                
                <p className="text-xl">
                  But they're leading the future — and we're building the tools to make it possible for everyone.
                </p>
                
                <p className="text-xl font-semibold text-gray-900">
                  At LastingSales, <span style={{ color: '#FF8200' }}>#DeepSalesWork</span> isn't a concept — it's our commitment:
                </p>

                <div className="pl-6 space-y-3 text-xl">
                  <p>• To empower smarter sellers.</p>
                  <p>• To deepen every customer relationship.</p>
                  <p>• To create a world where sales feels human again.</p>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-2xl font-bold text-gray-900 mb-6">
                  We're not automating sales — we're <span style={{ color: '#FF8200' }}>deepening it</span>.
                </p>
                <button 
                  className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all hover:opacity-90 hover:scale-105 shadow-xl cursor-pointer"
                  style={{ backgroundColor: '#009966' }}
                  onClick={() => window.open('https://live.lastingsales.com/en/register', '_blank')}
                >
                  Start Your Deep Sales Journey Today
                </button>
              </div>
            </div>
            
            {/* Image - Right */}
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/Whisk_b5c56eea30dca74b771475e8ec71e0b5dr.jpeg"
                alt="Future of Selling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Page
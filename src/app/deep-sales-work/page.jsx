'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg from '../../../public/1209.jpg'
import img1 from '../../../public/Whisk_3e1dab55128dfba9b784ebf98f5eb804dr.jpeg'
import img2 from '../../../public/Whisk_b5c56eea30dca74b771475e8ec71e0b5dr.jpeg'
import img3 from '../../../public/green-flow.jpg'
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
        
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Selling isn't about making more calls or sending more messages. It's more about empathising, building deep connections, and understanding your customers and their world.
            <br />
            <br />
            That's what <span className="font-bold" style={{ color: '#FF8200' }}>#DeepSalesWork</span> is all about.
          </p>
        </div>
      </div>

      {/* What is Deep Work Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                What is Deep Work?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A well-known author, Cal Newport, has introduced this style of work in his book Deep Work. The subtitle of the book is "Rules for focused success in a distracted world".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Newport coined the term Deep Work to describe work that's performed in a state of distraction-free concentration and pushes cognitive capacity to its limit. This type of work creates new value, and it's what sets apart a reliable sales rep from a rockstar who can close new deals while completing valuable internal projects.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Finding a balance between responsive client communication and unplugged Deep Work will improve your output, create new value for your organisation, and reduce your stress levels along the way.
              </p>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img1}
                alt="Deep Work"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Shallow Work Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img2}
                alt="Shallow Work"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF8200' }}>
                What is Shallow Work?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Shallow work involves routine, less challenging tasks that can be easily accomplished without deep concentration. Examples include answering emails, attending meetings, and performing administrative tasks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Characteristics:</strong> Less demanding and often repetitive. It can be completed without deep cognitive effort.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The best time to do the shallow work is after Deep work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is DeepSalesWork Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                What is DeepSalesWork?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The life of salespeople is full of distractions: plenty of apps, notifications, messages, calls, and a lot more. Sales professionals face a unique challenge in the modern workplace.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Their job requires them to be responsive and available to build new connections. Still, it's becoming increasingly clear that the more responsive and available they are, the harder it is to do meaningful and valuable work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Here lies the paradox of sales professionals:</strong> it's the salesperson's job to bring in new customers, but the majority of the work distracts us from that goal.
              </p>
              <Link href="https://live.lastingsales.com/en/register" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF8200' }}>
                  Join the Deep Sales Movement
                </button>
              </Link>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img3}
                alt="DeepSalesWork"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to do Sales Work deeply Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img1}
                alt="Sales Work Deeply"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                How to do Sales Work deeply?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Deep Work is "distraction-free work that pushes cognitive ability to its limit and creates new value". It's valuable work that requires focus, energy, and actively removing distractions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Newport's most suitable style of Deep Work for salespeople is the <strong>Rhythmic style</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Rhythmic Style Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF8200' }}>
                What is Rhythmic Style?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Rhythmic style of work translates Deep Work sessions into a daily habit. An hour of Deep Work a day will result in an impressive output after a year.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We recommend starting with 1 hour of Deep work, and making it the first hour of each day, because it's the easiest time to avoid distractions. As the day goes on, there are increasingly better chances of interruptions, "emergencies", and other responsibilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Regardless of the task, this hour of work each morning sets the tone for the day. It also gives you the confidence to focus on client outreach for the remainder of the day, knowing that you've already made progress on valuable projects.
              </p>
              <Link href="https://live.lastingsales.com/en/register" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#009966' }}>
                  Start your Deep Sales Journey
                </button>
              </Link>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img2}
                alt="Rhythmic Style"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is the state of Flow Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img3}
                alt="Flow State"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                What is the state of Flow?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                "Flow" is the psychological state characterised by complete absorption in an activity, where individuals are fully immersed and focused on what they are doing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is often considered a state of optimal experience, where individuals feel their skills are perfectly matched to the challenges they face, leading to a sense of fulfilment and satisfaction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Flow follows focus. Individuals in a state of flow are deeply concentrated on the task at hand, often losing track of time and becoming unaware of distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State of Flow in Sales Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF8200' }}>
                State of Flow in Sales
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To achieve the state of flow in sales preparation and practice is critical.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Deep work needs discipline of the highest order. It requires unwavering focus. Emotionally the person needs to be able to get in the zone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When someone gets into flow state or the zone in sales, they tend not to want to stop – their output will be too fruitful and they most likely will enjoy it too much and so it ends up as a win/win for everyone.
              </p>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img1}
                alt="Flow in Sales"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to get into a state of flow Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-full min-h-[400px]">
              <Image 
                src={img2}
                alt="Getting into Flow"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#009966' }}>
                How to get into a state of flow?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is possible to switch flow on and off, but to get good at it, one needs to practice—a lot.
              </p>
              <div className="space-y-3 text-lg text-gray-700">
                <p><strong style={{ color: '#FF8200' }}>Preparation:</strong> Get your shit together. Find a 'sacred space' where you can work, clear your desk. Water up.</p>
                <p><strong style={{ color: '#FF8200' }}>Clock it:</strong> Get an alarm clock, and start working in time chunks, gradually increasing the chunks. Start with a Chunk of 45 mins or 90 mins.</p>
                <p><strong style={{ color: '#FF8200' }}>Be data ready:</strong> Start work on a clients' list that has all the information you need.</p>
                <p><strong style={{ color: '#FF8200' }}>Ignore everything else:</strong> Shut down your email. Don't take any inbound calls from anyone.</p>
                <p><strong style={{ color: '#FF8200' }}>Clarity:</strong> Set a clear intention for the session, what you want from it and what you need to do to make it happen.</p>
                <p><strong style={{ color: '#FF8200' }}>Be mindful:</strong> Try a bit of mindfulness to clear your head and to allow for some crystal-clear focus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#009966' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Is your Sales team ready for #DeepSalesWork?
          </h2>
          <Link href="https://live.lastingsales.com/en/register" target="_blank" rel="noopener noreferrer">
            <button className="px-10 py-5 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#FF8200', color: 'white' }}>
              Get Free Assessment
            </button>
          </Link>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default Page
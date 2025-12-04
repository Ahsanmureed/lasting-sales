'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg from '../../../public/1209.jpg'
import img1 from '../../../public/Whisk_3e1dab55128dfba9b784ebf98f5eb804dr.jpeg'
import img2 from '../../../public/Whisk_b5c56eea30dca74b771475e8ec71e0b5dr.jpeg'
import img3 from '../../../public/green-flow.jpg'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Modal Form Component
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    social: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Only allow numbers for phone field
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^0-9]/g, '')
      setFormData({
        ...formData,
        [name]: numbersOnly
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mkgqnggr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', website: '', social: '' })
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
        }, 2000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto transform transition-all">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-normal" style={{ color: '#009966' }}>
         Get a <span className='font-bold'>free</span> assessment of your <span className='font-bold'>Sales Process</span> readiness for #DeepSalesWork
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
            >
              ×
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <p className="text-xl font-semibold text-gray-800">
                Thank you for your submission!
              </p>
              <p className="text-gray-600 mt-2">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                 Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook/Instagram 
                </label>
                <input
                  type="text"
                  id="social"
                  name="social"
                  value={formData.social}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder='Your social links'
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex mx-auto px-4 py-2 text-white cursor-pointer rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#FF8200' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Assessment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <NavBar/>
      
      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      
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

      {/* Community Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#009966' }}>
            Join Our <span style={{ color: '#FF8200' }}>#DeepSalesWork</span> Community
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with like-minded sales professionals and master the art of deep work together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.facebook.com/share/g/1FriQmTNrj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-semibold">Join Facebook Group</span>
            </a>
            
            <a 
              href="https://chat.whatsapp.com/CgXoB9FqKPHL2LNuQ3GGhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="font-semibold">Join WhatsApp Group</span>
            </a>
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
              <button 
                onClick={openModal}
                className="px-8 py-4 text-white cursor-pointer font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                style={{ backgroundColor: '#FF8200' }}
              >
                Join the Deep Sales Movement
              </button>
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
              <button 
                onClick={openModal}
                className="px-8 py-4 text-white cursor-pointer font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                style={{ backgroundColor: '#009966' }}
              >
                Start your Deep Sales Journey
              </button>
            </div>
            <div className="relative cursor-pointer h-96 md:h-full min-h-[400px]">
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
          <button 
            onClick={openModal}
            className="px-10 py-5 text-lg font-semibold cursor-pointer rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
            style={{ backgroundColor: '#FF8200', color: 'white' }}
          >
            Get Free Assessment
          </button>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default Page
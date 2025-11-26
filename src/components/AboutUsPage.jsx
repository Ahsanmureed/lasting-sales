'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import kashif from '../../public/Kashif-naeem-1024x1024.png'
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { fbPixel, gtag } from '@/lib/analytics';

export default function SalesLandingPage() {
    useEffect(() => {
      gtag.event({
        action: "about_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "About Page",
        content_category: "Landing"
      });
    }, []);
  const router = useRouter();
  const achievements = [
    { src: '/9-1-768x598.png', alt: 'Startup Estonia' },
    { src: '/10-1-768x598.png', alt: 'NatWest Accelerator' },
    { src: '/e.png', alt: 'Entrepreneur First' },
    { src: '/jazz.png', alt: 'Award Logo' }
  ];

  const teamMembers = [
    { name: 'Kashif Naeem', role: 'CEO', image: '/Kashif-naeem-1024x1024.png' },
    { name: 'Alex Yorke', role: 'Marketing Director', image: '/LastingSales-Posts-3-1024x1024.jpg' },
    { name: 'Asma Noor', role: 'HR Manager', image: '/asma.png' },
    { name: 'Sufyan Ahmad', role: 'Sr. VoIP & DevOps Engineer', image: '/sufyan123-removebg-preview.png' },
    { name: 'Ijaz Ahmad', role: 'Senior Project Manager', image: '/ejazfinal.jpeg' }
  ];

  return (
    <>
      <NavBar/>
      <div className=" pt-32 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Helping salespeople improve
              <br />
              their response time
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Responding within 5 minutes boosts lead qualification rates by 2x
            </p>
            <div className="flex flex-col cursor-pointer sm:flex-row gap-4 justify-center">
              <button onClick={()=> router.push('https://live.lastingsales.com/en/register')} className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Get Started
              </button>
              <button onClick={()=> router.push('https://www.youtube.com/@lastingsales')} className="bg-orange-500 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Meet Kashif Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Meet Kashif</h2>
                <p className="text-gray-700 mb-4">
                 Kashif Naeem, CEO of LastingSales, helps realtors and service businesses simplify lead generation, nurturing, and sales closures through easy-to-use digital tools.
                </p>
                <p className="text-gray-700 mb-4">
He introduced Pakistan's first Cloud Contact Center, scaling from zero to 7 million calls monthly and supporting 4,500+ SMEs. His solutions are trusted by banks, online stores, and hospitals nationwide.
                </p>
                <p className="text-gray-700 mb-6">
                 Kashif has participated in programs like the UK's Global Entrepreneurship Program (GEP), Startup Estonia, and NatWest Accelerator.
                </p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Connect with Kashif
                </button>
                <div className="flex gap-3 mt-4">
                  {/* Facebook Logo */}
                  <a 
                    href="https://www.facebook.com/kashif.naeem.988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  {/* YouTube Logo */}
                  <a 
                    href="https://www.youtube.com/@lastingsales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
                <a 
                  href="https://calendly.com/kashif-lastingsales/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Book Call
                </a>
              </div>
              <div className="flex justify-center">
                <Image 
                  src={kashif} 
                  alt="Kashif Naeem" 
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image 
                  src="/Our-Mission-Statement-1536x1196.png" 
                  alt="Mobile app interface" 
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Mission</h2>
                <p className="text-gray-700">
                 LastingSales simplifies lead management by consolidating leads, optimizing response times, and transforming follow-ups. With customizable pipelines, efficient lead distribution, and actionable progress reports, we empower sales teams to excel. Focused on global growth, starting with real estate, our AI-driven tools position us to lead the B2B SaaS market and revolutionize sales processes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">1M+</h3>
                <p className="text-gray-700 font-semibold">Calls Made</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">250K+</h3>
                <p className="text-gray-700 font-semibold">Leads Added</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">50K+</h3>
                <p className="text-gray-700 font-semibold">Deals Closed</p>
              </div>
            </div>
          </div>
        </section>

       {/* Our Achievements Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-600 mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center justify-center h-40">
                    <Image 
                      src={achievement.src} 
                      alt={achievement.alt}
                      width={250}
                      height={170}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Passionate Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-600 mb-12">Our Passionate Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={180}
                    height={180}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer/>

    </>
  );
}
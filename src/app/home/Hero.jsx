'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../public/Copy of Qualify.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-[#E6F8F3] min-h-[87vh] flex items-center pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-32 xl:gap-40">
          
          {/* LEFT Section */}
          <div className="flex-1 shrink-0 text-center lg:text-left w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Are you tired of <br />

              <span className="inline-block min-w-[180px] sm:min-w-[200px] md:min-w-[260px] lg:min-w-[340px] xl:min-w-[550px]">
                <TypeAnimation
                  sequence={[
                    'Following Up',
                    2000,
                    'Slipped',
                    2000,
                    'Slow Responded',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-emerald-600"
                  repeat={Infinity}
                  cursor={false}
                />
              </span>

              {' '}Leads?
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The AI-powered solution for service businesses to capture,
              qualify, and convert leads — instantly
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              <Link href="https://live.lastingsales.com/en/register">
                <button
                  className="w-full cursor-pointer sm:w-auto text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90 text-sm sm:text-base"
                  style={{ backgroundColor: '#059574' }}
                >
                  Try it free
                </button>
              </Link>

              <Link href="https://calendly.com/kashif-lastingsales/30min">
                <button className="w-full cursor-pointer sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                  Book a Call
                </button>
              </Link>

              <Link href="https://www.youtube.com/@lastingsales">
                <button className="w-full sm:w-auto cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                  User Guide
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT Section */}
          <div className="flex-1 w-full">
            <div className="relative">
              <Image
                src="/Copy of Qualify.png"
                alt="AI-powered lead management dashboard with Leadly robot assistant"
                className="rounded-2xl w-full sm:w-[110%] max-w-none h-auto"
                width={1050}
                height={750}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;

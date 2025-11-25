'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../public/Copy of Qualify.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="bg-[#E6F8F3] min-h-[87vh] flex items-center pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 xl:gap-32">
          
          {/* LEFT Section */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Are you tired of <br />
              <span className="text-emerald-600">
                Following Up
              </span>
              {' '}Leads?
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              The AI-powered solution for service businesses to capture,
              qualify, and convert leads — instantly
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              <Link href="https://live.lastingsales.com/en/register">
                <button
                  className="w-full sm:w-auto text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: '#059574' }}
                >
                  Try it free
                </button>
              </Link>

              <Link href="https://calendly.com/kashif-lastingsales/30min">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book a Call
                </button>
              </Link>

              <Link href="https://www.youtube.com/@lastingsales">
                <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  User Guide
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT Section */}
          <div className="flex-1 w-full max-w-full">
            <div className="relative w-full">
              <Image
                src="/Copy of Qualify.png"
                alt="AI-powered lead management dashboard"
                className="rounded-2xl w-full h-auto"
                width={600}
                height={400}
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

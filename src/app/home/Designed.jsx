'use client';

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react"; // 👈 import arrow icon
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const DesignedFor = () => {
  return (
    <>
      {/* First Section */}
      <section className="bg-[#e6f7f2] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-40">
  
          {/* LEFT SIDE - Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Image
              src="/Mobile Screens.png"
              alt="LastingSales Mobile App"
              width={1050}  
              height={750} 
              className="rounded-xl w-full sm:w-[130%] lg:w-[150%] max-w-none"
            />
          </div>

          {/* RIGHT SIDE - Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#059671] mb-4 sm:mb-6 text-center lg:text-left">
              LastingSales' Mobile App
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                <span className="flex flex-wrap items-center gap-2">
                  Instant Leads Alerts from <span className='text-[#1877F2] font-extrabold'>Facebook Ads</span> and website.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Real-time notification on mobile
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                <span className="flex items-center gap-0.5">
                  Instant response via <FaWhatsapp className='text-[#25D366] text-[23px]'/>WhatsApp
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Assign leads to sales rep in one click
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Set up followup reminders
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="https://live.lastingsales.com/en/register"
                className="bg-[#059671] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition text-center"
              >
                Try it Free
              </Link>
              <Link
                href="https://calendly.com/kashif-lastingsales/30min"
                className="bg-[#FF8B07] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition text-center"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto mt-8 sm:mt-10 gap-6 sm:gap-10 px-4 lg:mx-52">
          <Image alt="google play" src="/googleplay.svg" width={160} height={160} className="w-32 sm:w-40" />
          <Image alt="apple store" src="/applestore.svg" width={160} height={160} className="w-32 sm:w-40" />
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#e6f7f2] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          
          {/* RIGHT SIDE - Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#059669] mb-4 sm:mb-6 text-center lg:text-left">
              Meet <span className='text-[#FF8B07]'>Leadly:</span> Your 24/7 AI Sales Agent
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Engages leads the moment they arrive — no waiting, no missed opportunities
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Conversations guided by AI to ask the right questions and filter real prospects
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Connects via WhatsApp, email, and more — automatically.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Learns from your past lead interactions to tailor smarter responses.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Works seamlessly with LastingSales CRM to track, assign, and notify your sales team.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1 flex-shrink-0" />
                Notifies your team when a lead is qualified and ready to close
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="https://live.lastingsales.com/en/register"
                className="bg-[#059671] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition text-center"
              >
                Try it Free
              </Link>
            </div>
          </div>

          {/* LEFT SIDE - Video */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <img
              src="/animated gif.gif"
              alt="Animated GIF"
            className="rounded-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[25vw] max-w-full h-auto"

            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignedFor;

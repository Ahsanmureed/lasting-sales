'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const DesignedFor = () => {
  return (
    <>
      {/* Mobile App Section */}
      <section className="bg-[#e6f7f2] py-12 md:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
            
            {/* LEFT SIDE - Image */}
       <div className="relative w-full lg:w-1/2 flex justify-center">
  <Image
    src="/Mobile Screens.png"
    alt="LastingSales Mobile App"
    width={500}
    height={400}
    className="rounded-xl w-full max-w-md sm:max-w-lg sm:w-[95%] md:w-[85%] lg:w-full h-auto transform sm:scale-105 transition-transform duration-300"
  />
</div>


            {/* RIGHT SIDE - Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#059671] mb-4 md:mb-6">
                LastingSales' Mobile App
              </h2>

              <ul className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8">
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
                  <span className="flex items-center gap-1">
                    Instant response via <FaWhatsapp className='text-[#25D366] text-[20px]'/>WhatsApp
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

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
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

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 md:mt-10 gap-4 md:gap-8">
         <a
  href="https://play.google.com/store/apps/details?id=com.lastingsales&hl=en"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    alt="google play"
    src="/googleplay.svg"
    width={140}
    height={140}
    className="w-32 sm:w-40 h-auto"
  />
</a>

<a
  href="https://apps.apple.com/jo/app/lastingsales/id6462112882"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    alt="apple store"
    src="/applestore.svg"
    width={140}
    height={140}
    className="w-32 sm:w-40 h-auto"
  />
</a>

          </div>
        </div>
      </section>

    
    </>
  );
};
export default DesignedFor;

'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const DesignedFor = () => {
  return (
    <>
    

      {/* Leadly AI Section */}
      <section className="bg-[#e6f7f2] py-12 md:py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">
            
            {/* LEFT SIDE - Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#059669] mb-4 md:mb-6">
                Meet <span className='text-[#FF8B07]'>Leadly:</span> Your 24/7 AI Sales Agent
              </h2>

              <ul className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8">
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

              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  href="https://live.lastingsales.com/en/register"
                  className="bg-[#059671] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition text-center"
                >
                  Try it Free
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - GIF */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <img
              autoPlay
                src="/chat 1.gif"
                alt="Animated GIF"
                className="rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DesignedFor;

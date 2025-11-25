'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Addittional = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push('/marketing-plan');
  };

  return (
    <div className="w-full bg-[#FDF1DF] h-auto md:h-[38vh] pb-6 md:pb-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full py-6 md:py-8">
          
          <div className="flex-shrink-0">
            <Image
              width={220}
              height={350}
              src="/DeepSalesWork.png"
              className="rounded-md w-[180px] sm:w-[200px] md:w-[220px] h-auto"
              alt="left"
            />
          </div>

          <div className="w-full text-base sm:text-lg md:text-[20px]">
            <span className="flex items-center justify-center md:justify-start text-[#FF6900] text-2xl sm:text-3xl font-bold mb-4">
              #DeepSalesWork
            </span>

            <p className="mb-3">
              Deep Work is "distraction-free work that pushes cognitive ability to its limit and creates new value". 
              It's valuable work that requires focus, energy, and actively removing distractions.
            </p>

            <p className="mb-4">
              Sales professionals face a significant challenge in balancing their sales work, which demands
              responsiveness and availability for clients, while also managing the need for distraction-free
              time to focus on meaningful and valuable tasks. This is where LastingSales' DeepSalesWork mantra
              proves helpful!
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleBtn}
                className="px-6 py-2 text-base sm:text-lg md:text-[19px] cursor-pointer bg-[#FF8B07] text-white rounded-lg font-semibold hover:bg-[#e67d06] transition whitespace-nowrap"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addittional;
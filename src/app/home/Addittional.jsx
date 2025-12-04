
 'use client';
 import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
 
 const Additional = () => {
  return (
    <div className="w-full bg-[#FDF1DF] py-8 md:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          
          {/* Image */}
          <div className="flex-shrink-0">
            <Image 
              width={180} 
              height={200} 
              src="/DeepSalesWork.png" 
              className="rounded-md w-40 sm:w-48 md:w-52 h-auto" 
              alt="DeepSalesWork" 
            />
          </div>
        
          {/* Text Content */}
          <div className="w-full text-sm sm:text-base md:text-lg">
            <h2 className="text-[#FF6900] text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
              #DeepSalesWork
            </h2>
            
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
            
            <Link href="/deep-sales-work">
              <button className="px-6 cursor-pointer py-2.5 bg-[#FF8B07] text-white rounded-lg font-semibold transition hover:bg-[#e67d00] w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

 
 export default Additional

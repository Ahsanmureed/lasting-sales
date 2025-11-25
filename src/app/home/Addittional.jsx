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
    <div className="w-full bg-[#FDF1DF] h-auto md:h-[38vh] pb-2 md:pb-0">
      <div className="rounded-xl px-6 flex flex-col md:flex-row items-center gap-12 w-full">
        
        <div>
       <Image
  width={220}
  height={350}
  src="/DeepSalesWork.png"
  className="rounded-md w-[180px] sm:w-[200px] md:w-[220px] h-auto"
  alt="left"
/>

        </div>

        <div className="w-full text-[20px]">
          <span className="text-center flex items-center mx-auto justify-start text-[#FF6900] text-3xl font-bold pt-4">
            #DeepSalesWork
          </span>

          Deep Work is "distraction-free work that pushes cognitive ability to its limit and creates new value". 
          It's valuable work that requires focus, energy, and actively removing distractions.

          <br />

          <p>
            Sales professionals face a significant challenge in balancing their sales work, which demands
            responsiveness and availability for clients, while also managing the need for distraction-free
            time to focus on meaningful and valuable tasks. This is where LastingSales’ DeepSalesWork mantra
            proves helpful!
          </p>

          <button
            onClick={handleBtn}
            className="px-6 mt-2 py-2 flex text-[19px] cursor-pointer mx-auto bg-[#FF8B07] text-white rounded-lg font-semibold transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addittional;

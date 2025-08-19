// app/components/Hero.tsx
"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Hero() {
  
  return (
  <>
  <NavBar/>
    <section className="relative w-full pt-32  flex items-center justify-center bg-gray-900">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/2-2.png" 
          alt="Buildings"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
        How LastingSales help Marketing Agencies close deals more quickly?
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
  From creating deals to assigning them to your sales team.
        </p>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">
          Try it free
        </button>

        {/* Dashboard preview (optional mockup) */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/Hero-Section-Image-1-1536x1196.png" // replace with screenshot/mockup
            alt="Dashboard"
            width={900}
            height={500}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>

 <section className="bg-white py-16">
  {/* Marketing Banner - Full Width */}
  <div className="w-full px-6">
    <div className="bg-green-50 rounded-xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
      <div>
        <Image width={320} height={220} src="/left.png" alt="left" />
      </div>
      <div className="text-center md:text-right">
        <p className="text-[#2D3441] text-center text-[21px] font-medium mb-2">
          Do you want to generate more leads?
        </p>
        <button className="px-6 py-3 flex text-[17px] mx-auto bg-[#00C696] text-white rounded-lg font-semibold hover:bg-green-600 transition">
          Get your marketing plan
        </button>
      </div>
      <div>
        <Image width={320} height={220} src="/Right-1024x576.png" alt="right" />
      </div>
    </div>
  </div>


</section>
    
<Footer/>
  </>
  );
}

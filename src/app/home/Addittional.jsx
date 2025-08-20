
 import Image from 'next/image'
import React from 'react'
 
 const Addittional = () => {
   return (
     <div className="w-full ">
    <div className="bg-[#FDF1DF] rounded-xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
      <div>
        <Image width={320} height={220} src="/Left.png" alt="left" />
      </div>
      <div className="text-center md:text-right">
        <p className="text-[#2D3441] text-center text-[21px] font-[600] mb-2">
          Do you want to generate more leads?
        </p>
        <button className="px-6 py-3 flex text-[19px] cursor-pointer mx-auto bg-[#FF8B07] text-white rounded-lg font-semibold hover:bg-[#02B388] transition">
          Get your marketing plan
        </button>
      </div>
      <div>
        <Image width={320} height={220} src="/Right-1024x576.png" alt="right" />
      </div>
    </div>
  </div>
   )
 }
 
 export default Addittional

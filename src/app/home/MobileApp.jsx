'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

const DesignedFor = () => {
  const cards = [
    {
      img: '/13-300x300.png',
      title: 'For Estate Agents',
      desc: 'Respond quickly and do follow-ups to potential leads',
      link: '#',
    },
    {
      img: '/14-300x300.png',
      title: 'For Coaches',
      desc: 'Attract students from different marketing channels',
      link: '#',
    },
    {
      img: '/15-300x300.png',
      title: 'For Digital Agencies',
      desc: 'Attract and retain customers in your sales pipeline',
      link: '#',
    },
  ];

  return (
    <>
      {/* First Section */}
      <section className="bg-[#e6f7f2] py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-40">
  
  {/* LEFT SIDE - Image */}
  <div className="relative w-full lg:w-1/2 flex justify-center">
    <Image
      src="/Mobile Screens.png"
      alt="LastingSales Mobile App"
      width={1050}  
      height={750} 
      className="rounded-xl w-[150%] max-w-none"
    />
  </div>

  {/* RIGHT SIDE - Text */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#059671] mb-6">
      LastingSales' Mobile App
    </h2>

    <ul className="space-y-4 text-lg text-gray-700 mb-8">
      <li className="flex items-start gap-3">
        <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
        <span className="flex items-center gap-2">
          Instant Leads Alerts from <span className=' text-[#1877F2] font-extrabold'>Facebook Ads</span> and website.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
        Real-time notification on mobile
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
        Instant response via <span className=' flex items-center gap-0.5'><FaWhatsapp className='text-[#25D366] text-[23px]'/>WhatsApp</span>
      </li>
      <li className="flex items-start gap-3">
        <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
        Assign leads to sales rep in one click
      </li>
      <li className="flex items-start gap-3">
        <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
        Set up followup reminders
      </li>
    </ul>

    <div className="flex flex-wrap gap-4">
      <Link
        href="https://live.lastingsales.com/en/register"
        className="bg-[#059671] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition"
      >
        Try it Free
      </Link>
      <Link
        href="https://calendly.com/kashif-lastingsales/30min"
        className="bg-[#FF8B07] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition"
      >
        Book a Call
      </Link>
    </div>
  </div>
</div>


        <div className="flex items-center mx-52 mt-10 gap-10">
          <Image alt="google play" src="googleplay.svg" width={160} height={160} />
          <Image alt="apple store" src="applestore.svg" width={160} height={160} />
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#e6f7f2] py-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* RIGHT SIDE - Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#059669] mb-6">
              Meet <span className='text-[#FF8B07]'>Leadly:</span> Your 24/7 AI Sales Agent
            </h2>

            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Engages leads the moment they arrive — no waiting, no missed opportunities
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Conversations guided by AI to ask the right questions and filter real prospects
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Connects via WhatsApp, email, and more — automatically.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Learns from your past lead interactions to tailor smarter responses.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Works seamlessly with LastingSales CRM to track, assign, and notify your sales team.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#059671] w-5 h-5 mt-1" />
                Notifies your team when a lead is qualified and ready to close
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://live.lastingsales.com/en/register"
                className="bg-[#059671] hover:text-black text-white font-semibold py-3 px-6 rounded-md transition"
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
    className="rounded-xl w-[25vw] max-w-full h-auto"
  />
</div>

</div>
      </section>





     
    </>
  );
};

export default DesignedFor;

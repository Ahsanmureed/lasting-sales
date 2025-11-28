// pages/index.js
'use client';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { fbPixel, gtag } from '@/lib/analytics';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AiAgent() {
  const router = useRouter();
    useEffect(() => {
      gtag.event({
        action: "leadly_ai_agent_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Leadly Ai Agent Page",
        content_category: "Landing"
      });
    }, []);
    
 const handleBtn = () => {
    router.push('https://live.lastingsales.com/en/register');
  };

  return (
   <>

   <NavBar/>
    <div className="font-sans text-[#333]">
   

      {/* What is Leadly Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-[#F8FCFC] gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#00B386] mb-6">What is Leadly?</h2>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Leadly is the AI engine inside LastingSales — designed to <b>engage</b>, <b>qualify</b>, and <b>assign leads instantly</b> so your sales team can focus on what matters: closing deals.
          </p>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            Whether you're generating leads from <b>Facebook Ads</b>, <b>WhatsApp</b>, <b>websites</b>, or <b>phone calls</b>,
            Leadly handles them all — with no delay, no missed opportunity.
          </p>
          <button               onClick={handleBtn}
 className="bg-[#00B386] text-white px-6 py-2 rounded hover:bg-[#009966] transition">
            Try it free
          </button>
        </div>
      <div className="relative w-full lg:w-1/2 flex justify-center">
  <img
  autoPlay
    src="/chat 2.gif"
    alt="Animated GIF"
    className="rounded-xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-auto"
  />
</div>
      </section>

    {/* How It Works Section */}
<section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-white gap-12">
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold text-[#00B386] mb-6">How It Works</h2>
    <ul className="text-gray-800 space-y-4 text-base leading-relaxed">
      <li>
        <b>Lead Capture:</b> All your leads from Facebook, WhatsApp, website forms, and more are automatically
        pulled into the CRM — no manual effort.
      </li>
      <li>
        <b>Instant Response:</b> Leadly replies to every new lead on WhatsApp — in seconds.
      </li>
      <li>
        <b>Smart Qualification:</b> It chats with the lead, asks key questions, and filters serious buyers from casual
        inquiries.
      </li>
      <li>
        <b>Data-Driven Learning:</b> Leadly learns from your past lead history to improve conversations and
        qualification accuracy over time.
      </li>
      <li>
        <b>Sales Handoff:</b> When a lead is ready, your sales team gets a real-time notification to step in and close the deal.
      </li>
    </ul>
  </div>
  <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center">
    <Image
      src="/Copy of Home page-1.png"
      alt="Chat Demo"
      width={550}
      height={550}
      className="w-full max-w-[550px] h-auto"
    />
   
  </div>
</section>


      {/* Stats Section */}
      <section className="bg-[#FFF5EC] py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#FF8200] mb-12">Why Businesses Love Leadly</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-[#FF8200] font-semibold text-xl">
          <div>
            <p className="text-5xl font-bold mb-2">60%</p>
            Cuts sales team workload
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">90%</p>
            Boosts lead response time
          </div>
          <div>
            <p className="text-5xl font-bold mb-2">2,000+</p>
            Automatic lead response daily
          </div>
        </div>
      </section>

        <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-[#F8FCFC] gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#00B386] mb-6">Why Suitable for property Industry?</h2>
          <p className="text-gray-700 text-base mb-4 leading-relaxed">
            Leadly is built for real estate professionals who receive multiple property inquiries daily and don't want to lose valuable leads just because responses were delayed.
          </p>
          <ul className="text-gray-800 space-y-4 text-base leading-relaxed">
            <li>
              <b>Real estate agents and brokers:</b> who get property inquiries from Facebook, WhatsApp, or website forms and want to respond instantly to potential buyers or tenants.
            </li>
            <li>
              <b>Property developers:</b> who need to manage and follow up with hundreds of prospects interested in new apartments, plots, or commercial units.
            </li>
            <li>
              <b>Real estate marketing teams:</b> who run digital campaigns and need quick, automated responses to keep buyers engaged before they move on to competitors.
            </li>
            <li>
              <b>Property management firms:</b> handling rental or maintenance requests and needing a fast, organized way to communicate with clients and tenants.
            </li>
          </ul>
        </div>
      <div className="relative w-full lg:w-1/2 flex justify-center">
              <img
                src="/chat 1.gif"
                alt="Animated GIF"
                className="rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto"
              />
            </div>
      </section>

    </div>

    <Footer/>

   </>
  );
}
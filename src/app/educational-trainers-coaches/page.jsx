// app/components/Hero.tsx
"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { fbPixel, gtag } from "@/lib/analytics";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DollarSign, Users, CalendarCheck, Layout, Table, Facebook, ClipboardList, Paperclip } from "lucide-react";

export default function Hero() {
    useEffect(() => {
      gtag.event({
        action: "educational_trainers_coaches_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Educational trainers coaches Page",
        content_category: "Landing"
      });
    }, []);
    const router = useRouter();
 const handleBtn = () => {
    router.push('https://live.lastingsales.com/en/register');
  };

    const features = [
    { icon: <DollarSign size={40} className="text-[#059671]" />, title: "Lead Consolidation" },
    { icon: <Users size={40} className="text-[#059671]" />, title: "Lead Distribution" },
    { icon: <CalendarCheck size={40} className="text-[#059671]" />, title: "Follow-Ups" },
    { icon: <Layout size={40} className="text-[#059671]" />, title: "Custom Data Fields" },
    { icon: <Table size={40} className="text-[#059671]" />, title: "Pipelines & Workflow" },
    { icon: <Facebook size={40} className="text-[#059671]" />, title: "Facebook Integration" },
    { icon: <ClipboardList size={40} className="text-[#059671]" />, title: "Web Forms for WhatsApp & SMS" },
    { icon: <Paperclip size={40} className="text-[#059671]" />, title: "File Attachments" },
  ];

  return (
  <>
  <NavBar/>
    <section className="relative w-full pt-32  flex items-center justify-center bg-gray-900">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/1-2.png" 
          alt="Buildings"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
        Best CRM for Educational Trainers and Coaches
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
     Attract students from different marketing channels, assign them to your sales team, match students with the right courses, and boost enrollment rate with LastingSales.
        </p>
        <button               onClick={handleBtn}
 className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">
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
<>
      {/* Section 1 */}
      <div className="bg-[#fff] flex items-center py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={"/6-6.jpeg"}
              width={1000}
              height={200}
              className="w-full h-auto max-w-md md:max-w-lg"
              alt="Lead Profile"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-[#059671] text-3xl md:text-4xl font-bold leading-snug">
             
Customer View That Coaches <br />Love.
            </h1>
            <h5 className="mt-4 text-gray-600 text-lg">
             Have a complete 360° view of each customer and their interactions with your sales team.
            </h5>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Conversation between the sales team",
                "Calls, Notes, and Follow-ups",
                "File Attachments",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-6 py-3 flex items-center gap-3 shadow"
                >
                  <span className="text-[#059671] text-xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-[#059671] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90">
                Try it free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#fff] flex items-center py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-[#FF8B07] text-3xl md:text-4xl font-bold leading-snug">
              Lead Consolidation in Sales  <br /> Pipeline
            </h1>
            <h5 className="mt-4 text-gray-600 text-lg">
             Create multiple Pipelines and Consolidate all your leads coming from different marketing channels including Facebook Ads, Calls, Websites, Forms, and Spreadsheets.
            </h5>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Custom Pipelines",
                "Lead Forms",
                "Sales Team Reports",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-6 py-3 flex items-center gap-3 shadow"
                >
                  <span className="text-[#FF8B07] text-xl">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-[#059671] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90">
                Try it free
              </button>
             
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={"/6-7.png"}
              width={1000}
              height={200}
              className="w-full h-auto max-w-md md:max-w-lg"
              alt="Pipeline Stages"
            />
          </div>
        </div>
      </div>

    </>
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
    
{/* //nichy wala */}

 <div className="bg-[#fff] flex items-center py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
          {/* Left Image */}
      

          {/* Right Content */}
        <div className="max-w-4xl mx-auto text-center md:text-left">
  {/* Heading */}
  <h1 className="text-[#059671] text-3xl md:text-4xl font-bold leading-snug">
    Tailored Region-Wise Pipelines for <br /> Educational Trainers
  </h1>
  <h5 className="mt-3 text-gray-500 text-lg">
    Custom Stages & Dynamic Fields
  </h5>

  {/* Features */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Feature 1 */}
    <div>
      <h3 className="flex items-center gap-2 text-[#059671] font-semibold text-lg">
        <span className="text-sm">➙</span> Enhanced Flexibility
      </h3>
      <p className="mt-2 text-gray-500 text-sm">
        Consultants can create customized pipelines for different regions
      </p>
    </div>

    {/* Feature 2 */}
    <div>
      <h3 className="flex items-center gap-2 text-[#059671] font-semibold text-lg">
        <span className="text-sm">➙</span> Dynamic Customization
      </h3>
      <p className="mt-2 text-gray-500 text-sm">
        Consultants can define custom stages and dynamic fields to align with
        customer requirements
      </p>
    </div>
  </div>

  {/* Button */}
  <div className="mt-10">
    <button className="bg-[#059671] text-white font-semibold px-6 py-3 rounded-md shadow hover:opacity-90">
      TRY FOR FREE →
    </button>
  </div>
</div>

              <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={"/6-8.png"}
              width={1000}
              height={200}
              className="w-full h-auto max-w-md md:max-w-lg"
              alt="Lead Profile"
            />
          </div>
        </div>
      </div>
 <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#059671] mb-12">
      Features that will help your business grow
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="text-center space-y-4">
        <DollarSign size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">
          Lead Consolidation
        </h3>
        <p className="text-gray-600 text-sm">
          You can create or import leads on LastingSales to create deals and then
          put notes and follow-ups on them.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="text-center space-y-4">
        <Table size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">Sales Pipeline</h3>
        <p className="text-gray-600 text-sm">
          Stages according to your business sales funnel can be created dynamically.
          You can analyze your team’s performance and how many education deals
          are in the won or lost stage.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="text-center space-y-4">
        <CalendarCheck size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">
          Notes & Follow ups
        </h3>
        <p className="text-gray-600 text-sm">
          LastingSales helps your team make notes on each student and set
          reminders for follow-ups so that no deal remains untouched.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="text-center space-y-4">
        <Users size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">
          Teams & Collaborations
        </h3>
        <p className="text-gray-600 text-sm">
          Admin can assign contacts and deals to the team and can analyze its
          performance and productivity. So no more need to manage clients on
          spreadsheets.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="text-center space-y-4">
        <Layout size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">Sales Calls</h3>
        <p className="text-gray-600 text-sm">
          We help our clients integrate their calls with LastingSales if they
          provide us with the API of their mobile operator. Call logs and
          recordings will be shown in the contact profile.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="text-center space-y-4">
        <Facebook size={40} className="text-[#059671] mx-auto" />
        <h3 className="text-lg font-semibold text-[#059671]">Integration</h3>
        <p className="text-gray-600 text-sm">
          You can integrate your Facebook lead ads and website contact forms to
          get leads in LastingSales. Other than this, you can create LastingSales
          Forms to capture leads from WhatsApp and SMS Campaigns.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>

  </>
  );
}

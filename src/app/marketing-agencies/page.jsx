// app/components/Hero.tsx
"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { FaUserAlt, FaHeadset, FaPlay, FaProjectDiagram } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineFunnel } from "react-icons/hi2";
import { fbPixel, gtag } from "@/lib/analytics";
import { CalendarCheck, DollarSign, Facebook, Layout, Table, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TbAdjustmentsBolt } from "react-icons/tb";


export default function Hero() {
    const features = [
    {
      icon: <FaUserAlt className="text-[#059671] text-3xl" />,
      title: "Online Customer Interaction",
      desc: "LastingSales helps SaaS businesses effectively engage with and acquire customers by consolidating leads from various online platforms.",
    },
    {
      icon: <HiOutlineFunnel className="text-[#059671] text-3xl" />,
      title: "Lead Consolidation",
      desc: "LastingSales streamlines lead management by consolidating leads from different platforms, facilitating efficient lead nurturing and conversion.",
    },
    {
      icon: <FiHelpCircle className="text-[#059671] text-3xl" />,
      title: "Expedited Customer Acquisition",
      desc: "LastingSales enables businesses to acquire customers at an accelerated pace by streamlining the lead management process.",
    },
    {
      icon: <FaHeadset className="text-[#059671] text-3xl" />,
      title: "Seamless Customer Support",
      desc: "LastingSales supports businesses in providing efficient and personalized customer support by consolidating leads and customer data.",
    },
  ];
   const features2 = [
    {
      img: "/7-0.png",
      title: "Ease of Use",
      desc: `Attempting to replicate CRM capabilities on a large spreadsheet can lead to unnecessary complexity for SMEs. LatingSales CRM is user-friendly, storing user and contact information while creating scheduled tasks and setting reminders. Additionally, our software incorporates website forms and phone calling capabilities with recorded interactions for analyzing customer sentiment and gaining insights.`,
    },
    {
      img: "/7-1.png",
      title: "Interdepartmental Coordination",
      desc: `Utilize LastingSales CRM data to efficiently segment demographics, collect and reuse customer information, and improve marketing and customer care operations. Our CRM software facilitates interdepartmental coordination, allowing you to set sales targets, launch email campaigns, and monitor customer feedback on social media.`,
    },
  ];
  const router = useRouter();
   const handleBtn = () => {
    router.push('https://live.lastingsales.com/en/register');
  };

    useEffect(() => {
      gtag.event({
        action: "marketing_agencies_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Marketing Agencies Page",
        content_category: "Landing"
      });
    }, []);
  
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


 <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#059671] mb-12">
      How LastingSales CRM helps Marketing Agencies to close <br/> more deals quickly!
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
    

       {/* Section 1 */}
         <div className="bg-[#fff] flex items-center py-12 md:py-20">
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src={"/6-8.png"}
        width={600}
        height={400}
        className="w-full h-auto"
        alt="Lead Profile"
      />
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-[#059671] text-3xl md:text-4xl font-bold leading-snug">
        Acquire and Retain Customers in <br /> Sales Pipeline
      </h1>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center md:items-start gap-4">
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>




 <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-[#059671] text-2xl md:text-4xl font-bold leading-snug mb-12">
          Create Multiple Pipelines – <br />
          Customizable Pipeline Stages & <br />
          Dynamic Fields
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/6-9.png"
              width={900}
              height={600}
              alt="Pipeline Dashboard"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl shadow p-8 text-left">
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <FaProjectDiagram className="text-[#059671] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Customizable Pipelines</h3>
                  <p className="text-gray-600">
                    SaaS agents can create multiple pipelines tailored to their software offerings
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <TbAdjustmentsBolt className="text-[#059671] text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Enhanced Flexibility</h3>
                  <p className="text-gray-600">
                    Agents can customize stages and dynamic fields separately
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="bg-[#059671] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
                  TRY FOR FREE →
                </button>
                <button className="flex items-center gap-3 text-gray-700 hover:text-[#059671]">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full shadow border border-gray-200">
                    <FaPlay className="text-[#059671]" />
                  </span>
                  <span className="font-medium">How It Works</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




     <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[#059671] text-2xl md:text-4xl font-bold leading-snug">
          Maximizing Efficiency and Collaboration with LastingSales CRM
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Unlocking the Power of User-Friendly Features and Interdepartmental
          Coordination for Small to Mid-Sized Marketing Agencies
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features2.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center"
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt={item.title}
                className="w-40 h-40 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-[#059671] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer/>
  </>
  );
}

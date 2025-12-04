// app/components/Hero.tsx
"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Calendar, Database, Share2, Tablet,DollarSign, ClipboardList, CheckSquare, Users, Phone, Facebook } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { fbPixel, gtag } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import LeadProfile from "./LeadProfile";
export default function Hero() {
  const router = useRouter();
   const handleBtn = () => {
    router.push('https://live.lastingsales.com/en/register');
  };

    useEffect(() => {
      gtag.event({
        action: "estate_agent_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Estate Agent Page",
        content_category: "Landing"
      });
    }, []);
    const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
      title: "Lead Consolidation",
      desc: "You can create or import leads on LastingSales from your website, Facebook Ads and calling platforms and can add notes and follow-ups on these leads.",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-green-600" />,
      title: "Sales Pipeline",
      desc: "You can add multiple sales pipelines and custom stages of each pipeline according to your business needs. You can analyze your team's performance and how many property deals are in the won or lost stages.",
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-green-600" />,
      title: "Notes & Follow ups",
      desc: "LastingSales helps your team make notes on each lead and set reminders for follow-ups so that no lead remains untouched.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Teams & Collaborations",
      desc: "Admin can assign contacts and deals to the team and can analyze team’s performance and productivity. So no more need to manage clients on spreadsheets.",
    },
    {
      icon: <Phone className="w-10 h-10 text-green-600" />,
      title: "Sales Calls",
      desc: "We help our clients integrate their calls with LastingSales. This feature covers Call logs and recordings of all sales conversions with the leads.",
    },
    {
      icon: <Facebook className="w-10 h-10 text-green-600" />,
      title: "Integrations",
      desc: "You can integrate your Facebook lead ads and website contact forms to get leads in LastingSales. Other than this, you can do plenty of other integrations using webhooks.",
    },
  ];
    const problems = [
    {
      icon: <Tablet className="w-10 h-10 text-orange-500" />,
      title: "Missing 100s of leads coming from multiple channels?",
      desc: "You can consolidate all your leads in one place, making it easy for your sales team to manage.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-orange-500" />,
      title: "Tired of manually distributing leads to your sales team?",
      desc: "You can quickly assign relevant leads in one click to your sales reps based on their performance and expertise.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-orange-500" />,
      title: "Unable to keep track of follow-ups?",
      desc: "Simplify follow-ups by creating reminders and notes on each lead, ensuring that no leads fall through the cracks.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Overwhelmed by messy data on spreadsheets?",
      desc: "You can create custom fields to organize and access important lead information specific to your industry.",
    },
  ];
  return (
  <>
  <NavBar/>
    <section className="relative w-full pt-32  flex items-center justify-center bg-gray-900">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/colorful-old-buildings-quebec-city-street-scaled.jpg" // replace with your background image
          alt="Buildings"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
          Engage Leads Instantly, <br /> Close Deals Faster
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
          Attract landlords and homeowners from different marketing channels,
          assign these leads to your sales team, and see the complete sales
          progress on all the leads with LastingSales!
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

     <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
          Are you facing these problems?
        </h2>
        <p className="text-gray-600 mb-12">
          Consolidate and distribute 1000s of leads coming from multiple sources
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="bg-orange-50 p-8 rounded-lg text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   <section className="bg-white py-16">
  

  {/* Benefits Section - 70% width */}
  <div className="w-[70%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Top benefits for Estate Agents
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Whether you work with land, residential, commercial, or industrial properties,
        LastingSales saves your time and increases revenue by keeping track of your deals on the go.
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8 justify-items-center">
      {benefits.map((b, idx) => (
        <div
          key={idx}
          className="bg-green-50 rounded-lg p-6 text-center shadow-sm w-full"
        >
          <div className="flex justify-center mb-4">{b.icon}</div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            {b.title}
          </h3>
          <p className="text-gray-700 text-sm">{b.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<LeadProfile/>
<Footer/>

  </>
  );
}

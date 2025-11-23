'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react"; // 👈 import arrow icon

const DesignedFor = () => {
  const cards = [
    {
      img: "/13-300x300.png",
      title: "For Estate Agents",
      desc: "Respond quickly and do follow-ups to potential leads",
      link: "/crm-for-estate-agents"
    },
    {
      img: "/14-300x300.png",
      title: "For Coaches",
      desc: "Attract students from different marketing channels",
      link: "/educational-trainers-coaches"
    },
    {
      img: "/15-300x300.png",
      title: "For Digital Agencies",
      desc: "Attract and retain customers in your sales pipeline",
      link: "/marketing-agencies"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-[#059671] font-bold mb-12">
          LastingSales is designed for...
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-semibold text-[#059876] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">{card.desc}</p>
              <a
                href={card.link}
                className="text-[#059876] font-medium flex items-center justify-center gap-2 hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4" /> {/* 👈 icon here */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignedFor;

'use client';

import Image from "next/image";

const FollowUpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
         <div className="flex justify-center">
          <Image
            src="/smith.png"
            alt="Follow-up Dashboard"
            width={700}
            height={500}
            priority
          />
        </div>
    
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            <span className="text-[#059671]">
              Do you want to keep track of your Sales team performance?
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
          It’s essential to know how your sales team is handling potential clients so you can offer guidance and improve where needed. With LastingSales, you get a clear view of deal statuses—whether won, lost, or still negotiating—and see how many follow-ups have been made. You can also access detailed call summaries and recordings with potential clients. Exciting, right?
          </p>
          <a
            href="https://live.lastingsales.com/en/register"
            className="inline-block bg-[#059671] text-white px-6 py-3 rounded-md font-medium hover:text-black transition"
          >
            Try it free
          </a>
        </div>

       
      </div>
    </section>
  );
};

export default FollowUpSection;

'use client';

import Image from "next/image";

const FollowUpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            <span className="text-[#059671]">
              
What if you miss timely follow-ups and lose a potential lead?
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
         No worries, we’ve got you covered! With LastingSales, you can write follow-up notes and share them with your sales reps to ensure timely responses. Easily assign leads coming from Facebook Ads and websites to the best-suited sales agent. This way, you can follow up with every potential lead on time and in the best possible way.
          </p>
          <a
            href="https://live.lastingsales.com/en/register"
            className="inline-block bg-[#059671] text-white px-6 py-3 rounded-md font-medium hover:text-black transition"
          >
            Try it free
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/5.png"
            alt="Follow-up Dashboard"
            width={700}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FollowUpSection;

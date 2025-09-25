import React from "react";
import Image from "next/image";
import Pricing from "@/app/home/Pricing";

const LeadProfile = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#E6F8F3] flex items-center py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={"/4-5.png"}
              width={700}
              height={200}
              className="w-full h-auto max-w-md md:max-w-lg"
              alt="Lead Profile"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-[#059671] text-3xl md:text-4xl font-bold leading-snug">
              Lead Profile <br /> that Estate Agents Love
            </h1>
            <h5 className="mt-4 text-gray-600 text-lg">
              Have a complete 360° view of each lead and its interactions with
              your sales team.
            </h5>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Conversation between Sales Rep",
                "No of Deals",
                "Calls, Notes, and Follow-ups",
                "Custom Data Fields",
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
              <button className="bg-[#FF8B07] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#FDF1DF] flex items-center py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-[#FF8B07] text-3xl md:text-4xl font-bold leading-snug">
              Create Custom Pipelines <br /> Stages & Fields
            </h1>
            <h5 className="mt-4 text-gray-600 text-lg">
              Estate agents can create customer pipelines according to their
              business and construction projects needs with custom stages and
              fields for each.
            </h5>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Multiple Sales Pipeline",
                "Deal Stages",
                "Sales Team Reports",
                "Custom Data Fields",
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
              <button className="bg-[#FF8B07] text-white font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90">
                Book a Call
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
              src={"/4-5.png"}
              width={700}
              height={200}
              className="w-full h-auto max-w-md md:max-w-lg"
              alt="Pipeline Stages"
            />
          </div>
        </div>
      </div>

      <Pricing />
    </>
  );
};

export default LeadProfile;

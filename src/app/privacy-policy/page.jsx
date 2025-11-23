"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { fbPixel, gtag } from "@/lib/analytics";
import React, { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
      gtag.event({
        action: "privacy_policy_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Privacy Policy Page",
        content_category: "Landing"
      });
    }, []);
  return (
   <>

   <NavBar/>
    <div className="bg-white min-h-screen pt-16">
      {/* Header Section */}
      <div className="bg-[#059671] py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Privacy Policy
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-[#059671] mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
         Welcome and thank you for your interest in LastingSales Privacy Policy. This Privacy Policy (“Policy”) describes the information that we gather on or through the Service, how we use and disclose such information, and the steps we take to protect such information. By visiting the Site, or by purchasing or using the Service, you accept the privacy practices described in this Policy. This Policy is incorporated into and is subject to, the LastingSales Terms of Service.
          </p>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#059671] mb-4">Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
         All data in Lasting Sales is private by default, and you can only view data that you or you specifically choose to share with others such as your sales agents or the customers. The data we collect will be from Facebook Lead Ads, Website Forms, and Sales Calls. Information we will collect will be like Full Name, Mobile No, Email Address, Company Website, Notes, and much more. We run a business entirely on a monthly subscription or per user, with no hidden costs or terms. We will never sell or disclose your leads, contacts, data, or details to third parties or advertisers that conflict with your interests. LastingSales never sells, shares, or makes your data available to third parties. You always have full control over your data and you can delete it at any time without permission.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold text-[#059671] mb-4">Security</h2>
          <p className="text-gray-700 leading-relaxed">
          The data is fully encrypted in transit (TLS 1.2 over HTTPS) and in the database (256-bit Advanced Encryption Standard). We are committed to protecting and protecting your data using the highest quality technology.
          </p>
        </section>
      </div>
    </div>


    <Footer/>
   </>
  );
};

export default PrivacyPolicy;

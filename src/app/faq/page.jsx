'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which lead sources can Leadly connect to?",
      answer: "Leadly connects with all your favorite channels Facebook Lead Ads, WhatsApp messages, website inquiry forms, and even phone call captures. Wherever your leads come from, Leadly is ready to engage them instantly."
    },
    {
      question: "How long does setup take?",
      answer: "Setup takes less than 10 minutes! Just link your channels, set your preferred messages and questions, and you're ready to go live with instant AI-powered lead responses."
    },
    {
      question: "What happens when a new lead comes in?",
      answer: "As soon as a new lead arrives, Leadly jumps into action. It sends an instant WhatsApp message, asks your chosen qualification questions, scores the lead, and assigns it to the right salesperson — all automatically."
    },
    {
      question: "Can I customise the messages and qualification questions?",
      answer: "Absolutely! You can personalise every message, question, and follow-up to fit your brand voice and target audience. Leadly's flexible chat flows make automation feel human and on-brand."
    },
    {
      question: "How does Leadly assign leads to my sales team?",
      answer: "Leadly automatically routes each lead to the right person based on your rules — such as territory, availability, or workload. No manual sorting, no missed opportunities."
    },
    {
      question: "Does Leadly work 24/7?",
      answer: "Yes! Leadly never sleeps. It responds to every inquiry instantly, even outside business hours, so your leads are always engaged day or night."
    },
    {
      question: "Can I view analytics and reports in Leadly?",
      answer: "Definitely. Leadly gives you a clear view of how your leads are performing — from response rates to conversions. The built-in dashboard helps you track what's working and where to improve."
    },
    {
      question: "Is Leadly safe and secure to use?",
      answer: "Yes — Leadly follows strict data security standards and uses encrypted connections. Your leads and chat data are stored safely inside your CRM, keeping everything compliant and protected."
    },
    {
      question: "Can I try Leadly for free?",
      answer: "Yes! You can start with a free trial to see how Leadly automates your WhatsApp replies, qualifies leads, and saves hours of manual work — all before you upgrade."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
   
<NavBar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white  py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#009966' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about Leadly and how it can transform your lead management
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200"
                style={{
                  backgroundColor: openIndex === index ? '#009966' : 'white',
                  color: openIndex === index ? 'white' : '#1f2937'
                }}
              >
                <span className="text-lg font-semibold pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                  style={{ color: openIndex === index ? 'white' : '#FF8200' }}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 py-5 bg-gray-50 border-t-2" style={{ borderColor: '#FF8200' }}>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-20 px-6 text-center" style={{ backgroundColor: '#009966' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white mb-8">
            Our team is here to help! Get in touch and we'll answer any questions you have about Leadly.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: '#FF8200', color: 'white' }}
          >
            Contact Support
          </button>
        </div>
      </div> */}
    </div>

    <Footer/>
   </>
  );
}
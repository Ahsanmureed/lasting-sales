import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Channels",
      description: "Link your website, social media, email campaigns, and advertising platforms in minutes.",
      image: "🔗"
    },
    {
      step: "02", 
      title: "AI Captures & Qualifies",
      description: "Our intelligent system automatically captures leads and qualifies them based on your criteria.",
      image: "🎯"
    },
    {
      step: "03",
      title: "Smart Follow-Up Begins",
      description: "Personalized sequences start immediately, nurturing leads with the right message at the right time.",
      image: "💬"
    },
    {
      step: "04",
      title: "Convert & Close",
      description: "Watch your conversion rates soar as qualified leads turn into paying customers automatically.",
      image: "💰"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-emerald-600">Lasting Sales</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and see results in days. Our simple 4-step process 
            transforms how you handle leads forever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white text-xl font-bold rounded-full mb-6">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="text-6xl mb-6">
                {step.image}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: '#059574' }}
          >
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
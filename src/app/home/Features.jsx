import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Lead Capture",
      description: "Automatically capture and qualify leads from multiple channels with intelligent AI that never sleeps."
    },
    {
      icon: "⚡",
      title: "Smart Follow-Up Automation",
      description: "Personalized follow-up sequences that adapt based on lead behavior and engagement patterns."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track conversion rates, lead quality, and ROI with comprehensive dashboards and reports."
    },
    {
      icon: "🕒",
      title: "24/7 Lead Management",
      description: "Your AI assistant works around the clock to ensure no lead goes unnoticed or unqualified."
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Seamlessly share leads, notes, and insights across your entire sales and marketing team."
    },
    {
      icon: "📱",
      title: "Multi-Channel Integration",
      description: "Connect with leads across email, SMS, social media, and phone calls from one unified platform."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="text-emerald-600">convert more leads</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing potential customers to slow follow-ups. Our AI-powered platform 
            ensures every lead gets the attention they deserve, when they need it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-4xl mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
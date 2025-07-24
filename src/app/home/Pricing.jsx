import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 leads/month",
        "Basic AI follow-up",
        "Email integration",
        "Standard analytics",
        "Email support"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional", 
      price: "$79",
      period: "/month",
      description: "Best for growing service businesses",
      features: [
        "Up to 2,500 leads/month",
        "Advanced AI automation",
        "Multi-channel integration",
        "Advanced analytics & reports",
        "Priority support",
        "Team collaboration",
        "Custom workflows"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month", 
      description: "For large teams and agencies",
      features: [
        "Unlimited leads",
        "Enterprise AI features",
        "White-label options",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom onboarding",
        "API access",
        "Advanced security"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-emerald-600">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
            No setup fees, no hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative ${
                plan.popular ? 'ring-2 ring-emerald-600' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600">
                  {plan.period}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-emerald-600 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button 
                className={`w-full font-medium px-6 py-3 rounded-lg transition-all duration-200 ${
                  plan.popular 
                    ? 'text-white hover:opacity-90' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                style={plan.popular ? { backgroundColor: '#059574' } : {}}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            🛡️ 30-day money-back guarantee • Cancel anytime • No contracts
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
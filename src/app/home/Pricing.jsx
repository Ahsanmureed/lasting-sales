'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Pricing = () => {
  const router = useRouter();
  const handleBtn  = ()=>{
 router.push('https://live.lastingsales.com/en/register')
  }
  const plans = [
    {
      name: "Monthly Plan",
      price: "$12/per user",
      period: "/month",
      features: [
      "Unlimited Leads",
"10 Sales Pipelines & Stages",
"1 GB Files storage",
"Facebook Lead Ads & Web Forms Integration"
      ],
      popular: false,
      buttonText: "Try it free"
    },
    {
      name: "Professional", 
      price: "$70/ per user",
      period: "/month",
      features: [
       " Unlimited Leads",
"15 Sales Pipelines & Stages",
"2 GB Files storage",
"Facebook Lead Ads & Web Forms Integration"
      ],
      popular: true,
      buttonText: "Try it free"
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={` rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative ${
                plan.popular ? 'bg-[#E6F8F3] ' : 'bg-white'
              }`}
            >
             
              
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
              onClick={handleBtn}
                className={`w-full cursor-pointer font-medium px-6 py-3 rounded-lg transition-all duration-200 ${
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

      
      </div>
    </section>
  )
}

export default Pricing


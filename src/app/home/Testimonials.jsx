import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: "👩‍💼",
      quote: "Lasting Sales increased our lead conversion by 240% in just 3 months. The AI follow-up is incredible - it's like having a dedicated sales rep working 24/7.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CEO",
      company: "Digital Marketing Pro",
      image: "👨‍💻",
      quote: "We were losing so many leads before Lasting Sales. Now every potential customer gets immediate, personalized attention. Our revenue has doubled!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Manager",
      company: "CloudSync Services",
      image: "👩‍🚀",
      quote: "The automation is mind-blowing. What used to take our team hours now happens instantly. We can focus on closing deals instead of chasing leads.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-emerald-600">thousands</span> of businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers say about transforming their lead management 
            and skyrocketing their conversions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">10,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">240%</div>
            <div className="text-gray-600">Avg. Conversion Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
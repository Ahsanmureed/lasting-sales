import Image from 'next/image';
import React from 'react'
  const achievements = [
    { src: '/9-1-768x598.png', alt: 'Startup Estonia' },
    { src: '/10-1-768x598.png', alt: 'NatWest Accelerator' },
    { src: '/e.png', alt: 'Entrepreneur First' },
    { src: '/jazz.png', alt: 'Award Logo' }
  ];
const AchevieMents = () => {
  return (
      <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#059671] mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center justify-center h-40">
                    <Image 
                      src={achievement.src} 
                      alt={achievement.alt}
                      width={250}
                      height={170}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default AchevieMents
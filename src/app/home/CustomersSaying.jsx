'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Kazim',
    company: 'Aptitude Consulting',
    logo: '/300x70.png',
    quote:
      'LastingSales makes it easy for us to quickly contact our Facebook leads by sending alerts to us as soon as someone fills the lead form on Facebook, and I can easily assign the leads to my sales team from my mobile. Now our sales team contacts the lead right after 2–3 minutes.',
  },
  {
    name: 'Mian Ahmad Wamiq',
    company: 'Urbanscape',
    logo: '/5-1.png',
    quote:
      'LastingSales makes it easy for us to quickly contact our Facebook leads by sending alerts to us as soon as someone fills the lead form on Facebook, and I can easily assign the leads to my sales team from my mobile. Now our sales team contacts the lead right after 2–3 minutes.',
  },
  {
    name: 'Umair Satti',
    company: 'CEO MyTrip.Pk',
    logo: '/OZ-Developers-Logo-B-w-1536x385.webp',
    quote:
      'LastingSales helps us close more deals by enabling quick and easy contact with leads via WhatsApp or phone. We can reach out to them in just a few taps. Before that we used to manually save the number in phonebook by viewing it from the Excel. It saves a lot of time.',
  },
  {
    name: 'Umair Satti',
    company: 'CEO MyTrip.Pk',
    logo: '/2-logo-01-e1741691769870-1024x514-1.png',
    quote:
      'LastingSales helps us close more deals by enabling quick and easy contact with leads via WhatsApp or phone. We can reach out to them in just a few taps. Before that we used to manually save the number in phonebook by viewing it from the Excel. It saves a lot of time.',
  },
   {
    name: 'Umair Satti',
    company: 'CEO MyTrip.Pk',
    logo: '/Untitled.png',
    quote:
      'LastingSales helps us close more deals by enabling quick and easy contact with leads via WhatsApp or phone. We can reach out to them in just a few taps. Before that we used to manually save the number in phonebook by viewing it from the Excel. It saves a lot of time.',
  },
];

const CustomersSaying = () => {
  return (
    <section className="bg-[#e6f7f2] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#059671] mb-4">
          Our Customers 
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We've helped numerous business owners in various industries, including real estate,
          education consulting, solar services, and more, who are running Facebook lead ads.
        </p>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-40 bg-white rounded-2xl shadow-md mx-4 flex items-center justify-center hover:shadow-lg transition p-4"
              >
                <div className="w-48 h-32 flex items-center justify-center">
                  <Image
                    src={t.logo}
                    alt={`${t.company} logo`}
                    width={192}
                    height={128}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CustomersSaying;
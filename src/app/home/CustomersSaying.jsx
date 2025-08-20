'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Kazim',
    company: 'Aptitude Consulting',
    logo: '/placeholder.png',
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
    logo: '/logo-2048x556.png',
    quote:
      'LastingSales helps us close more deals by enabling quick and easy contact with leads via WhatsApp or phone. We can reach out to them in just a few taps. Before that we used to manually save the number in phonebook by viewing it from the Excel. It saves a lot of time.',
  },
];

const CustomersSaying = () => {
  return (
    <section className="bg-[#e6f7f2] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#059671] mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We’ve helped numerous business owners in various industries, including real estate,
          education consulting, solar services, and more, who are running Facebook lead ads.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition min-h-[460px]" // ⬅️ increased height
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24  rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={t.logo}
                    alt={`${t.name} logo`}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#059671]">{t.name}</h3> {/* ⬅️ larger name */}
              <p className="text-base text-gray-700 mb-4">{t.company}</p>       {/* ⬅️ larger company */}
              <p className="text-base text-gray-600">{`"${t.quote}"`}</p>        {/* ⬅️ larger quote */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSaying;

'use client';
import React from 'react';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import Footer from './Footer';

export default function ContactUsPage() {
    const router = useRouter();
    
    // This function will be called when the reCAPTCHA is verified
    const handleRecaptchaChange = (token) => {
        console.log('reCAPTCHA token:', token);
        // You can store the token in state or form data here
    };

    // Load reCAPTCHA script
    React.useEffect(() => {
        // Initialize reCAPTCHA after script loads
        const loadRecaptcha = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.render('recaptcha-container', {
                        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your_site_key',
                        callback: handleRecaptchaChange,
                        'expired-callback': () => handleRecaptchaChange(null),
                        'error-callback': () => handleRecaptchaChange(null),
                    });
                });
            }
        };

        // If grecaptcha is already loaded (from previous page), initialize immediately
        if (window.grecaptcha) {
            loadRecaptcha();
        } else {
            // Otherwise wait for the script to load
            window.onRecaptchaLoad = loadRecaptcha;
        }

        return () => {
            // Cleanup
            if (window.onRecaptchaLoad) {
                delete window.onRecaptchaLoad;
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally verify the reCAPTcha token with your backend
        // before processing the form submission
        alert('Form submitted! (In a real app, verify reCAPTCHA first)');
    };

    return (
        <>
            {/* Load reCAPTCHA script */}
            <Script 
                src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`}
                strategy="lazyOnload"
            />
            
            <NavBar/>
            <div className="pt-32 min-h-screen bg-white">
                {/* Header Section */}
                <section className="bg-gradient-to-r from-teal-50 to-green-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-teal-600 mb-6">Contact Us</h1>
                        <button onClick={()=> router.push('https://calendly.com/kashif-lastingsales/30min?month=2025-08')} className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg">
                            Book a Call
                        </button>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-12 mb-16">
                            {/* Email Us */}
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600 mb-4">Email Us</h3>
                                <p className="text-gray-700 text-lg">info@lastingsales.com</p>
                            </div>

                            {/* Office Address */}
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600 mb-4">Office Address</h3>
                                <p className="text-gray-700 text-lg">
                                    Mincing Lane, Rowley Regis<br />
                                    England, B65 9QD
                                </p>
                            </div>

                            {/* Get In Touch */}
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600 mb-4">Get In Touch</h3>
                                <p className="text-gray-700 text-lg">+44 7507 30 5810</p>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Send Us Message</h2>
                                
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* Name and Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                First Name *
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Ex: John"
                                                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-700 bg-white"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Email Address *
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="Ex: john@abc.com"
                                                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-700 bg-white"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            Message
                                        </label>
                                        <textarea 
                                            rows="6"
                                            placeholder="Enter your message..."
                                            className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-vertical text-gray-700 bg-white"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* reCAPTCHA Section */}
                                    <div className="flex ">
                                        <div id="recaptcha-container"></div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button 
                                            type="submit"
                                            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <Footer/>

        </>
    );
}
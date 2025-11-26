'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import Footer from './Footer';
import { fbPixel, gtag } from '@/lib/analytics';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    useEffect(() => {
        gtag.event({
          action: "contact_us_page_visit",
          category: "navigation",
          label: "Landing Page"
        });
    
        fbPixel.event("ViewContent", {
          content_name: "Contact Us Page",
          content_category: "Landing"
        });
    }, []);

    const router = useRouter();
    
    // This function will be called when the reCAPTCHA is verified
    const handleRecaptchaChange = (token) => {
        console.log('reCAPTCHA token:', token);
        setRecaptchaToken(token);
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
                        'expired-callback': () => setRecaptchaToken(null),
                        'error-callback': () => setRecaptchaToken(null),
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!recaptchaToken) {
            setSubmitStatus('Please complete the reCAPTCHA verification');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Submit to Formspree
            const formDataToSend = new FormData();
            formDataToSend.append("firstName", formData.firstName);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("message", formData.message);
            formDataToSend.append("g-recaptcha-response", recaptchaToken);

            const response = await fetch("https://formspree.io/f/mkgqnggr", {
                method: "POST",
                body: formDataToSend,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    firstName: '',
                    email: '',
                    message: ''
                });
                // Reset reCAPTCHA
                if (window.grecaptcha) {
                    window.grecaptcha.reset();
                }
                setRecaptchaToken(null);
            } else {
                setSubmitStatus('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('Error sending message. Please try again.');
        }

        setIsSubmitting(false);
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
                                    
                                    Castlegate Park, Birmingham Rd, Dudley<br /> DY1 4TB United Kingdom.
                                </p>
                            </div>

                            {/* Get In Touch */}
                            <div>
                                <h3 className="text-2xl font-bold text-teal-600 mb-4">Get In Touch</h3>
                                <p className="text-gray-700 text-lg">+44 7507 30 5610</p>
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
                                                Name *
                                            </label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="Ex: John"
                                                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-700 bg-white"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Email Address *
                                            </label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Ex: john@abc.com"
                                                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-gray-700 bg-white"
                                                required
                                                disabled={isSubmitting}
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
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Enter your message..."
                                            className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-vertical text-gray-700 bg-white"
                                            required
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>

                                    {/* reCAPTCHA Section */}
                                    <div className="flex">
                                        <div id="recaptcha-container"></div>
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus && (
                                        <div className={`p-4 rounded-lg ${
                                            submitStatus === 'success' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {submitStatus === 'success' 
                                                ? '✅ Message sent successfully! We\'ll get back to you soon.' 
                                                : submitStatus
                                            }
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button 
                                            type="submit"
                                            disabled={isSubmitting || !recaptchaToken}
                                            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
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
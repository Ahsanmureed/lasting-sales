'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#E6F8F3] text-gray-700">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div onClick={() => router.push('/')} className="flex cursor-pointer items-center space-x-2 mb-6">
              <Image 
                src={logo} 
                alt="Lasting Sales Logo" 
                width={40} 
                height={40}
              />
              <span className="text-xl font-semibold text-gray-800">
                LastingSales
              </span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@lastingsales.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+44 7507 30 5610</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-teal-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Mincing Lane, Rowley Regis, England</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                Book a Call
              </button>
            </div>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-teal-600 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-teal-600 transition-colors">
                  Data Security
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-teal-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-6">
              Resources
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/knowledge-base" className="hover:text-teal-600 transition-colors">
                  Youtube Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-600 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feature-request" className="hover:text-teal-600 transition-colors">
                  Feature Request
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-6">
              Legal Section
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/terms" className="hover:text-teal-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-teal-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-teal-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-teal-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-[#E6F8F3] border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              Copyright © 2025 LastingSales LTD. All rights reserved.
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/LastingSales?_rdc=1&_rdr#" 
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/lastingsales/?originalSubdomain=uk" 
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/lastingsales/" 
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.509 0-4.551-2.041-4.551-4.55s2.042-4.551 4.551-4.551c2.509 0 4.549 2.042 4.549 4.551s-2.04 4.55-4.549 4.55zm7.424 0c-2.509 0-4.551-2.041-4.551-4.55s2.042-4.551 4.551-4.551c2.509 0 4.549 2.042 4.549 4.551s-2.04 4.55-4.549 4.55z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.youtube.com/@lastingsales/" 
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              
              <a 
                href="https://x.com/lastingsales" 
                className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </footer>
  )
}

export default Footer
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleBtn = () => {
    router.push('https://live.lastingsales.com/en/register');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Reset dropdown when toggling menu
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white fixed w-full shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div onClick={()=> router.push('/')} className="flex cursor-pointer items-center space-x-1">
            <Image 
              src={logo} 
              alt="Lasting Sales Logo" 
              width={65} 
              height={65}
              
            />
            <span className="text-[23px] font-[600] text-[#494748]">
              Lasting<span className=' text-[#686767]'>Sales</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative group">
              <div className="flex items-center py-4">
                <button className="flex items-center text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200">
                  Product
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 top-full pt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible border border-gray-100">
                <Link href="/leadly-ai-agent" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Leadly AI Agent</Link>
                <Link href="/mobile-crm" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Mobile CRM</Link>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <div className="flex items-center py-4">
                <button className="flex items-center text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200">
                  Company
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 top-full pt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible border border-gray-100">
                <Link href="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">About Us</Link>
                <Link href="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Contact Us</Link>
                <Link href="/leadly-ai-agent" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Leadly AI Agent</Link>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <div className="flex items-center py-4">
                <button className="flex items-center text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200">
                  Industries
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 top-full pt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible border border-gray-100">
                <Link href="/crm-for-estate-agents" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Estate Agents</Link>
                <Link href="/educational-trainers-coaches" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Educational Coaches</Link>
                <Link href="/marketing-agencies" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Marketing Agencies</Link>
              </div>
            </div>

            <Link 
              href="/marketing-plan" 
              className="text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200 py-4"
            >
              #DeepSalesWork
            </Link>
            
            <Link 
              href="/pricing" 
              className="text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200 py-4"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <div className="flex items-center py-4">
                <button className="flex items-center text-gray-700 hover:text-[#1E9F82] font-medium transition-colors duration-200">
                  Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute left-0 top-full pt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible border border-gray-100">

                <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">E-Books</Link>
                                <Link href="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E9F82]">Blog</Link>
              </div>
            </div>
          </div>

          {/* Try it Free Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleBtn}
              className="text-white  cursor-pointer font-semibold px-3 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md hover:bg-[#1E9F82]"
              style={{ backgroundColor: '#059574' }}
            >
              Try it free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#1E9F82] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Product Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('product')}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              >
                <span>Product</span>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'product' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'product' && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/leadly-ai-agent" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Leadly AI Agent</Link>
                  <Link href="/mobile-crm" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Mobile CRM</Link>
                </div>
              )}
            </div>

            {/* Mobile Company Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('company')}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              >
                <span>Company</span>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'company' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'company' && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/about-us" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">About Us</Link>
                  <Link href="/contact-us" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Contact Us</Link>
                  <Link href="/leadly-ai-agent" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Leadly AI Agent</Link>
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('industries')}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              >
                <span>Industries</span>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'industries' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'industries' && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/crm-for-estate-agents" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Estate Agents</Link>
                  <Link href="/educational-trainers-coaches" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Educational Coaches</Link>
                  <Link href="/marketing-agencies" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Marketing Agencies</Link>
                </div>
              )}
            </div>

            <Link 
              href="/marketing-plan" 
              className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              onClick={toggleMobileMenu}
            >
              #DeepSalesWork
            </Link>

            <Link 
              href="/pricing" 
              className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              onClick={toggleMobileMenu}
            >
              Pricing
            </Link>

            {/* Mobile Resources Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('resources')}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-[#1E9F82] font-medium"
              >
                <span>Resources</span>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === 'resources' ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'resources' && (
                <div className="pl-4 py-2 space-y-1">
                  <Link href="/blogs" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Blog</Link>
                  <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:text-[#1E9F82]">Resources</Link>
                </div>
              )}
            </div>

            {/* Mobile Try it Free Button */}
            <div className="pt-2">
              <button 
                onClick={handleBtn}
                className="w-full text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md hover:bg-[#1E9F82]"
                style={{ backgroundColor: '#059574' }}
              >
                Try it free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
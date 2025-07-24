import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Image 
              src={logo} 
              alt="Lasting Sales Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">
              Lasting Sales
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/company" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Company
            </Link>
            <Link 
              href="/industries" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Industries
            </Link>
            <Link 
              href="/marketing-plan" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Marketing Plan
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Resources
            </Link>
          </div>

          {/* Try it Free Button */}
          <div className="flex items-center">
            <Link href="/try-free">
              <button 
                className="text-white font-semibold px-3 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md hover:opacity-90"
                style={{ backgroundColor: '#059574' }}
              >
                Try it free
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
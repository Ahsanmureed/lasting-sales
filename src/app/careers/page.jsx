'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Page = () => {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Join our engineering team to build cutting-edge CRM solutions that empower sales teams worldwide.',
      responsibilities: [
        'Design and develop scalable backend systems and APIs',
        'Collaborate with product teams to implement new features',
        'Write clean, maintainable, and well-tested code',
        'Mentor junior developers and contribute to code reviews',
        'Optimize application performance and scalability'
      ],
      requirements: [
        '5+ years of software development experience',
        'Strong proficiency in Node.js, Python, or similar backend technologies',
        'Experience with React, Next.js, or modern frontend frameworks',
        'Solid understanding of database design (SQL and NoSQL)',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Frontend Software Engineer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Help us create beautiful, intuitive user interfaces that make sales teams more productive and successful.',
      responsibilities: [
        'Build responsive and performant web applications using React and Next.js',
        'Implement pixel-perfect designs with attention to detail',
        'Collaborate with designers and backend engineers',
        'Optimize frontend performance and user experience',
        'Contribute to our component library and design system'
      ],
      requirements: [
        '3+ years of frontend development experience',
        'Expert knowledge of React, Next.js, and modern JavaScript/TypeScript',
        'Strong CSS skills and experience with Tailwind CSS',
        'Understanding of web performance optimization',
        'Experience with state management (Redux, Context API, etc.)',
        'Portfolio demonstrating strong UI/UX sensibility'
      ]
    }
  ]

  const openApplicationModal = (job) => {
    setSelectedJob(job)
  }

  const closeModal = () => {
    setSelectedJob(null)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://getform.io/f/eapwqewb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setIsSubmitting(false)
          closeModal()
          form.reset()
        }, 2500)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting your application. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-36 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#009966' }}>
            Join Our Team
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Build the Future of <span style={{ color: '#FF8200' }}>Sales Technology</span>
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At LastingSales, we're creating tools that help sales teams connect more deeply with their customers. 
            Join us in making sales more human, more effective, and more meaningful.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#009966' }}>
            Why Join LastingSales?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4" style={{ color: '#FF8200' }}>🚀</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#009966' }}>Innovation First</h3>
              <p className="text-gray-700">
                Work with cutting-edge technologies and shape the future of sales automation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4" style={{ color: '#FF8200' }}>🌍</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#009966' }}>Remote Flexibility</h3>
              <p className="text-gray-700">
                Work from anywhere with flexible hours that fit your lifestyle.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4" style={{ color: '#FF8200' }}>💡</div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#009966' }}>Growth & Learning</h3>
              <p className="text-gray-700">
                Continuous learning opportunities and career development support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#009966' }}>
            Open Positions
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            Find your next challenge and join our engineering team
          </p>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className="bg-white rounded-lg shadow-lg p-8 border-l-4"
                style={{ borderLeftColor: index % 2 === 0 ? '#009966' : '#FF8200' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2" style={{ color: index % 2 === 0 ? '#009966' : '#FF8200' }}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-2">📍</span> {job.location}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-2">⏰</span> {job.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => openApplicationModal(job)}
                    className="mt-4 md:mt-0 px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90 hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: index % 2 === 0 ? '#009966' : '#FF8200' }}
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="mr-2 mt-1" style={{ color: index % 2 === 0 ? '#009966' : '#FF8200' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="mr-2 mt-1" style={{ color: index % 2 === 0 ? '#009966' : '#FF8200' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-100 bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold cursor-pointer"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2" style={{ color: '#009966' }}>
              Apply for {selectedJob.title}
            </h2>
            <p className="text-gray-600 mb-6">Fill out the form below to submit your application</p>

            {showSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#009966' }}>
                  Application Submitted Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
              <input type="hidden" name="jobType" value={selectedJob.title} />
              
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Upload CV/Resume *
                  </label>
                  <input
                    type="file"
                    name="cv"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 cursor-pointer"
                  />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#009966' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all hover:bg-gray-400 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
            )}
          </div>
        </div>
      )}

      {/* Call to Action
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#009966' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white mb-8">
            We're always looking for talented people. Send us your resume and let's talk about future opportunities.
          </p>
          <button
            onClick={() => window.location.href = 'mailto:careers@lastingsales.com'}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:opacity-90 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: '#FF8200', color: 'white' }}
          >
            Get in Touch
          </button>
        </div>
      </div> */}

      <Footer />
    </>
  )
}

export default Page
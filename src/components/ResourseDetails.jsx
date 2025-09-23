"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { fbPixel, gtag } from "@/lib/analytics";

const ResourceDetails = () => {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/api/libraries?filters[slug][$eq]=${slug}&populate=*`
        );

        if (res.data.data.length > 0) {
          setResource(res.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching resource details:", error);
      }
    };

    if (slug) fetchResource();
  }, [slug]);
  useEffect(() => {
      gtag.event({
        action: "resources_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "resources Page",
        content_category: "Landing"
      });
    }, []);
  const handleDownloadClick = () => {
    setShowModal(true);
    setEmail("");
    setSubmitStatus("");
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEmail("");
    setSubmitStatus("");
    setIsSubmitting(false);
  };

  const handleDownloadSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubmitStatus("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Submit to Formspree
      const formData = new FormData();
      formData.append("email", email);
      formData.append("resource_title", resource.title);
      formData.append("resource_slug", slug);

      const response = await fetch("https://formspree.io/f/mkgqnggr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success - now trigger the download
        const fileUrl = resource.file?.[0]?.url || resource.url;
        if (fileUrl) {
          // Create a temporary link to trigger download
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = resource.title || "download";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
        setSubmitStatus("success");
        setTimeout(() => {
          handleModalClose();
        }, 2000);
      } else {
        setSubmitStatus("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("Error submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (!resource) {
    return (
      <>
        <NavBar />
        <div className="flex justify-center items-center min-h-screen bg-[#E6F8F3] pt-16 sm:pt-20 md:pt-24">
          <div className="text-center px-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#059671] mx-auto mb-4"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const thumbnailUrl = resource.thumbnail?.url;
  const fileUrl = resource.file?.[0]?.url || resource.url;

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-[#E6F8F3] pt-22 pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            
            {/* Left Content Section */}
            <div className="lg:w-1/2 w-full space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#059671] leading-tight px-2 sm:px-0">
                  {resource.title}
                </h1>
                
                {resource.description && (
                  <p className="text-base sm:text-lg text-black leading-relaxed px-2 sm:px-0">
                    {resource.description}
                  </p>
                )}
              </div>

              {fileUrl && (
                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={handleDownloadClick}
                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#02B388] text-white text-base sm:text-lg font-semibold rounded-lg transform transition-all duration-200 hover:bg-[#059671] hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Download Now
                  </button>
                </div>
              )}
            </div>

            {/* Right Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
              {thumbnailUrl ? (
                <div className="relative w-full max-w-sm sm:max-w-md">
                  <img
                    src={thumbnailUrl}
                    alt={resource.title}
                    className="w-full h-auto rounded-xl sm:rounded-2xl"
                  />
                </div>
              ) : (
                <div className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-96 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center space-y-3 sm:space-y-4 px-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">Resource Preview</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Resource Info */}
          {(resource.category || resource.tags) && (
            <div className="mt-12 sm:mt-14 md:mt-16 text-center">
              <div className="inline-flex flex-wrap gap-2 sm:gap-3 justify-center px-4">
                {resource.category && (
                  <span className="px-3 sm:px-4 py-2 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    📁 {resource.category}
                  </span>
                )}
                {resource.tags && resource.tags.map((tag, index) => (
                  <span key={index} className="px-3 sm:px-4 py-2 bg-white text-gray-600 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    🏷️ {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Download Resource</h3>
              <p className="text-sm text-gray-600 mt-1">Enter your email to download "{resource.title}"</p>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleDownloadSubmit} className="px-6 py-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02B388] focus:border-[#02B388] outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  submitStatus === "success" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {submitStatus === "success" 
                    ? "✅ Download started! Check your downloads folder." 
                    : submitStatus
                  }
                </div>
              )}

              {/* Modal Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleModalClose}
                  disabled={isSubmitting}
                  className="flex-1 cursor-pointer px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="flex-1 cursor-pointer px-4 py-3 bg-[#02B388] text-white rounded-lg hover:bg-[#059671] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Download"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ResourceDetails;
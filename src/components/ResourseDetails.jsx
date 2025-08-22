"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ResourceDetails = () => {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);

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
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#02B388] text-white text-base sm:text-lg font-semibold rounded-lg transform transition-all duration-200   "
                  >
                    Download Now
                  </a>
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
                    className="w-full h-auto rounded-xl sm:rounded-2xl "
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

      <Footer />
    </>
  );
};

export default ResourceDetails;
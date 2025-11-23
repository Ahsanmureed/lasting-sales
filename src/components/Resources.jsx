"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Link from "next/link";
import { fbPixel, gtag } from "@/lib/analytics";

const Resources = () => {
    useEffect(() => {
      gtag.event({
        action: "home_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Home Page",
        content_category: "Landing"
      });
    }, []);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/api/libraries?populate=*`
        );
        setResources(res.data.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#059671] mx-auto mb-4"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div className="pt-28 pb-14">
        <h1 className="text-3xl font-bold text-center mb-10">Resources</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
          {resources.map((item) => {
            const thumbnailUrl = item.thumbnail?.url;
            const fileUrl = item.file?.[0]?.url || item.url;

            return (
              <div key={item.id} className="text-center w-64">
                {thumbnailUrl && (
                  <img
                    src={thumbnailUrl}
                    alt={item.title}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}

                {/* Navigate to details page */}
                <Link href={`/resources/${item.slug}`}>
                  <h2 className="text-[21px] text-black font-[600] mb-2 cursor-pointer hover:underline">
                    {item.title}
                  </h2>
                </Link>

                {fileUrl && (
                  <a
                    href={`/resources/${item.slug}`}
                    
                    rel="noopener noreferrer"
                    className="text-[#059671] font-medium"
                  >
                    Download Now
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resources;
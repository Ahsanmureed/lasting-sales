'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import NavBar from './NavBar';
import { fbPixel, gtag } from '@/lib/analytics';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/api/articles?populate=*`
      );
      setBlogs(result.data.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

    useEffect(() => {
      gtag.event({
        action: "Blogs_page_visit",
        category: "navigation",
        label: "Landing Page"
      });
  
      fbPixel.event("ViewContent", {
        content_name: "Blogs Page",
        content_category: "Landing"
      });
    }, []);

  return (
    <>
      <NavBar />

      <div className="min-h-screen pt-28 py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-[#059671] mb-10">
          Our Blogs
        </h1>

        {loading ? (
          <div className="flex justify-center  items-center py-20">
            <div className="w-12 h-12 border-4 border-[#059671] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;

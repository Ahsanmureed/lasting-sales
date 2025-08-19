'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import NavBar from './NavBar';
import { User } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/api/articles?filters[slug][$eq]=${slug}&populate=*`
      );
      setBlog(result.data.data[0]); 
    } catch (error) {
      console.log("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  return (
    <>
      <NavBar />

      {loading ? (
        <div className="flex justify-center h-screen items-center py-20">
          <div className="w-10 h-10 border-4 border-[#059671] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : !blog ? (
        <p className="text-center py-10">Blog not found</p>
      ) : (
        <div className="max-w-3xl mx-auto p-6">
          {blog.cover?.url && (
            <img
              src={blog.cover.url}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
          )}

          <h1 className="text-3xl font-bold text-[#059671] mb-4">{blog.title}</h1>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <User size={16} className="text-gray-500" />
              {blog.author?.name}
            </span>
            <span className="px-2 py-1 rounded bg-gray-100">{blog.category?.name}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{blog.description}</p>
        </div>
      )}
    </>
  );
};

export default BlogDetails;

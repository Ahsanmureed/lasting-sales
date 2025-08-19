'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import NavBar from './NavBar';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/api/articles?populate=*`
      );
      setBlogs(result.data.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
  <>
  <NavBar/>





    <div className="min-h-screen  pt-28 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-[#059671] mb-10">
        Our Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>


  </>
  );
};

export default Blogs;

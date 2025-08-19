'use client';
import React from 'react';
import Link from 'next/link';
import { User } from "lucide-react";
const BlogCard = ({ blog }) => {
  const { title, description, slug, cover, author, category } = blog;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      {cover?.url && (
        <img
          src={cover.url}
          alt={title}
          className="w-full h-48 object-fit"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#059671] mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>

       <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
  <span className="flex items-center gap-1">
    <User size={16} className="text-gray-500" />
    {author?.name}
  </span>
  <span className="px-2 py-1 rounded bg-gray-100">{category?.name}</span>
</div>

        <Link
          href={`/blogs/${slug}`}
          className="inline-block px-4 py-2 rounded-lg bg-[#059671] text-white hover:bg-[#047b5c] transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

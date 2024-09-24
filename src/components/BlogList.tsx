import React, { useState, useEffect } from 'react';
import { IBlog } from '../models/Blogs';
import { BlogItem } from './BlogType';
import api from '../services/api';
import axios from 'axios';
import { motion } from 'framer-motion';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get<IBlog[]>('/blogs');
        const processedBlogs: IBlog[] = response.data.map(blog => ({
          ...blog,
          blogCreatedAt: new Date(blog.blogCreatedAt).getTime(),
          blogUpdatedAt: new Date(blog.blogUpdatedAt).getTime()
        }));
        setBlogs(processedBlogs);
        setError(null);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        if (axios.isAxiosError(error)) {
          setError(`Failed to fetch blogs: ${error.message}`);
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <div className="container mx-auto px-4 text-red-500 font-semibold text-center py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">Explore Our Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Loading exquisite content...</p>
      ) : (
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BlogList;
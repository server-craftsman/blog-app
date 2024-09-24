import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBlog } from '../models/Blogs';
import { useEffect, useState } from 'react';
import api from '../services/api';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get<IBlog>(`/blogs/${id}`);
        setBlog(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to fetch blog details. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <div className="text-center text-xl text-gray-600">Loading blog details...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center text-xl text-gray-600">Blog not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Back to Blog List</Link>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {blog.blogImage && (
          <img src={blog.blogImage} alt={blog.title} className="w-full h-64 object-cover" />
        )}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <span>By User {blog.userId}</span>
            <span>Published on {new Date(blog.blogCreatedAt).toLocaleDateString()}</span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600">{blog.content}</p>
          </div>
        </div>
      </article>
    </motion.div>
  );
};
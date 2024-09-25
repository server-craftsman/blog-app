import React, { useState, useEffect } from 'react';
import { IBlog } from '../models/Blogs';
import { BlogItem } from './BlogType';
import api from '../services/api';
import axios from 'axios';
import { motion } from 'framer-motion';

const BlogList: React.FC<{ blogs: IBlog[] }> = ({ blogs: initialBlogs }) => {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlogs);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
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

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const displayedBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) {
    return <div className="container mx-auto px-4 text-red-500 font-semibold text-center py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">Explore Our Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-xl text-gray-600">Loading exquisite content...</p>
      ) : (
        <>
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrevPage} 
              disabled={currentPage === 1} 
              className="mx-1 py-2 px-4 rounded-md bg-gray-300 text-gray-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 py-2 px-4 rounded-md ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700'}`}
              >
                {index + 1}
              </button>
            ))}
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages} 
              className="mx-1 py-2 px-4 rounded-md bg-gray-300 text-gray-700 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogList;
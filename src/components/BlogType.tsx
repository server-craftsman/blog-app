import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBlog } from '../models/Blogs';
interface BlogItemProps {
  blog: IBlog;
}

export const BlogItem: React.FC<BlogItemProps> = ({ blog }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="h-full"
  >
    <Link to={`/blog/${blog.id}`} className="block h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
      {blog.blogImage ? (
        <img src={blog.blogImage} alt={blog.title} className="w-full h-48 object-cover flex-shrink-0" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex-shrink-0"></div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{blog.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
          <span>By User {blog.userId}</span>
          <span>{new Date(blog.blogCreatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

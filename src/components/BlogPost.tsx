import React from 'react';
import { IBlog } from '../models/Blogs';

interface BlogPostProps {
  blog: IBlog;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 mb-4">
        Posted on {new Date(blog.blogCreatedAt).toLocaleDateString()}
      </p>
      <div className="prose max-w-none">{blog.content}</div>
    </div>
  );
};

export default BlogPost;
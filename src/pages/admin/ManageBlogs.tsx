import React, { useState, useEffect } from 'react';
import { IBlog } from '../../models/Blogs';
import api from '../../services/api';

const ManageBlogs: React.FC = () => {
  // Removed the unused 'user' variable
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get<IBlog[]>('/blogs');
        setBlogs(response.data);
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (blogId: string) => {
    try {
      await api.delete(`/blogs/${blogId}`);
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    } catch (err) {
      setError('Failed to delete blog');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td className="py-2 px-4 border-b">{blog.id}</td>
              <td className="py-2 px-4 border-b">{blog.title}</td>
              <td className="py-2 px-4 border-b">{blog.userId}</td>
              <td className="py-2 px-4 border-b">{new Date(blog.blogCreatedAt).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlogs;
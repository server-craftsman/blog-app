import React, { useState, useEffect } from 'react';
import Cover from '../components/Cover';
import BlogList from '../components/BlogList';
import Filterbar from '../components/Filterbar';
import { IBlog } from '../models/Blogs';
import api from '../services/api';

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<IBlog[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('Newest');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let updatedBlogs = [...blogs];

    if (selectedFilter !== 'All') {
      updatedBlogs = updatedBlogs.filter(blog => blog.topic === selectedFilter);
    }

    if (sortOption === 'Newest') {
      updatedBlogs.sort((a, b) => new Date(b.blogCreatedAt).getTime() - new Date(a.blogCreatedAt).getTime());
    } else if (sortOption === 'Oldest') {
      updatedBlogs.sort((a, b) => new Date(a.blogUpdatedAt).getTime() - new Date(b.blogUpdatedAt).getTime());
    } else if (sortOption === 'MostPopular') {
      updatedBlogs.sort((a, b) => b.blogUpdatedAt - a.blogCreatedAt);
    }

    setFilteredBlogs(updatedBlogs);
  }, [blogs, selectedFilter, sortOption]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Cover />
      <Filterbar 
        selectedFilter={selectedFilter} 
        sortOption={sortOption} 
        setSelectedFilter={setSelectedFilter} 
        setSortOption={setSortOption} 
      />
      <BlogList blogs={filteredBlogs} />
    </div>
  );
};

export default Home;
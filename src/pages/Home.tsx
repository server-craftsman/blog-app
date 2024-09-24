import React from 'react';
import Cover from '../components/Cover';
import BlogList from '../components/BlogList';
import SearchBar from '../components/SearchBar';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={() => {}} placeholder="Search blogs" />
      <Cover />
      <BlogList />
    </div>
  );
};

export default Home;
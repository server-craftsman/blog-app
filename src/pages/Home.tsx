import React from 'react';
import Cover from '../components/Cover';
import BlogList from '../components/BlogList';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Cover />
      <BlogList />
    </div>
  );
};

export default Home;
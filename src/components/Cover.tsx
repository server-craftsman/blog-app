import React from 'react'

const Cover: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-xl mb-8">Discover amazing stories and insights from our community</p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
          Start Reading
        </button>
      </div>
    </div>  
  );
};

export default Cover;

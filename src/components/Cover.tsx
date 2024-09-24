import React from 'react'

const Cover: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <img 
        src="https://wallpapercave.com/wp/wp6933308.jpg" 
        alt="Cover Image" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative container mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-6 text-gold-500">Welcome to Our Exclusive Blog</h1>
        <p className="text-2xl mb-10 text-gray-200">Discover exquisite stories and insights from our elite community</p>
        <button className="bg-gold-500 text-white font-bold py-3 px-6 rounded-full hover:bg-gold-600 transition duration-300 shadow-lg transform hover:scale-105">
          Start Your Journey
        </button>
      </div>
    </div>  
  );
};

export default Cover;

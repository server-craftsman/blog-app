import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <div className="relative flex-grow">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="border-2 border-gray-300 rounded-l-full px-6 py-3 w-full pl-12 text-lg focus:outline-none focus:border-gold-500 transition duration-300 ease-in-out"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-500"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-8 py-3 rounded-r-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
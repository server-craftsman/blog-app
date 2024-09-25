import React, { useState, useEffect } from 'react';
import { IBlog } from '../models/Blogs';
import api from '../services/api';

interface FilterbarProps {
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
    sortOption: string;
    setSortOption: (option: string) => void;
  }
/* cspell:ignore Filterbar */
const Filterbar: React.FC<FilterbarProps> = ({ selectedFilter, setSelectedFilter, sortOption, setSortOption }) => {
    const [topics, setTopics] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await api.get('/blogs'); 
                const blogs: IBlog[] = response.data;
                const uniqueTopics = Array.from(new Set(blogs.flatMap(blog => blog.topic)));
                setTopics(uniqueTopics);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        fetchTopics();
    }, []);

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
      };
    
      const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
      };
    

    const handleNext = () => {
        if (currentIndex + itemsPerPage < topics.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
            <div className="flex flex-wrap space-x-2">
                <button 
                    onClick={() => handleFilterClick('All')} 
                    className={`filter-button ${selectedFilter === 'All' ? 'bg-purple-700' : ''}`}
                >
                    All
                </button>
                <button onClick={handlePrev} disabled={currentIndex === 0} className="bg-gradient-to-r from-white to-purple-600 text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {topics.slice(currentIndex, currentIndex + itemsPerPage).map(topic => (
                    <button 
                        key={topic} 
                        onClick={() => handleFilterClick(topic)} 
                        className={`filter-button ${selectedFilter === topic ? 'bg-purple-700' : ''}`}
                    >
                        {topic}
                    </button>
                ))}
                <button onClick={handleNext} disabled={currentIndex + itemsPerPage >= topics.length} className="bg-gradient-to-r from-white to-purple-600 text-white rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>
            <div className="flex items-center">
                <select 
                    value={sortOption} 
                    onChange={handleSortChange} 
                    className="bg-gradient-to-r from-white to-indigo-600 text-gray-700 font-bold rounded-lg p-3 shadow-lg transition duration-200 ease-in-out transform hover:scale-105 hover:font-bold focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="MostPopular">Most Popular</option>
                </select>
            </div>
        </div>
    );
};

export default Filterbar;
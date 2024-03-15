import React, { useState } from 'react';
import axios from 'axios';

const SearchSection = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const formattedKeyword = keyword.replace(/\s+/g, '-');
      const response = await axios.get(`https://hunt-grab-api.vercel.app/search?keyword=${formattedKeyword}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <section className="max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Search Section</h2>
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-1 px-2 py-1 rounded-md focus:outline-none" 
            value={keyword} 
            onChange={handleInputChange} 
          />
          <button 
            className="flex items-center justify-center bg-blue-500 text-white rounded-md p-2" 
            onClick={handleSearch} // This line ensures the function is called on button click
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.62 14.563a6.929 6.929 0 1 1 4.939-2.049 6.886 6.886 0 0 1-4.939 2.049z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {searchResult.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Search Result</h3>
            <ul>
              {searchResult.map(item => (
                <li key={item.href_url}>
                  <img src={item.img_src} alt={item.title} className="w-24 h-auto" />
                  <p>{item.title}</p>
                  <p>{item.released}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchSection;

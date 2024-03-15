import React, { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    if (keyword.trim() === '') {
      console.log('Please enter a keyword to search.');
      return;
    }

    try {
      const response = await fetch(`https://hunt-grab-api.vercel.app/search?keyword=${keyword}`);
      const data = await response.json();
      console.log('Search Result:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Enter keyword..."
        className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-400"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

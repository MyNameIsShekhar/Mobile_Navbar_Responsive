import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    let formattedKeyword = keyword.trim().replace(/\s+/g, '-'); // Replace spaces with dashes
    if (formattedKeyword === '') {
      console.log('Please enter a keyword to search.');
      return;
    }
    history.push(`/search?s=${formattedKeyword}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
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

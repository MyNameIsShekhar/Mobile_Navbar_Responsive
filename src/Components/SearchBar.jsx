import React, { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    let formattedKeyword = keyword.trim().replace(/\s+/g, '-'); // Replace spaces with dashes
    if (formattedKeyword === '') {
      console.log('Please enter a keyword to search.');
      return;
    }

    try {
      const response = await fetch(`https://hunt-grab-api.vercel.app/search?keyword=${formattedKeyword}`);
      const data = await response.json();
      console.log('Search Result:', data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
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
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index} className="mb-4">
              <img src={result.img_src} alt={result.title} className="w-20 h-20 mr-4 rounded-md" />
              <div>
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p>{result.released}</p>
                <p><a href={`https://example.com/${result.href_url}`} target="_blank" rel="noopener noreferrer">Watch Now</a></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;

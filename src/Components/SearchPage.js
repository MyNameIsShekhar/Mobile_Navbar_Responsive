import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('s');
    if (searchTerm) {
      // Fetch search results using the searchTerm
      fetchSearchResults(searchTerm);
    }
  }, [location.search]);

  const fetchSearchResults = async (searchTerm) => {
    try {
      const response = await fetch(`https://hunt-grab-api.vercel.app/search?keyword=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Search Results</h1>
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
  );
}

export default SearchPage;

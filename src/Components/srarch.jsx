import React from 'react';

class SearchSection extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <section className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Search Section</h2>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <input type="text" placeholder="Search..." className="flex-1 px-2 py-1 rounded-md focus:outline-none" />
            <button className="flex items-center justify-center bg-blue-500 text-white rounded-md p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.62 14.563a6.929 6.929 0 1 1 4.939-2.049 6.886 6.886 0 0 1-4.939 2.049z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchSection;

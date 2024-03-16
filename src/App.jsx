import React from 'react';
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Search Example</h1>
      <SearchBar />
      </div>

    </>
  );
};


export default App;

import React, { useState, useEffect } from 'react';
import { data } from '../data';
import PearsonCard from './PersonCard';

const SearchResults = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(person => {
      return person.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(filteredData);
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="cards">
        {searchResults.map((result, index) => (
          <PearsonCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

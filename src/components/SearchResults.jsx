import React, { useState, useEffect } from 'react';
import {data} from '../data';
import PersonCard from './PersonCard';

const SearchResults = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = data.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="cards">
        {searchResults.map((result, index) => (
          <PersonCard key={index} person={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

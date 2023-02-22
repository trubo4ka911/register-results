import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import PearsonCard from './PersonCard';
import {data} from '../data';

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

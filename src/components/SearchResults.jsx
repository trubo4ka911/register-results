import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import PersonCard from './PersonCard';
import { data } from '../data';

const SearchResults = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((person) => {
      return person.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(filteredData);
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="cards">
        {searchResults.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

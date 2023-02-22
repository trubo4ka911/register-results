import React, { useState, useEffect } from 'react';
import { data } from '../data';
import PearsonCard from './PersonCard';

const SearchResults = ({ searchQuery }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredData = data && data.filter(person => {
      return person.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log("filtered data:", filteredData);
    setSearchResults(filteredData || []);
  }, [searchQuery, data]);
  
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

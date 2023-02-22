import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';
import {data} from '../data';

const SearchResults = ({ searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const filteredData = data.filter(person => {
        return person.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      console.log("filtered data:", filteredData);
      setSearchResults(filteredData);
    }, [searchQuery]);
  
    console.log("search results:", searchResults);
  
    return (
      <div className="search-results">
        <h2>Search Results</h2>
        <div className="cards">
          {searchResults.map((result, index) => (
            <PersonCard key={index} result={result} />
          ))}
        </div>
      </div>
    );
  };
  
export default SearchResults;

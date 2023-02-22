import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import PersonCard from './PersonCard';

const SearchResults = ({ peopleData, searchQuery, setSearchResults }) => {
  const [filteredPeopleData, setFilteredPeopleData] = useState(peopleData || []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/results');
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Search Results</h1>
      <SearchForm />
      {filteredPeopleData.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default SearchResults;

import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import PersonCard from './PersonCard';

const SearchResults = ({ peopleData, searchQuery, setSearchQuery }) => {
  const [filteredPeopleData, setFilteredPeopleData] = useState(peopleData);

  useEffect(() => {
    const filteredData = peopleData.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPeopleData(filteredData);
  }, [peopleData, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <SearchForm handleSearch={handleSearch} />
      {filteredPeopleData.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};

export default SearchResults;

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PersonCard from './PersonCard';
import { data } from '../data';

const SearchResults = () => {
  const [filteredPeopleData, setFilteredPeopleData] = useState(data);

  const handleSearch = (searchValue) => {
    const filteredData = data.filter((person) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPeopleData(filteredData);
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

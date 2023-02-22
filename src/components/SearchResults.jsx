import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import PersonCard from './PersonCard';

const SearchResults = ({ peopleData, searchQuery }) => {
  const [filteredPeopleData, setFilteredPeopleData] = useState(peopleData || []);

  useEffect(() => {
    if (!peopleData) {
      return;
    }

    const filteredData = peopleData.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPeopleData(filteredData);
  }, [peopleData, searchQuery]);

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

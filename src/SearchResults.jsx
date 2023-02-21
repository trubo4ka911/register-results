import React, { useState } from 'react';
import PersonCard from './components/PersonCard';

const SearchResults = ({ peopleData, searchTerm }) => {
  const [filteredPeopleData, setFilteredPeopleData] = useState([]);

  useState(() => {
    setFilteredPeopleData(
      peopleData.filter((person) => {
        const nameMatches = person.name.toLowerCase().includes(searchTerm.toLowerCase());
        const idMatches = person.id.toString().includes(searchTerm);
        return nameMatches || idMatches;
      })
    );
  }, [peopleData, searchTerm]);

  return (
    <>
      {filteredPeopleData.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </>
  );
};

export default SearchResults;

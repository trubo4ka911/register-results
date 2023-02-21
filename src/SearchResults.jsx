import React from 'react';
import PersonCard from './components/PersonCard';
import { ResultsWrapper, NoResults } from './SearchResults.styled';

const SearchResults = ({ filteredPeopleData }) => {
  if (filteredPeopleData.length === 0) {
    return <span>No results found.</span>;
  }

  return (
    <ResultsWrapper>
      {filteredPeopleData.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </ResultsWrapper>
  );
};

export default SearchResults;

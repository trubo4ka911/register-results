import React, { useState } from 'react';
import {
  FormWrapper,
  Input,
  Button,
  ErrorMessage,
} from './components/SearchForm.styled';

const SearchForm = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setError('');
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchText.trim() === '') {
      setError('Please enter a search term.');
    } else {
      onSearch(searchText);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search by name or ID"
          value={searchText}
          onChange={handleSearchChange}
        />
        <Button type="submit">Search</Button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrapper>
  );
};

export default SearchForm;

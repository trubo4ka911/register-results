import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

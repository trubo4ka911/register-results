import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue('');
    handleSearch('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Search by name:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default SearchForm;

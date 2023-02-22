import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleInputChange = (e) => {
      const query = e.target.value;
    //   setSearchValue(query);
    //   handleSearch(query);
    };
  
    return (
      <form>
        <label htmlFor="search">Search:</label>
         <input type="text" id="search" onChange={handleInputChange} />
        <button type="reset" onClick={() => handleSearch("")}>
          Clear
        </button>
      </form>
    );
  };
  

export default SearchForm;

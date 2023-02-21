import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { data } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeopleData, setFilteredPeopleData] = useState(data);

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
    setFilteredPeopleData(
      data.filter((person) => {
        const nameMatches = person.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const idMatches = person.id.toString().includes(searchText);
        return nameMatches || idMatches;
      })
    );
  };

  return (
    <div className="App">
      <h1>Search Results</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults filteredPeopleData={filteredPeopleData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { data } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((person) => {
    const nameMatches = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const idMatches = person.id.toString().includes(searchTerm);
    return nameMatches || idMatches;
  });

  return (
    <div>
      <h1>Search App</h1>
      <SearchForm onSearch={setSearchTerm} />
      <SearchResults data={filteredData} />
    </div>
  );
}

export default App;

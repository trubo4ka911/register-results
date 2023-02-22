import React, { useState } from "react";

import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Registration results</h1>
      <SearchForm handleSearch={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
}

export default App;

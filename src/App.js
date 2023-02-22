import { useState } from "react";
import { data } from "./data";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [peopleData, setPeopleData] = useState(data.people);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResults
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        peopleData={peopleData}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import { data } from "./data";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [peopleData, setPeopleData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {/* <SearchForm handleSearch={handleSearch} /> */}
      <SearchResults searchQuery={searchQuery} data={data} />
    </div>
  );
}

export default App;

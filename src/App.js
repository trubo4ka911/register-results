import { useState } from "react";
import { data } from "./data";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [peopleData, setPeopleData] = useState(data.people);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults peopleData={data} searchQuery={searchQuery} />
    </div>
  );
}

export default App;

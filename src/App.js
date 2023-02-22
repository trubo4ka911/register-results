import { useState } from "react";
import { data } from "./data";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";
import UserRegistration from "./components/UserRegistration";
import TotalParticipants from "./components/TotalParticipants";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResults searchQuery={searchQuery} />
      <UserRegistration />
      <TotalParticipants />
    </div>
  );
}

export default App;

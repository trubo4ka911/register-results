import { useState } from "react";
import { data } from "./data";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";
import UserRegistration from "./components/UserRegistration";
import TotalParticipants from "./components/TotalParticipants";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [peopleData, setPeopleData] = useState(data.people);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults peopleData={data} searchQuery={searchQuery} />
      <UserRegistration />
      <TotalParticipants />
    </div>
  );
}

export default App;

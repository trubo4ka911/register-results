import React, { useState } from "react";
import PeopleList from "./components/PeopleList";
import Store from "./components/Store";
import SearchForm from "./components/SearchForm";
import peopleData from "./peopleData.json";

const App = () => {
  const [store] = useState(() => Store());
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredPeopleData = searchTerm
    ? peopleData.filter((person) => {
        const nameMatches = person.name
          .toLowerCase()
          .includes(searchTerm.toString().toLowerCase());
        const idMatches = person.id.toString().includes(searchTerm);
        return nameMatches || idMatches;
      })
    : peopleData;

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <PeopleList
        peopleData={filteredPeopleData}
        store={store}
        searchTerm={searchTerm}
        filteredPeopleData={filteredPeopleData}
      />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Search from "./Search";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/phonebook").then((response) => {
      setPersons(response.data);
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        persons={persons}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setResults={setResults}
      />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        setResults={setResults}
      />
      <Persons results={results} />
    </div>
  );
};

export default App;

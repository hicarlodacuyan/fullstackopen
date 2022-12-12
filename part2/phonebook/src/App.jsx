import { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Search from "./Search";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(persons);

  useEffect(() => {
    phonebook.getAllContacts().then((initialPhonebook) => {
      setPersons(initialPhonebook);
      setResults(initialPhonebook);
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
        phonebook={phonebook}
      />
      <Persons
        persons={persons}
        results={results}
        setPersons={setPersons}
        setResults={setResults}
        phonebook={phonebook}
      />
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Search from "./Search";
import phonebook from "./services/phonebook";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(persons);
  const [statusMessage, setStatusMessage] = useState({ text: "", status: "" });

  useEffect(() => {
    phonebook.getAllContacts().then((initialPhonebook) => {
      setPersons(initialPhonebook);
      setResults(initialPhonebook);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={statusMessage} />
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
        setStatusMessage={setStatusMessage}
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

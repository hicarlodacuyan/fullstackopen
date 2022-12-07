const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  setResults,
}) => {
  const existsInPhonebook = (phonebook, newName) =>
    phonebook.some((person) => person.name === newName);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (existsInPhonebook(persons, newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewPhone("");
      return;
    }

    const person = { id: persons.length + 1, name: newName, phone: newPhone };
    setPersons([...persons].concat(person));
    setResults([...persons].concat(person));

    setNewName("");
    setNewPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        phone:
        <input
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  setResults,
  phonebook,
  setStatusMessage,
}) => {
  const existsInPhonebook = (phonebook, newName) =>
    phonebook.some((person) => person.name === newName);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = { name: newName, number: newPhone };

    if (existsInPhonebook(persons, newName)) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const foundElement = persons.find((person) => person.name === newName);
        const { id } = foundElement;

        phonebook
          .updateContact(id, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );

            setResults(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            setStatusMessage({
              text: `Information of ${newPerson.name} has already been removed from server. Please refresh your browser.`,
              status: "error",
            });

            setTimeout(() => {
              setStatusMessage({ text: "", status: "" });
            }, 5000);
          });
      }

      setNewName("");
      setNewPhone("");
      return;
    }

    phonebook.createContact(newPerson).then((returnedNote) => {
      setPersons([...persons].concat(returnedNote));
      setResults([...persons].concat(returnedNote));
      setStatusMessage({
        text: `${newPerson.name} has been added`,
        status: "success",
      });

      setTimeout(() => {
        setStatusMessage({ text: "", status: "" });
      }, 5000);
    });

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

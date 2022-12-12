const Persons = ({ persons, setPersons, results, setResults, phonebook }) => {
  const handleDelete = (name, id) => {
    if (confirm(`Delete ${name}?`)) {
      phonebook.deleteContact(id).then((response) => {
        if (response.status === 200) {
          const updatedContacts = persons.filter((person) => person.id !== id);

          setPersons(updatedContacts);
          setResults(updatedContacts);
        } else {
          console.log("No such contact");
        }
      });
    } else {
      return;
    }
  };

  return (
    <>
      <h3>Contact details</h3>
      <div>
        {results.length > 0 &&
          results.map((person) => (
            <p key={person.id}>
              {`${person.name}: ${person.phone}`}
              <button onClick={() => handleDelete(person.name, person.id)}>
                delete
              </button>
            </p>
          ))}
      </div>
    </>
  );
};

export default Persons;

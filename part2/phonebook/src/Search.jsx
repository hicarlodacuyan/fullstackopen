const Search = ({ persons, searchQuery, setSearchQuery, setResults }) => {
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length === 0) {
      setResults(persons);
    } else {
      const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredPersons);
    }
  };

  return (
    <div>
      filter shown with
      <input value={searchQuery} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;

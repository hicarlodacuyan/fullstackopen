const Persons = ({ results }) => {
  return (
    <>
      <h3>Contact details</h3>
      <div>
        {results.length > 0 &&
          results.map((person) => (
            <p key={person.id}>{`${person.name}: ${person.phone}`}</p>
          ))}
      </div>
    </>
  );
};

export default Persons;

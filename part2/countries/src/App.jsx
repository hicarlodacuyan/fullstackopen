import { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;

    if (query.length === 0) setSearchResults([]);
    else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredCountries);
    }
  };

  return (
    <div>
      find countries <input type="text" onChange={handleSearch} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default App;

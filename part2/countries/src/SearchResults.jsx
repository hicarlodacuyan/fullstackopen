import { useState } from "react";
import WeatherData from "./WeatherData";

const SearchResults = ({ searchResults }) => {
  const [singleCountry, setSingleCountry] = useState({});
  const [toggleSingleCountry, setToggleSingleCountry] = useState(false);

  const handleView = (country, weather) => {
    const languages = [];

    for (let key in country.languages) {
      if (country.languages.hasOwnProperty(key)) {
        languages.push({ key, name: country.languages[key] });
      }
    }

    return (
      <>
        <h1>
          {country.name.common}
          {toggleSingleCountry ? (
            <button
              onClick={() => setToggleSingleCountry(!toggleSingleCountry)}
            >
              hide
            </button>
          ) : (
            ""
          )}
        </h1>
        <p>{country.capital[0]}</p>
        <p>area {country.area}</p>
        <p>
          <strong>languages:</strong>
        </p>
        <ul>
          {languages.map((language) => (
            <li key={language.key}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" />
        <WeatherData country={country.name.common} />
      </>
    );
  };

  // User click the show button on a single country
  if (toggleSingleCountry) return handleView(singleCountry);

  // User search for a specific country's name
  if (searchResults.length === 1) return handleView(searchResults[0]);

  return (
    <div>
      {searchResults.length < 10 ? (
        searchResults.map((country) => (
          <p key={country.name.official}>
            {country.name.common}
            <button
              onClick={() => {
                setSingleCountry(country);
                setToggleSingleCountry(!toggleSingleCountry);
              }}
            >
              show
            </button>
          </p>
        ))
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
};

export default SearchResults;

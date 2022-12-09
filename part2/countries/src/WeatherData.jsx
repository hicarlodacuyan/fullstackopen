import { useState, useEffect } from "react";
import axios from "axios";

const WeatherData = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchCountryWeather = (name) => {
      const API_KEY = `${import.meta.env.VITE_OPENWEATHERMAP_APIKEY}`;
      const request = `https://api.openweathermap.org/data/2.5/find?q=${name}&units=metric&appid=${API_KEY}`;

      axios.get(request).then((response) => setWeather(response.data.list[0]));
    };

    fetchCountryWeather(country);
  }, []);

  return (
    weather && (
      <div>
        <h2>Weather in {country}</h2>
        <p>temperature {weather.main.temp} celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    )
  );
};

export default WeatherData;
